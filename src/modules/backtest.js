const moment = require('moment');
const _ = require('lodash');
const StrategyManager = require('./strategy/strategy_manager');
const Resample = require('../utils/resample');
const CommonUtil = require('../utils/common_util');

module.exports = class Backtest {
  constructor(instances, strategyManager, exchangeCandleCombine, projectDir) {
    this.instances = instances;
    this.strategyManager = strategyManager;
    this.exchangeCandleCombine = exchangeCandleCombine;
    this.projectDir = projectDir;
  }

  async getBacktestPairs() {
    // @TODO: resolve n+1 problem (issue on big database)
    const asyncs = this.instances.symbols.map((symbol) => {
      return async () => {
        // its much too slow to fetch this
        // const periods = await this.exchangeCandleCombine.fetchCandlePeriods(symbol.exchange, symbol.symbol);
        const periods = [];

        return {
          name: `${symbol.exchange}.${symbol.symbol}`,
          options: periods.length > 0 ? periods : ['15m', '1m', '5m', '1h', '4h'],
        };
      };
    });

    const promise = await Promise.all(asyncs.map((fn) => fn()));
    return promise.sort((a, b) => {
      const x = a.name;
      const y = b.name;
      return x < y ? -1 : x > y ? 1 : 0;
    });
  }

  getBacktestStrategies() {
    return this.strategyManager.getStrategies().map((strategy) => {
      return {
        name: strategy.getName(),
        options: typeof strategy.getOptions !== 'undefined' ? strategy.getOptions() : undefined,
      };
    });
  }

  async getSentimentBinanceFuturres(symbol) {
    const [topTraders, globalTraders] = await Promise.all([
      fetch(
        'https://fapi.binance.com/futures/data/topLongShortPositionRatio?symbol=' + symbol + '&period=30m&limit=500'
      ),
      fetch(
        'https://fapi.binance.com/futures/data/globalLongShortAccountRatio?symbol=' + symbol + '&period=30m&limit=500'
      ),
    ]);

    const array_top = await topTraders.json();
    const array_global = await globalTraders.json();

    return {
      array_top: array_top,
      array_global: array_global,
    };
  }

  isBuyOrSell(longShortRatioTOPBefore, longShortRatioTOPAfter, longShortRatioGLOBALBefore, longShortRatioGLOBALAfter) {
    if (longShortRatioTOPBefore > longShortRatioTOPAfter) { //increment short TOP
      if (longShortRatioGLOBALBefore > longShortRatioGLOBALAfter) { //increment short Global
        //nothing
        return {
          buy: 0,
          sell: 0,
          incremetShortTOP: longShortRatioTOPBefore - longShortRatioTOPAfter,
          incremetShortGlobal: longShortRatioGLOBALBefore - longShortRatioGLOBALAfter,
          incrementLogTOP: 0,
          incrementLogGlobal: 0,
        };
      } else { //increment long

        if ((longShortRatioGLOBALAfter - longShortRatioGLOBALBefore) > 0.19) {
          return {
            buy: 3,
            sell: 0,
            incremetShortTOP: longShortRatioTOPBefore - longShortRatioTOPAfter,
            incremetShortGlobal: 0,
            incrementLogTOP: 0,
            incrementLogGlobal: longShortRatioGLOBALAfter - longShortRatioGLOBALBefore,
          };
        }
        //sell
        return {
          buy: 0,
          sell: 3,
          incremetShortTOP: longShortRatioTOPBefore - longShortRatioTOPAfter,
          incremetShortGlobal: 0,
          incrementLogTOP: 0,
          incrementLogGlobal: longShortRatioGLOBALAfter - longShortRatioGLOBALBefore,
        };
      }
    } else if (longShortRatioTOPBefore == longShortRatioTOPAfter) { //constant
      //nothing
      return {
        buy: 0,
        sell: 0,
        incremetShortTOP: 0,
        incremetShortGlobal: 0,
        incrementLogTOP: 0,
        incrementLogGlobal: 0,
      };
    } else { //increment log TOP
      if (longShortRatioGLOBALBefore >= longShortRatioGLOBALAfter) { //increment short Global

        if ((longShortRatioGLOBALBefore - longShortRatioGLOBALAfter) > 0.19) {
          return {
            buy: 0,
            sell: 3,
            incremetShortTOP: longShortRatioTOPBefore - longShortRatioTOPAfter,
            incremetShortGlobal: 0,
            incrementLogTOP: 0,
            incrementLogGlobal: longShortRatioGLOBALAfter - longShortRatioGLOBALBefore,
          };
        }

        //buy
        return {
          buy: 3,
          sell: 0,
          incremetShortTOP: 0,
          incremetShortGlobal: longShortRatioGLOBALBefore - longShortRatioGLOBALAfter,
          incrementLogTOP: longShortRatioTOPAfter - longShortRatioTOPBefore,
          incrementLogGlobal: 0,
        };

      } else { //increment long
        //nothing
        return {
          buy: 0,
          sell: 0,
          incremetShortTOP: 0,
          incremetShortGlobal: 0,
          incrementLogTOP: longShortRatioTOPAfter - longShortRatioTOPBefore,
          incrementLogGlobal: longShortRatioGLOBALBefore - longShortRatioGLOBALBefore,
        };
      }
    }

  }

  getBacktestResult(tickIntervalInMinutes, hours, strategy, candlePeriod, exchange, pair, options, initial_capital) {
    return new Promise(async (resolve) => {
      const start = moment()
        .startOf('hour')
        .subtract(hours * 60, 'minutes')
        .unix();

      // collect candles for cart and allow a prefill of eg 200 candles for our indicators starts

      const rows = [];
      let current = start;

      // mock repository for window selection of candles
      const periodCache = {};
      const prefillWindow = start - Resample.convertPeriodToMinute(candlePeriod) * 200 * 60;
      const mockedRepository = {
        fetchCombinedCandles: async (mainExchange, symbol, period, exchanges = []) => {
          const key = mainExchange + symbol + period;
          if (!periodCache[key]) {
            periodCache[key] = await this.exchangeCandleCombine.fetchCombinedCandlesSince(
              mainExchange,
              symbol,
              period,
              exchanges,
              prefillWindow
            );
          }

          const filter = {};
          for (const ex in periodCache[key]) {
            filter[ex] = periodCache[key][ex].slice().filter((candle) => candle.time < current);
          }

          return filter;
        },
      };

      // store last triggered signal info
      const lastSignal = {
        price: undefined,
        signal: undefined,
      };

      // store missing profit because of early close
      const lastSignalClosed = {
        price: undefined,
        signal: undefined,
      };

      let array_all = await this.getSentimentBinanceFuturres(pair)
      let array_top = array_all.array_top;
      let array_global = array_all.array_global;
      // console.log('array_top -->' + JSON.stringify(array_top));
      // console.log('array_global -->' + JSON.stringify(array_global));


      const end = moment().unix();
      while (current < end) {
        let current_str = '' + current + '000';
        let new_current = parseInt(current_str, 10); // - 30 min
        let new_current_30 = new_current - 1800000; // - 30 min
        // console.log('new_current--<' + new_current)
        // console.log('new_current1800000--<' + new_current_30)

        let buy_or_sell = {};

        let array_last_current_top = array_top.filter((t) => new_current_30 >= t.timestamp);
        let array_last_current_global = array_global.filter((t) => new_current_30 >= t.timestamp);
        // console.log('array_last_current_top -->' + JSON.stringify(array_last_current_top));
        // console.log('array_last_current_global -->' + JSON.stringify(array_last_current_global));


        let last_top_before = array_last_current_top.slice(-2)[0]
        // console.log('last_top_before -->' + JSON.stringify(last_top_before));
        let last_top_after = array_last_current_top.slice(-2)[1]
        let last_global_before = array_last_current_global.slice(-2)[0]
        let last_global_after = array_last_current_global.slice(-2)[1]

        if (last_top_before === undefined || last_top_after === undefined || last_global_before === undefined || last_global_after === undefined) {
          buy_or_sell = {
            buy: 0,
            sell: 0,
            incremetShortTOP: 0,
            incremetShortGlobal: 0,
            incrementLogTOP: 0,
            incrementLogGlobal: 0,
          };
        } else {

          buy_or_sell = this.isBuyOrSell(
            parseFloat(last_top_before.longShortRatio),
            parseFloat(last_top_after.longShortRatio),
            parseFloat(last_global_before.longShortRatio),
            parseFloat(last_global_after.longShortRatio)
          );
        }

        const strategyManager = new StrategyManager({}, mockedRepository, {}, this.projectDir);

        const item = await strategyManager.executeStrategyBacktest(
          strategy,
          exchange,
          pair,
          options,
          lastSignal.signal,
          lastSignal.price,
          buy_or_sell
        );
        item.time = current;

        // so change in signal
        let currentSignal = item.result ? item.result.getSignal() : undefined;
        if (currentSignal === lastSignal.signal) {
          currentSignal = undefined;
        }

        // position profit
        if (lastSignal.price) {
          item.profit = CommonUtil.getProfitAsPercent(lastSignal.signal, item.price, lastSignal.price);
        }

        if (['long', 'short'].includes(currentSignal)) {
          lastSignal.signal = currentSignal;
          lastSignal.price = item.price;

          lastSignalClosed.signal = undefined;
          lastSignalClosed.price = undefined;
        } else if (currentSignal === 'close') {
          lastSignalClosed.signal = lastSignal.signal;
          lastSignalClosed.price = lastSignal.price;

          lastSignal.signal = undefined;
          lastSignal.price = undefined;
        }

        // calculate missing profits because of closed position until next event
        if (!currentSignal && lastSignalClosed.price) {
          if (lastSignalClosed.signal === 'long' && lastSignalClosed.price) {
            item.lastPriceClosed = parseFloat(((item.price / lastSignalClosed.price - 1) * 100).toFixed(2));
          } else if (lastSignalClosed.signal === 'short' && lastSignalClosed.price) {
            item.lastPriceClosed = parseFloat(((lastSignalClosed.price / item.price - 1) * 100).toFixed(2));
          }
        }

        rows.push(item);

        current += tickIntervalInMinutes * 60;
      }

      const signals = rows.slice().filter((r) => r.result && r.result.getSignal());

      const dates = {};

      signals.forEach((signal) => {
        if (!dates[signal.time]) {
          dates[signal.time] = [];
        }

        dates[signal.time].push(signal);
      });

      const exchangeCandles = await mockedRepository.fetchCombinedCandles(exchange, pair, candlePeriod);
      const candles = exchangeCandles[exchange]
        .filter((c) => c.time > start)
        .map((candle) => {
          let signals;

          for (const time in JSON.parse(JSON.stringify(dates))) {
            if (time >= candle.time) {
              signals = dates[time].map((i) => {
                return {
                  signal: i.result.getSignal(),
                };
              });
              delete dates[time];
            }
          }

          return {
            date: new Date(candle.time * 1000),
            open: candle.open,
            high: candle.high,
            low: candle.low,
            close: candle.close,
            volume: candle.volume,
            signals: signals,
          };
        });

      const backtestSummary = await this.getBacktestSummary(signals, initial_capital);
      resolve({
        summary: backtestSummary,
        rows: rows.slice().reverse(),
        signals: signals.slice().reverse(),
        candles: JSON.stringify(candles),
        extra_fields: this.strategyManager.getBacktestColumns(strategy),
        strategy: strategy,
        start: new Date(start * 1000),
        end: candles[0] ? candles[0].date : new Date(),
        configuration: {
          exchange: exchange,
          symbol: pair,
          period: candlePeriod,
        },
      });
    });
  }

  getBacktestSummary(signals, initial_capital) {
    return new Promise(async (resolve) => {
      const initialCapital = Number(initial_capital); // 1000 $ Initial Capital
      let workingCapital = initialCapital; // Capital that changes after every trade

      let lastPosition; // Holds Info about last action

      let averagePNLPercent = 0; // Average ROI or PNL Percentage

      const trades = {
        profitableCount: 0, // Number of Profitable Trades
        lossMakingCount: 0, // Number of Trades that caused a loss
        total: 0, // Totol number of Trades
        profitabilityPercent: 0, // Percentage Of Trades that were profitable
      };

      let cumulativePNLPercent = 0; // Sum of all the PNL Percentages
      const pnlRateArray = []; // Array of all PNL Percentages of all the trades

      // Iterate over all the signals
      for (let s = 0; s < signals.length; s++) {
        const signalObject = signals[s];
        const signalType = signalObject.result._signal; // Can be long,short,close

        // When a trade is closed
        if (signalType == 'close') {
          // Increment the total trades counter
          trades.total += 1;

          // Entry Position Details
          const entrySignalType = lastPosition.result._signal; // Long or Short
          const entryPrice = lastPosition.price; // Price during the trade entry
          const tradedQuantity = Number((workingCapital / entryPrice).toFixed(2)); // Quantity

          // Exit Details
          const exitPrice = signalObject.price; // Price during trade exit
          const exitValue = Number((tradedQuantity * exitPrice).toFixed(2)); // Price * Quantity

          // Trade Details
          let pnlValue = 0; // Profit or Loss Value

          // When the position is Long
          if (entrySignalType == 'long') {
            if (exitPrice > entryPrice) {
              // Long Trade is Profitable
              trades.profitableCount += 1;
            }

            // Set the PNL
            pnlValue = exitValue - workingCapital;
          } else if (entrySignalType == 'short') {
            if (exitPrice < entryPrice) {
              // Short Trade is Profitable
              trades.profitableCount += 1;
            }

            // Set the PNL
            pnlValue = -(exitValue - workingCapital);
          }

          // Percentage Return
          const pnlPercent = Number(((pnlValue / workingCapital) * 100).toFixed(2));

          // Summation of Percentage Return
          cumulativePNLPercent += pnlPercent;

          // Maintaining the Percentage array
          pnlRateArray.push(pnlPercent);

          // Update Working Cap
          workingCapital += pnlValue;
        } else if (signalType == 'long' || signalType == 'short') {
          // Enter into a position
          lastPosition = signalObject;
        }
      }

      // Lossmaking Trades
      trades.lossMakingCount = trades.total - trades.profitableCount;

      // Calculating the Sharpe Ratio ----------------------------------------------------------

      // Average PNL Percent
      averagePNLPercent = Number((cumulativePNLPercent / trades.total).toFixed(2));

      // Initialize Sum of Mean Square Differences
      let msdSum = 0;

      // (Mean - value)^2
      for (let p = 0; p < pnlRateArray.length; p++) {
        // Sum of Mean Square Differences
        msdSum += Number(((averagePNLPercent - pnlRateArray[p]) ^ 2).toFixed(2));
      }

      const variance = Number((msdSum / trades.total).toFixed(2)); // Variance

      const stdDeviation = Math.sqrt(variance); // STD Deviation from the mean

      // TODO:  Test the Sharpe Ratio
      const sharpeRatio = Number(((averagePNLPercent - 3.0) / stdDeviation).toFixed(2));

      // -- End of Sharpe Ratio Calculation

      // Net Profit
      const netProfit = Number((((workingCapital - initialCapital) / initialCapital) * 100).toFixed(2));

      trades.profitabilityPercent = Number(((trades.profitableCount * 100) / trades.total).toFixed(2));

      const summary = {
        sharpeRatio: sharpeRatio,
        averagePNLPercent: averagePNLPercent,
        netProfit: netProfit,
        initialCapital: initialCapital,
        finalCapital: Number(workingCapital.toFixed(2)),
        trades: trades,
      };

      resolve(summary);
    });
  }
};