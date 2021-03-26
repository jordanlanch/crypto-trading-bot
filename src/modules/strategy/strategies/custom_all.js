const SignalResult = require('../dict/signal_result');

module.exports = class TraderCustom {
  getName() {
    return 'custom_all';
  }

  buildIndicator(indicatorBuilder, options) {
    // if (!options.period) {
    //   throw 'Invalid period';
    // }
    //6H
    indicatorBuilder.add('cci6H', 'cci', '6h', {
      length: 12,
    });


    indicatorBuilder.add('macd_6h', 'macd_ext', '6h', {
      fast_period: 9,
      slow_period: 26,
      signal_period: 11,
    });

    indicatorBuilder.add('macd_6H_01', 'macd_ext', '6h', {
      fast_period: 5,
      slow_period: 39,
      signal_period: 7,
    });

    indicatorBuilder.add('macd_6H_02', 'macd_ext', '6h', {
      fast_period: 5,
      slow_period: 22,
      signal_period: 12,
    });

    indicatorBuilder.add('macd_6H_03', 'macd_ext', '6h', {
      fast_period: 11,
      slow_period: 24,
      signal_period: 11,
    });

    indicatorBuilder.add('obv6H', 'obv', '6h');

    indicatorBuilder.add('ao6H', 'ao', '6h');

    indicatorBuilder.add('rsi6H', 'rsi', '6h');


    indicatorBuilder.add('sma2006H', 'sma', '6h', {
      length: 200,
    });

    indicatorBuilder.add('ema2006H', 'ema', '6h', {
      length: 200,
    });

    indicatorBuilder.add('ema1006H', 'ema', '6h', {
      length: 100,
    });
    

    //4h

    

    indicatorBuilder.add('cci4H', 'cci', '4h', {
      length: 14,
    });


    indicatorBuilder.add('obv4h', 'obv', '4h');

    indicatorBuilder.add('ao4h', 'ao', '4h');
    


    indicatorBuilder.add('sma2004H', 'sma', '4h', {
      length: 55,
    });
    indicatorBuilder.add('ema2004H', 'ema', '4h', {
      length: 200,
    });
    indicatorBuilder.add('ema704h', 'ema', '4h', {
      length: 200,
    });


    indicatorBuilder.add('macd_4h_01', 'macd_ext', '4h', {
      fast_period: 20,
      slow_period: 39,
      signal_period: 12,
    });

    indicatorBuilder.add('macd_4h_02', 'macd_ext', '4h', {
      fast_period: 10,
      slow_period: 33,
      signal_period: 10,
    });


    indicatorBuilder.add('macd_4h', 'macd_ext', '4h', {
      fast_period: 6,
      slow_period: 13,
      signal_period: 9,
    });

    indicatorBuilder.add('rsi4h', 'rsi', '4h');


    //12h

    indicatorBuilder.add('macd_12h_01', 'macd_ext', '12h', {
      fast_period: 6,
      slow_period: 25,
      signal_period: 10,
    });

    indicatorBuilder.add('macd_12h_02', 'macd_ext', '12h', {
      fast_period: 12,
      slow_period: 26,
      signal_period: 9,
    });

    indicatorBuilder.add('cci12h', 'cci', '12h', {
      length: 14,
    });

    indicatorBuilder.add('obv12h', 'obv', '12h');

    indicatorBuilder.add('ao12h', 'ao', '12h');

    indicatorBuilder.add('sma20012h', 'sma', '6h', {
      length: 100,
    });
    indicatorBuilder.add('ema20012h', 'ema', '12h', {
      length: 200,
    });

    indicatorBuilder.add('rsi12h', 'rsi', '12h');
  }

  period(indicatorPeriod, options, buy_or_sells, symbol) {
    return this.trader_custom(
      symbol,
      buy_or_sells,
      indicatorPeriod.getPrice(),
      indicatorPeriod.getIndicator('macd_12h_01'),
      indicatorPeriod.getIndicator('macd_12h_02'),
      indicatorPeriod.getIndicator('macd_4h_01'),
      indicatorPeriod.getIndicator('macd_4h_02'),
      indicatorPeriod.getIndicator('macd_6h'),
      indicatorPeriod.getIndicator('macd_6H_01'),
      indicatorPeriod.getIndicator('macd_6H_02'),
      indicatorPeriod.getIndicator('macd_6H_03'),
      indicatorPeriod.getIndicator('cci6H'),
      indicatorPeriod.getIndicator('obv6H'),
      indicatorPeriod.getIndicator('ao6H'),
      indicatorPeriod.getIndicator('rsi6H'),
      indicatorPeriod.getIndicator('sma2006H'),
      indicatorPeriod.getIndicator('ema2006H'),
      indicatorPeriod.getIndicator('ema1006H'),
      indicatorPeriod.getIndicator('cci4H'),
      indicatorPeriod.getIndicator('ao4h'),
      indicatorPeriod.getIndicator('obv4h'),
      indicatorPeriod.getIndicator('ema2004H'),
      indicatorPeriod.getIndicator('sma2004H'),
      indicatorPeriod.getIndicator('ema704h'),
      indicatorPeriod.getIndicator('rsi4h'),
      indicatorPeriod.getIndicator('cci12h'),
      indicatorPeriod.getIndicator('ao12h'),
      indicatorPeriod.getIndicator('obv12h'),
      indicatorPeriod.getIndicator('sma20012h'),
      indicatorPeriod.getIndicator('ema20012h'),
      indicatorPeriod.getIndicator('rsi12h'),
      indicatorPeriod.getLastSignal()
    );
  }

  async trader_custom(
    symbol,
    buy_or_sells,
    price,
    macd12h01Full,
    macd12h02Full,
    macd4H01Full,
    macd4H02Full,
    macd6HFull,
    macd6H01Full,
    macd6H02Full,
    macd6H03Full,
    cci6HFull,
    obv6HFull,
    ao6HFull,
    rsi6HFull,
    sma2006HFull,
    ema2006HFull,
    ema1006HFull,
    cci4HFull,
    ao4HFull,
    obv4HFull,
    ema2004HFull,
    sma2004HFull,
    ema704hFull,
    rsi4HFull,
    cci12hFull,
    ao12hFull,
    obv12hFull,
    sma20012hFull,
    ema20012hFull,
    rsi12hFull,
    lastSignal
  ) {
    // console.log('******Entra*****  1  **********--->');

    // if (!cci6HFull) {
    //   console.log('cci6HFull-->' + cci6HFull);
    // }
    // if (!cci12hFull) {
    //   console.log('cci12hFull-->' + cci12hFull);
    // }
    // if (!cci4HFull) {
    //   console.log('cci4HFull-->' + cci4HFull);
    // }
    // if (!sma20012hFull) {
    //   console.log('sma20012hFull-->' + sma20012hFull);
    // }
    // if (!ema20012hFull) {
    //   console.log('ema20012hFull-->' + ema20012hFull);
    // }
    // if (!sma2006HFull) {
    //   console.log('sma2006HFull-->' + sma2006HFull);
    // }
    // if (!ema2006HFull) {
    //   console.log('ema2006HFull-->' + ema2006HFull);
    // }
    // if (!ema2004HFull) {
    //   console.log('ema2004HFull-->' + ema2004HFull);
    // }
    // if (!sma2004HFull) {
    //   console.log('sma2004HFull-->' + sma2004HFull);
    // }
    // if (!ema704hFull) {
    //   console.log('ema704hFull-->' + ema704hFull);
    // }
    // if (!ema1006HFull) {
    //   console.log('ema1006HFull-->' + ema1006HFull);
    // }
    // if (!macd12h01Full) {
    //   console.log('macd12h01Full-->' + macd12h01Full);
    // }
    // if (!macd12h02Full) {
    //   console.log('macd12h02Full-->' + macd12h02Full);
    // }
    // if (!macd4H01Full) {
    //   console.log('macd4H01Full-->' + macd4H01Full);
    // }
    // if (!macd4H02Full) {
    //   console.log('macd4H02Full-->' + macd4H02Full);
    // }
    // if (!macd6HFull) {
    //   console.log('macd6HFull-->' + macd6HFull);
    // }
    // if (!macd6H01Full) {
    //   console.log('macd6H01Full-->' + macd6H01Full);
    // }
    // if (!macd6H02Full) {
    //   console.log('macd6H02Full-->' + macd6H02Full);
    // }
    // if (!macd6H03Full) {
    //   console.log('macd6H03Full-->' + macd6H03Full);
    // }
    // if (!obv6HFull) {
    //   console.log('obv6HFull-->' + obv6HFull);
    // }
    // if (!ao6HFull) {
    //   console.log('ao6HFull-->' + ao6HFull);
    // }
    // if (!rsi6HFull) {
    //   console.log('rsi6HFull-->' + rsi6HFull);
    // }
    // if (!ao4HFull) {
    //   console.log('ao4HFull-->' + ao4HFull);
    // }
    // if (!obv4HFull) {
    //   console.log('obv4HFull-->' + obv4HFull);
    // }
    // if (!rsi4HFull) {
    //   console.log('rsi4HFull-->' + rsi4HFull);
    // }
    // if (!ao12hFull) {
    //   console.log('ao12hFull-->' + ao12hFull);
    // }
    // if (!obv12hFull) {
    //   console.log('obv12hFull-->' + obv12hFull);
    // }
    // if (!rsi12hFull) {
    //   console.log('rsi12hFull-->' + rsi12hFull);
    // }

    // if (cci6HFull.length <= 0) {
    //   console.log(' cci6HFull.length <= 0-->');
    // }
    // if (cci4HFull.length <= 0) {
    //   console.log('cci4HFull.length <= 0-->');
    // }
    // if (cci12hFull.length <= 0) {
    //   console.log('cci12hFull.length <= 0-->');
    // }
    // if (ema20012hFull.length < 2) {
    //   console.log('ema20012hFull.length < 2-->');
    // }
    // if (ema2004HFull.length < 2) {
    //   console.log('ema2004HFull.length < 2-->');
    // }
    // if (sma20012hFull.length < 2) {
    //   console.log('sma20012hFull.length < 2-->');
    // }
    // if (sma2006HFull.length < 2) {
    //   console.log('sma2006HFull.length < 2-->');
    // }
    // if (sma2004HFull.length < 2) {
    //   console.log('sma2004HFull.length < 2-->');
    // }
    // if (ema2006HFull.length < 2) {
    //   console.log('ema2006HFull.length < 2-->');
    // }
    // if (ema704hFull.length < 2) {
    //   console.log('ema704hFull.length < 2-->');
    // }
    // if (ema1006HFull.length < 2) {
    //   console.log('ema1006HFull.length < 2-->');
    // }
    // if (macd12h01Full.length < 2) {
    //   console.log('macd12h01Full.length < 2-->');
    // }
    // if (macd12h02Full.length < 2) {
    //   console.log('macd12h02Full.length < 2-->');
    // }
    // if (macd4H01Full.length < 2) {
    //   console.log('macd4H01Full.length < 2-->');
    // }
    // if (macd4H02Full.length < 2) {
    //   console.log('macd4H02Full.length < 2-->');
    // }
    // if (macd6HFull.length < 2) {
    //   console.log('macd6HFull.length < 2-->');
    // }
    // if (macd6H01Full.length < 2) {
    //   console.log('macd6H01Full.length < 2-->');
    // }
    // if (macd6H02Full.length < 2) {
    //   console.log('macd6H02Full.length < 2-->');
    // }
    // if (macd6H03Full.length < 2) {
    //   console.log('macd6H03Full.length < 2-->');
    // }
    // if (obv6HFull.length < 2) {
    //   console.log('obv6HFull.length < 2-->');
    // }
    // if (obv4HFull.length < 2) {
    //   console.log('obv4HFull.length < 2-->');
    // }
    // if (obv12hFull.length < 2) {
    //   console.log('obv12hFull.length < 2-->');
    // }
    // if (ao6HFull.length < 2) {
    //   console.log('ao6HFull.length < 2-->');
    // }
    // if (ao4HFull.length < 2) {
    //   console.log('ao4HFull.length < 2-->');
    // }
    // if (ao12hFull.length < 2) {
    //   console.log('ao12hFull.length < 2-->');
    // }
    // if (rsi6HFull.length < 2) {
    //   console.log('rsi6HFull.length < 2-->');
    // }
    // if (rsi4HFull.length < 2) {
    //   console.log('rsi4HFull.length < 2-->');
    // }
    // if (rsi12hFull.length < 2) {
    //   console.log('rsi12hFull.length < 2-->');
    // }

    if (
      !cci6HFull ||
      !cci12hFull ||
      !cci4HFull ||
      !sma20012hFull ||
      !ema20012hFull ||
      !ema2004HFull ||
      !sma2006HFull ||
      !sma2004HFull ||
      !ema2006HFull ||
      !ema704hFull ||
      !ema1006HFull ||
      !macd12h01Full ||
      !macd12h02Full ||
      !macd4H01Full ||
      !macd4H02Full ||
      !macd6HFull ||
      !macd6H01Full ||
      !macd6H02Full ||
      !macd6H03Full ||
      !obv6HFull ||
      !obv4HFull ||
      !obv12hFull ||
      !ao6HFull ||
      !ao4HFull ||
      !ao12hFull ||
      !rsi6HFull ||
      !rsi4HFull ||
      !rsi12hFull ||
      cci6HFull.length <= 0 ||
      cci4HFull.length <= 0 ||
      cci12hFull.length <= 0 ||
      sma20012hFull.length < 2 ||
      ema20012hFull.length < 2 ||
      ema2004HFull.length < 2 ||
      sma2006HFull.length < 2 ||
      sma2004HFull.length < 2 ||
      ema2006HFull.length < 2 ||
      ema704hFull.length < 2 ||
      ema1006HFull.length < 2 ||
      macd12h01Full.length < 2 ||
      macd12h02Full.length < 2 ||
      macd4H01Full.length < 2 ||
      macd4H02Full.length < 2 ||
      macd6HFull.length < 2 ||
      macd6H01Full.length < 2 ||
      macd6H02Full.length < 2 ||
      macd6H03Full.length < 2 ||
      obv6HFull.length < 2 ||
      obv4HFull.length < 2 ||
      obv12hFull.length < 2 ||
      ao6HFull.length < 2 ||
      ao4HFull.length < 2 ||
      ao12hFull.length < 2 ||
      rsi6HFull.length < 2 ||
      rsi4HFull.length < 2 ||
      rsi12hFull.length < 2
    ) {
      return;
    }

    // remove incomplete candle
    const sma20012h = sma20012hFull.slice(0, -1);
    const ema20012h = ema20012hFull.slice(0, -1);
    const ema2004H = ema2004HFull.slice(0, -1);
    const sma2006H = sma2006HFull.slice(0, -1);
    const sma2004H = sma2004HFull.slice(0, -1);
    const ema2006H = ema2006HFull.slice(0, -1);
    const ema704h = ema704hFull.slice(0, -1);
    const ema1006H = ema1006HFull.slice(0, -1);
    const cci6H = cci6HFull.slice(0, -1);
    const cci12h = cci12hFull.slice(0, -1);
    const cci4H = cci4HFull.slice(0, -1);
    const macd12h01 = macd12h01Full.slice(0, -1);
    const macd12h02 = macd12h02Full.slice(0, -1);
    const macd4H01 = macd4H01Full.slice(0, -1);
    const macd4H02 = macd4H02Full.slice(0, -1);
    const macd6H = macd6HFull.slice(0, -1);
    const macd6H01 = macd6H01Full.slice(0, -1);
    const macd6H02 = macd6H02Full.slice(0, -1);
    const macd6H03 = macd6H03Full.slice(0, -1);
    const obv6H = obv6HFull.slice(0, -1);
    const obv4H = obv4HFull.slice(0, -1);
    const obv12h = obv12hFull.slice(0, -1);
    const ao6H = ao6HFull.slice(0, -1);
    const ao4H = ao4HFull.slice(0, -1);
    const ao12h = ao12hFull.slice(0, -1);
    const rsi6H = rsi6HFull.slice(0, -1);
    const rsi4H = rsi4HFull.slice(0, -1);
    const rsi12h = rsi12hFull.slice(0, -1);

    // console.log('***************************rsi6H***************--->' + rsi6H);

    // const debug = {
    //   sma20012h: sma20012h.slice(-1)[0],
    //   ema20012h: ema20012h.slice(-1)[0],
    //   ema2004H: ema2004H.slice(-1)[0],
    //   sma2006H: sma2006H.slice(-1)[0],
    //   sma2004H: sma2004H.slice(-1)[0],
    //   ema2006H: ema2006H.slice(-1)[0],
    //   ema704h: ema704h.slice(-1)[0],
    //   ema1006H: ema1006H.slice(-1)[0],
    //   last_histogram_6H: macd6H.slice(-1)[0].histogram,
    //   before_histogram_6H: macd6H.slice(-2)[0].histogram,
    //   last_histogram_12h: macd12h.slice(-1)[0].histogram,
    //   before_histogram_12h: macd12h.slice(-2)[0].histogram,
    //   last_histogram_4h: macd4H.slice(-1)[0].histogram,
    //   before_histogram_4h: macd4H.slice(-2)[0].histogram,
    //   cci6H: cci6H.slice(-1)[0],
    //   cci12h: cci12h.slice(-1)[0],
    //   cci4H: cci4H.slice(-1)[0],
    //   Lrsi6H: rsi6H.slice(-1)[0],
    //   Brsi6H: rsi6H.slice(-2)[0],
    //   last_signal: lastSignal,
    // };

    let count_signals_buy = 0;
    let count_signals_sell = 0;

    let debug = {
      macd12h01: 0,
      // macd12h02: 0,
      macd4H01: 0,
      // macd4H02: 0,
      macd6H: 0,
      // macd6H01: 0,
      // macd6H02: 0,
      // macd6H03: 0,
      cci6H: 0,
      cci4H: 0,
      cci12h: 0,
      obv6H: 0,
      highest_overage_obv_6h: 0,
      current_average_obv_6h: 0,
      difference_obv_6h: 0,
      obv4H: 0,
      highest_overage_obv_4h: 0,
      current_average_obv_4h: 0,
      difference_obv_4h: 0,
      obv12h: 0,
      highest_overage_obv_12h: 0,
      current_average_obv_12h: 0,
      difference_obv_12h: 0,
      ao6H: 0,
      ao4H: 0,
      ao12h: 0,
      rsi6H: 0,
      rsi4H: 0,
      rsi12h: 0,
      sell: 0,
      buy: 0,
      last_signal: lastSignal,
      sentiment_4h: 0,
      incremetShortTOP_4h: 0,
      incremetShortGlobal_4h: 0,
      incrementLogTOP_4h: 0,
      incrementLogGlobal_4h: 0,
      sentiment_6h: 0,
      incremetShortTOP_6h: 0,
      incremetShortGlobal_6h: 0,
      incrementLogTOP_6h: 0,
      incrementLogGlobal_6h: 0,
      sentiment_1d: 0,
      incremetShortTOP_1d: 0,
      incremetShortGlobal_1d: 0,
      incrementLogTOP_1d: 0,
      incrementLogGlobal_1d: 0,
    };
    /*
    levels signals
    */
    let count_ovb6H = 1.75;
    let count_ovb4H = 1.5;
    let count_ovb12h = 1;

    let count_cci6H = 1.75;
    let count_cci4H = 1.5;
    let count_cci12h = 1;

    let count_macd6H = 1.75;
    let count_macd4H = 1.5;
    let count_macd12h = 1;

    let count_ao6H = 1.75;
    let count_ao4H = 1.5;
    let count_ao12h = 1;

    let count_rsi6H = 1.75;
    let count_rsi4H = 1.5;
    let count_rsi12h = 1;

    //SMA & LONG

    //6H
    let long6H = price >= sma2006H.slice(-1)[0];

    // ema long
    if (!long6H) {
      long6H = price >= ema2006H.slice(-1)[0];
    }

    //4H
    let long4H = price >= sma2004H.slice(-1)[0];

    // ema long
    if (!long4H) {
      long4H = price >= ema2004H.slice(-1)[0];
    }

    let long12h = price >= sma20012h.slice(-1)[0];

    // ema long
    if (!long12h) {
      long12h = price >= ema20012h.slice(-1)[0];
    }

    // //sma & ema 6H, 4H, 12h

    //map by symbol

    let parameters_by_symbol = [{
        symbol: 'ADAUSDT',
        parameters: {
          triggerMultiplier_6h: 1.099,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.024,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_12h: 1.035,
          triggerTimeWindows_12h: 6,
        }
      },
      {
        symbol: 'TRXUSDT',
        parameters: {
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 2.5,
          triggerMultiplier_12h: 1.028,
          triggerTimeWindows_12h: 2,
        }
      },
      {
        symbol: 'BTCUSDT',
        parameters: {
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 1.5,
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 1.5,
          triggerMultiplier_12h: 1.103,
          triggerTimeWindows_12h: 1.5,
        }
      },
      {
        symbol: 'DOTUSDT',
        parameters: {
          triggerMultiplier_6h: 0.8888,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.093,
          triggerTimeWindows_4h: 1,
          triggerMultiplier_12h: 1.035,
          triggerTimeWindows_12h: 2,
        }
      },
      {
        symbol: 'EOSUSDT',
        parameters: {
          triggerMultiplier_6h: 1.217,
          triggerTimeWindows_6h: 3,
          triggerMultiplier_4h: 0.93,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_12h: 0.9837,
          triggerTimeWindows_12h: 2,
        }
      },
      {
        symbol: 'ETHUSDT',
        parameters: {
          triggerMultiplier_6h: 1.021,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.071,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_12h: 1.058,
          triggerTimeWindows_12h: 2,
        }
      },
      {
        symbol: 'XRPUSDT',
        parameters: {
          triggerMultiplier_6h: 1.021,
          triggerTimeWindows_6h: 3,
          triggerMultiplier_4h: 1.064,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_12h: 1.058,
          triggerTimeWindows_12h: 3,
        }
      },
      {
        symbol: 'LTCUSDT',
        parameters: {
          triggerMultiplier_6h: 1.038,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.064,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_12h: 0.9957,
          triggerTimeWindows_12h: 2,
        }
      },
      {
        symbol: 'UNIUSDT',
        parameters: {
          triggerMultiplier_6h: 1.41,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.018,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_12h: 0.9675,
          triggerTimeWindows_12h: 3,
        }
      },
      {
        symbol: 'XMRUSDT',
        parameters: {
          triggerMultiplier_6h: 1.038,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.106,
          triggerTimeWindows_4h: 5,
          triggerMultiplier_12h: 1.08,
          triggerTimeWindows_12h: 1,
        }
      },
      {
        symbol: 'XTZUSDT',
        parameters: {
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 2.5,
          triggerMultiplier_12h: 1.028,
          triggerTimeWindows_12h: 2,
        }
      },
    ]
    // console.log('symbol-->'+symbol)
    let parameters = parameters_by_symbol.filter(s => s.symbol === symbol)[0]
    if (parameters == [] || parameters == undefined) {
      parameters = parameters_by_symbol[0]
    }
    // count_signals_buy += buy_or_sells[0].buy;
    // count_signals_sell += buy_or_sells[0].sell;
    // debug.sentiment_4h += buy_or_sells[0].buy;
    // debug.sentiment_4h -= buy_or_sells[0].sell;
    // debug.incrementLogGlobal_4h = buy_or_sells[0].incrementLogGlobal;
    // debug.incremetShortTOP_4h = buy_or_sells[0].incremetShortTOP;
    // debug.incrementLogTOP_4h = buy_or_sells[0].incrementLogTOP;
    // debug.incremetShortGlobal_4h = buy_or_sells[0].incremetShortGlobal;

    // count_signals_buy += buy_or_sells[1].buy;
    // count_signals_sell += buy_or_sells[1].sell;
    // debug.sentiment_6h += buy_or_sells[1].buy;
    // debug.sentiment_6h -= buy_or_sells[1].sell;
    // debug.incrementLogGlobal_6h = buy_or_sells[1].incrementLogGlobal;
    // debug.incremetShortTOP_6h = buy_or_sells[1].incremetShortTOP;
    // debug.incrementLogTOP_6h = buy_or_sells[1].incrementLogTOP;
    // debug.incremetShortGlobal_6h = buy_or_sells[1].incremetShortGlobal;

    // count_signals_buy += buy_or_sells[2].buy;
    // count_signals_sell += buy_or_sells[2].sell;
    // debug.sentiment_1d += buy_or_sells[2].buy;
    // debug.sentiment_1d -= buy_or_sells[2].sell;
    // debug.incrementLogGlobal_1d = buy_or_sells[2].incrementLogGlobal;
    // debug.incremetShortTOP_1d = buy_or_sells[2].incremetShortTOP;
    // debug.incrementLogTOP_1d = buy_or_sells[2].incrementLogTOP;
    // debug.incremetShortGlobal_1d = buy_or_sells[2].incremetShortGlobal;


    //obv 6H, 4H, 12h
    //01 16 -1.248
    let resolve_obv = this.resolve_obv(debug, obv6H, count_ovb6H, parameters.parameters.triggerMultiplier_6h, parameters.parameters.triggerTimeWindows_6h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv6H += resolve_obv.buy;
    debug.obv6H -= resolve_obv.sell;
    debug.highest_overage_obv_6h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_6h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_6h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    //1.014 20 3 am
    //resolve_obv = this.resolve_obv(debug, obv4H, count_ovb4H, 1.034, 2.9);     3.6%    56.25%  BTC
    resolve_obv = this.resolve_obv(debug, obv4H, count_ovb4H, parameters.parameters.triggerMultiplier_4h, parameters.parameters.triggerTimeWindows_4h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv4H += resolve_obv.buy;
    debug.obv4H -= resolve_obv.sell;
    debug.highest_overage_obv_4h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_4h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_4h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    resolve_obv = this.resolve_obv(debug, obv12h, count_ovb12h, parameters.parameters.triggerMultiplier_12h, parameters.parameters.triggerTimeWindows_12h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv12h += resolve_obv.buy;
    debug.obv12h -= resolve_obv.sell;
    debug.highest_overage_obv_12h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_12h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_12h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    //CCI 6H, 4H, 12h

    let resolve_cci = this.resolve_cci(debug, long6H, cci6H, count_cci6H);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci6H += resolve_cci.buy;
    debug.cci6H -= resolve_cci.sell;
    debug = resolve_cci.debug;

    resolve_cci = this.resolve_cci(debug, long4H, cci4H, count_cci4H);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci4H += resolve_cci.buy;
    debug.cci4H -= resolve_cci.sell;
    debug = resolve_cci.debug;

    resolve_cci = this.resolve_cci(debug, long12h, cci12h, count_cci12h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci12h += resolve_cci.buy;
    debug.cci12h -= resolve_cci.sell;
    debug = resolve_cci.debug;

    //MACD 6H, 4H, 12h

    // let resolve_macd = this.resolve_macd(debug, long6H, macd6H03, count_macd6H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd6H03 += resolve_macd.buy;
    // debug.macd6H03 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long6H, macd6H02, count_macd6H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd6H02 += resolve_macd.buy;
    // debug.macd6H02 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long6H, macd6H01, count_macd6H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd6H01 += resolve_macd.buy;
    // debug.macd6H01 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    let resolve_macd = this.resolve_macd(debug, long4H, macd6H, count_macd6H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd6H += resolve_macd.buy;
    debug.macd6H -= resolve_macd.sell;
    debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long4H, macd4H02, count_macd4H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd4H02 += resolve_macd.buy;
    // debug.macd4H02 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long4H, macd4H01, count_macd4H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd4H01 += resolve_macd.buy;
    debug.macd4H01 -= resolve_macd.sell;
    debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long12h, macd12h01, count_macd12h);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd12h01 += resolve_macd.buy;
    debug.macd12h01 -= resolve_macd.sell;
    debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long12h, macd12h02, count_macd12h);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd12h02 += resolve_macd.buy;
    // debug.macd12h02 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    //AO 6H, 4H, 12h

    let resolve_ao = this.resolve_ao(debug, long6H, ao6H, count_ao6H);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao6H += resolve_ao.buy;
    debug.ao6H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    resolve_ao = this.resolve_ao(debug, long4H, ao4H, count_ao4H);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao4H += resolve_ao.buy;
    debug.ao4H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    resolve_ao = this.resolve_ao(debug, long12h, ao12h, count_ao12h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao12h += resolve_ao.buy;
    debug.ao12h -= resolve_ao.sell;
    debug = resolve_ao.debug;

    //RSI 6H, 4H, 12h

    let resolve_rsi = this.resolve_rsi(debug, rsi6H, count_rsi6H, 20, 80);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi6H += resolve_rsi.buy;
    debug.rsi6H -= resolve_rsi.sell;

    debug = resolve_rsi.debug;

    resolve_rsi = this.resolve_rsi(debug, rsi4H, count_rsi4H, 20, 80);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi4H += resolve_rsi.buy;
    debug.rsi4H -= resolve_rsi.sell;
    debug = resolve_rsi.debug;

    resolve_rsi = this.resolve_rsi(debug, rsi12h, count_rsi12h, 20, 80);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi12h += resolve_rsi.buy;
    debug.rsi12h -= resolve_rsi.sell;
    debug = resolve_rsi.debug;

    // console.log('******price***************--->' + price);
    // console.log('************count_signals_buy***************--->' + count_signals_buy);
    // console.log('******************count_signals_sell***************--->' + count_signals_sell);

    debug.buy = count_signals_buy;
    debug.sell = count_signals_sell;
    let count_signal = 1;

    if (count_signals_buy > count_signals_sell) {
      //9 señales
      if (lastSignal === 'short' && count_signals_buy >= count_signal) {
        return SignalResult.createSignal('close', debug);
      }

      if (count_signals_buy >= count_signal) {
        return SignalResult.createSignal('long', debug);
      }
    } else if (count_signals_buy < count_signals_sell) {
      //8 señales
      if (lastSignal === 'long' && count_signals_sell >= count_signal) {
        return SignalResult.createSignal('close', debug);
      }

      if (count_signals_sell >= count_signal) {
        return SignalResult.createSignal('short', debug);
      }
    }
  }

  getBacktestColumns() {
    return [{
        label: 'sell',
        value: 'sell',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'buy',
        value: 'buy',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'cci4H',
        value: 'cci4H',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv4H',
        value: 'obv4H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'difference_obv_4h',
        value: 'difference_obv_4h',
        type: 'cross',
        type: 'sma200',
      },
      // {
      //   label: 'macd4H02',
      //   value: 'macd4H02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      {
        label: 'macd4H01',
        value: 'macd4H01',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'rsi4H',
        value: 'rsi4H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao4H',
        value: 'ao4H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'cci6H',
        value: 'cci6H',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv6H',
        value: 'obv6H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'difference_obv_6h',
        value: 'difference_obv_6h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'macd6H',
        value: 'macd6H',
        type: 'cross',
        type: 'sma200',
      },
      // {
      //   label: 'macd6H01',
      //   value: 'macd6H01',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      // {
      //   label: 'macd6H02',
      //   value: 'macd6H02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      // {
      //   label: 'macd6H03',
      //   value: 'macd6H03',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      {
        label: 'rsi6H',
        value: 'rsi6H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao6H',
        value: 'ao6H',
        type: 'cross',
        type: 'sma200',
      },
      
      {
        label: 'cci12h',
        value: 'cci12h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv12h',
        value: 'obv12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'difference_obv_12h',
        value: 'difference_obv_12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'cci12h',
        value: 'cci12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'macd12h01',
        value: 'macd12h01',
        type: 'cross',
        type: 'sma200',
      },
      // {
      //   label: 'macd12h02',
      //   value: 'macd12h02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      {
        label: 'rsi12h',
        value: 'rsi12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao12h',
        value: 'ao12h',
        type: 'cross',
        type: 'sma200',
      },
    ];
  }

  getOptions() {
    return {
      period: '4h',
    };
  }

  resolve_obv(debug, obv, count_ovb, triggerMultiplier, triggerTimeWindows) {
    debug.trend = 'up';

    const before_obv = obv.slice(-20, triggerTimeWindows * -1);

    const highest_obv = before_obv.sort((a, b) => b - a).slice(0, triggerTimeWindows);
    const highestOverage_obv = highest_obv.reduce((a, b) => a + b, 0) / highest_obv.length;

    const current_obv = obv.slice(triggerTimeWindows * -1);

    const currentAverage_obv = current_obv.reduce((a, b) => a + b, 0) / current_obv.length;

    if (currentAverage_obv >= highestOverage_obv) {
      const difference_obv = Math.abs(currentAverage_obv / highestOverage_obv);


      if (difference_obv >= triggerMultiplier) {
        return {
          buy: count_ovb,
          sell: 0,
          debug: debug,
          highestOverage_obv: highestOverage_obv,
          currentAverage_obv: currentAverage_obv,
          difference_obv: difference_obv
        };
      } else {
        return {
          buy: 0,
          sell: count_ovb,
          debug: debug,
          highestOverage_obv: highestOverage_obv,
          currentAverage_obv: currentAverage_obv,
          difference_obv: difference_obv
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug,
      highestOverage_obv: highestOverage_obv,
      currentAverage_obv: currentAverage_obv,
      difference_obv: 0
    };
  }

  resolve_cci(debug, long, cci, count_cci) {
    const before_cci = cci.slice(-2)[0];
    const last_cci = cci.slice(-1)[0];

    let count = cci.length - 1;

    if (long) {
      if (before_cci <= -100 && last_cci >= -100) {
        let rangeValues = [];

        for (let i = count - 1; i >= 0; i--) {
          if (cci[i] >= -100) {
            rangeValues = cci.slice(i, count);
            break;
          }
        }

        const min = Math.min(...rangeValues);
        if (min <= -200) {
          debug._trigger = min;
          return {
            buy: count_cci,
            sell: 0,
            debug: debug
          };
        }
      }
    } else if (before_cci >= 100 && last_cci <= 100) {
      const count = cci.length - 1;
      let rangeValues = [];

      for (let i = count - 1; i >= 0; i--) {
        if (cci[i] <= 100) {
          rangeValues = cci.slice(i, count);
          break;
        }
      }

      const max = Math.max(...rangeValues);
      if (max >= 200) {
        debug._trigger = max;
        return {
          buy: 0,
          sell: count_cci,
          debug: debug
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug
    };
  }

  resolve_macd(debug, long, macd, count_macd) {
    const before_macd = macd.slice(-2)[0].histogram;
    const last_macd = macd.slice(-1)[0].histogram;

    if (long) {
      if (before_macd < 0 && last_macd > 0) {
        debug.macd += count_macd;
        return {
          buy: count_macd,
          sell: 0,
          debug: debug
        };
      }
    } else {
      if (before_macd > 0 && last_macd < 0) {
        debug.macd -= count_macd;
        return {
          buy: 0,
          sell: count_macd,
          debug: debug
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug
    };
  }

  resolve_ao(debug, long, ao, count_ao) {
    const before_ao = ao.slice(-2)[0];
    const last_ao = ao.slice(-1)[0];

    if (long) {
      if (before_ao < 0 && last_ao > 0) {
        debug.ao += count_ao;
        return {
          buy: count_ao,
          sell: 0,
          debug: debug
        };
      }
    } else {
      if (before_ao > 0 && last_ao < 0) {
        debug.ao -= count_ao;
        return {
          buy: 0,
          sell: count_ao,
          debug: debug
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug
    };
  }


  resolve_rsi(debug, rsi, count_rsi, min, max) {
    const before_rsi = rsi.slice(-2)[0];
    const last_rsi = rsi.slice(-1)[0];

    if (before_rsi < min) {
      if (before_rsi < last_rsi) {
        debug.rsi += count_rsi;
        return {
          buy: count_rsi,
          sell: 0,
          debug: debug
        };
      }
    }

    if (before_rsi > max) {
      if (before_rsi > last_rsi) {
        debug.rsi -= count_rsi;
        return {
          buy: 0,
          sell: count_rsi,
          debug: debug
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug
    };
  }
};