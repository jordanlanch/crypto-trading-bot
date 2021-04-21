const request = require('request');

module.exports = {
  /**
   * Init helper for FTX exchange to fetch usd based "perp" contract pairs with a callback to ignore and add trading options
   * @param callback
   * @returns {Promise<unknown>}
   */
  ftxInitPerp: async callback => {
    return new Promise(resolve => {
      request('https://ftx.com/api/markets', (_error, _res, body) => {
        if (_error) {
          resolve([]);
          return;
        }

        const response = JSON.parse(body);
        if (!response.result) {
          resolve([]);
          return;
        }

        const markets = response.result;
        const pairs = [];

        markets
          .filter(m => m.enabled === true && m.type === 'future')
          .filter(m => m.name.endsWith('-PERP')) // name filter
          .forEach(pair => {
            let result = {
              symbol: pair.name,
              periods: ['1m', '15m', '1h'],
              exchange: 'ftx'
            };

            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  },

  /**
   * Init helper for Binance to fetch all USDT pairs
   * @param callback
   * @returns {Promise<unknown>}
   */
  binanceInitUsd: async callback => {
    return new Promise(resolve => {
      request('https://api.binance.com/api/v1/exchangeInfo', (_error, _res, body) => {
        const pairs = [];

        let content;
        try {
          content = JSON.parse(body);
        } catch (e) {
          console.log(`Binance init issues: ${String(e)} ${body}`);
          resolve([]);
          return;
        }

        if (!content.symbols) {
          console.log(`Binance symbol format issues: ${body}`);
          resolve([]);
          return;
        }

        content.symbols
          .filter(
            p => ['USDT'].includes(p.quoteAsset) &&
            !['USDC', 'PAX', 'USDS', 'TUSD', 'BUSD'].includes(p.baseAsset) &&
            p.status.toLowerCase() === 'trading'
          )
          .forEach(pair => {
            let result = {
              symbol: pair.symbol,
              periods: ['1h', '4h', '6h', '12h'],
              exchange: 'binance',
              state: 'trade',
              trade: {
                currency_capital: 60,
              },
              strategies: [{
                strategy: 'trader_macd',
                options: {
                  period: '12h',
                },
              }, ],
            };

            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  },

  /**
   * Init helper for Binance to fetch all USDT pairs with spot only
   * @param callback
   * @returns {Promise<unknown>}
   */
  binanceInitSpotUsd: async callback => {
    const crossMarginPairs = await module.exports.binanceCrossMarginPairs();

    return module.exports.binanceInitUsd((result, pair) => {
      if (pair.isMarginTradingAllowed && crossMarginPairs.includes(pair.baseAsset)) {
        return undefined;
      }

      if (!callback) {
        return result;
      }

      return callback(result, pair);
    });
  },

  /**
   * There is API (or not documented) where to filter isolated and cross margin wallet pairs take them from fee page api
   *
   * @link https://www.binance.com/de/margin-fee
   * @returns {Promise<unknown>}
   */
  binanceCrossMarginPairs: () => {
    return new Promise(resolve => {
      request('https://www.binance.com/gateway-api/v1/friendly/margin/vip/spec/list-all', (_error, _res, body) => {
        const content = JSON.parse(body);
        const crossMarginPairs = content.data.map(i => i.assetName);

        resolve(crossMarginPairs);
      });
    });
  },

  /**
   * Init helper for Binance to fetch all USDT pairs with margin only
   * @param callback
   * @returns {Promise<unknown>}
   */
  binanceInitMarginUsd: async callback => {
    const crossMarginPairs = await module.exports.binanceCrossMarginPairs();

    return module.exports.binanceInitUsd((result, pair) => {
      if (!pair.isMarginTradingAllowed || !crossMarginPairs.includes(pair.baseAsset)) {
        return undefined;
      }

      result.exchange = 'binance_margin';

      if (!callback) {
        return result;
      }

      return callback(result, pair);
    });
  },

  /**
   * Init helper for Bitmex exchange to fetch only contracts; not this option like pair or weekly / daily pairs
   * @param callback
   * @returns {Promise<unknown>}
   */
  bitmexInit: async callback => {
    return new Promise(resolve => {
      request('https://www.bitmex.com/api/v1/instrument/active', (_error, _res, body) => {
        const pairs = [];

        const content = JSON.parse(body);

        content
          .filter(p => ['FFCCSX', 'FFWCSX'].includes(p.typ))
          .forEach(pair => {
            let result = {
              symbol: pair.symbol,
              periods: ['1m', '15m', '1h'],
              exchange: 'bitmex'
            };

            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  },

  /**
   * Init helper for Binance futures exchange to fetch active contracts
   * @param callback
   * @returns {Promise<unknown>}
   */
  binanceFuturesInit: async callback => {
    return new Promise(resolve => {
      request('https://fapi.binance.com/fapi/v1/exchangeInfo', (_error, _res, body) => {
        const pairs = [];

        const content = JSON.parse(body);

        content.symbols
          .filter(p => p.status.toUpperCase() === 'TRADING')
          // .filter(
          //   (p) =>
          //   !p.symbol.toUpperCase().startsWith('BTC') &&
          //   !p.symbol.toUpperCase().startsWith('ETH') &&
          //   !p.symbol.toUpperCase().startsWith('BCH') &&
          //   !p.symbol.toUpperCase().startsWith('XRP') &&
          //   !p.symbol.toUpperCase().startsWith('EOS') &&
          //   !p.symbol.toUpperCase().startsWith('ADA') &&
          //   !p.symbol.toUpperCase().startsWith('ETC') &&
          //   !p.symbol.toUpperCase().startsWith('LINK') &&
          //   !p.symbol.toUpperCase().startsWith('DASH') &&
          //   !p.symbol.toUpperCase().startsWith('XMR') &&
          //   !p.symbol.toUpperCase().startsWith('LTC')
          // )
          .forEach(pair => {
            let result = {
              symbol: pair.symbol,
              periods: ['1h', '2h', '4h', '6h'],
              exchange: 'binance_futures',
              state: 'trade',
              watchdogs: [
                {
                name: 'risk_reward_ratio',
                target_percent: 3.5,
                stop_percent: 1.5,
              }, ],
              trade: {
                currency_capital: 60,
                strategies: [{
                    strategy: 'custom_all',
                    "interval": "15m",
                    options: {
                      period: '6h',
                    },
                  },
                  // {
                  //   "strategy": "dca_dipper",
                  //   "interval": "15m",
                  //   "options": {
                  //     "period": "15m",

                  //     "percent_below_price": 0.1,
                  //     "hma_period": 12,
                  //     "hma_source": "low"
                  //   }
                  // },
                  // {
                  //   "strategy": "dip_catcher",
                  //   "interval": "15m",
                  //   "options": {
                  //     "period": "15m",
                  //     "trend_cloud_multiplier": 4,
                  //     "hma_high_period": 9,
                  //     "hma_high_candle_source": "close",
                  //     "hma_low_period": 9,
                  //     "hma_low_candle_source": "close"
                  //   }
                  // }
                ]
              },

            };
            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  },

  bitfinexUsdMarginInit: async callback => {
    return new Promise(resolve => {
      request('https://api.bitfinex.com/v1/symbols_details', (_error, _res, body) => {
        const pairs = [];

        const content = JSON.parse(body);

        
        content
          .filter(
            (p) =>
            p.margin === true &&
            p.pair.endsWith('usd') &&
            !p.pair.startsWith('ust')
          )
          .filter(
            (p) =>
            // console.log('pair-->'+p.pair)
            p.pair.startsWith('ada')  ||
            p.pair.startsWith('dot')  ||
            p.pair.startsWith('eth')  ||
            p.pair.startsWith('xrp')  ||
            p.pair.startsWith('ltc')  
          )
          .forEach((pair) => {
            // console.log(pair)
            let result = {
              symbol: pair.pair.toUpperCase(),
              periods: ['1h', '4h', '6h'],
              exchange: 'bitfinex',
              extra: {
                bitfinex_leverage: 2,
              },
              state: 'trade',
              watchdogs: [{
                  name: 'risk_reward_ratio',
                  stop_percent: 2,
                },
                {
                  name: 'trailing_stop',
                  target_percent: 1.5,
                  stop_percent: 0.7,
                },
              ],
              trade: {
                currency_capital: 200,
                strategies: [{
                  strategy: 'custom_all',
                  options: {
                    period: '6h',
                  },
                }, ],
              },
              
            };

            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  },

  bybitInit: async callback => {
    return new Promise(resolve => {
      request('https://api.bybit.com/v2/public/symbols', (_error, _res, body) => {
        const pairs = [];

        const content = JSON.parse(body);

        content.result
          .filter(p => ['USD'].includes(p.quote_currency))
          .forEach(pair => {
            let result = {
              symbol: pair.name,
              periods: ['1m', '15m', '1h'],
              exchange: 'bybit'
            };

            if (callback) {
              result = callback(result, pair);
            }

            if (result) {
              pairs.push(result);
            }
          });

        resolve(pairs);
      });
    });
  }
};
