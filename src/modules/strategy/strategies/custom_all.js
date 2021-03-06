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
      length: 20,
    });

    indicatorBuilder.add('macd_1h_01', 'macd_ext', '1h', {
      fast_period: 6,
      slow_period: 25,
      signal_period: 10,
    });

    indicatorBuilder.add('macd_1h_02', 'macd_ext', '1h', {
      fast_period: 12,
      slow_period: 26,
      signal_period: 9,
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


    indicatorBuilder.add('ema2006H', 'ema', '6h', {
      length: 200,
    });
    indicatorBuilder.add('ema1006H', 'ema', '6h', {
      length: 100,
    });

    //4h

    indicatorBuilder.add('cci4H', 'cci', '4h', {
      length: 30,
    });

    indicatorBuilder.add('macd_4h', 'macd_ext', '4h', {
      fast_period: 6,
      slow_period: 13,
      signal_period: 9,
    });

    indicatorBuilder.add('obv4h', 'obv', '4h');

    indicatorBuilder.add('ao4h', 'ao', '4h');
    indicatorBuilder.add('sma2006H', 'sma', '6h', {
      length: 55,
    });


    indicatorBuilder.add('sma2004H', 'sma', '4h', {
      length: 55,
    });
    indicatorBuilder.add('ema2004H', 'ema', '4h', {
      length: 200,
    });
    indicatorBuilder.add('ema704h', 'ema', '4h', {
      length: 200,
    });

    indicatorBuilder.add('rsi4h', 'rsi', '4h');
    //1h

    indicatorBuilder.add('cci1H', 'cci', '1h', {
      length: 30,
    });

    indicatorBuilder.add('obv1h', 'obv', '1h');

    indicatorBuilder.add('ao1h', 'ao', '1h');

    indicatorBuilder.add('sma2001H', 'sma', '1h', {
      length: 200,
    });
    indicatorBuilder.add('ema2001H', 'ema', '1h', {
      length: 200,
    });

    indicatorBuilder.add('rsi1h', 'rsi', '1h');
  }

  period(indicatorPeriod, options, buy_or_sells, symbol) {
    return this.trader_custom(
      symbol,
      buy_or_sells,
      indicatorPeriod.getPrice(),
      indicatorPeriod.getIndicator('macd_1h_01'),
      indicatorPeriod.getIndicator('macd_1h_02'),
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
      indicatorPeriod.getIndicator('cci1H'),
      indicatorPeriod.getIndicator('ao1h'),
      indicatorPeriod.getIndicator('obv1h'),
      indicatorPeriod.getIndicator('sma2001H'),
      indicatorPeriod.getIndicator('ema2001H'),
      indicatorPeriod.getIndicator('rsi1h'),
      indicatorPeriod.getLastSignal()
    );
  }

  async trader_custom(
    symbol,
    buy_or_sells,
    price,
    macd1H01Full,
    macd1H02Full,
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
    cci1HFull,
    ao1HFull,
    obv1HFull,
    sma2001HFull,
    ema2001HFull,
    rsi1HFull,
    lastSignal
  ) {
    // console.log('******Entra*****  1  **********--->');

    // if (!cci6HFull) {
    //   console.log('cci6HFull-->' + cci6HFull);
    // }
    // if (!cci1HFull) {
    //   console.log('cci1HFull-->' + cci1HFull);
    // }
    // if (!cci4HFull) {
    //   console.log('cci4HFull-->' + cci4HFull);
    // }
    // if (!sma2001HFull) {
    //   console.log('sma2001HFull-->' + sma2001HFull);
    // }
    // if (!ema2001HFull) {
    //   console.log('ema2001HFull-->' + ema2001HFull);
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
    // if (!macd1H01Full) {
    //   console.log('macd1H01Full-->' + macd1H01Full);
    // }
    // if (!macd1H02Full) {
    //   console.log('macd1H02Full-->' + macd1H02Full);
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
    // if (!ao1HFull) {
    //   console.log('ao1HFull-->' + ao1HFull);
    // }
    // if (!obv1HFull) {
    //   console.log('obv1HFull-->' + obv1HFull);
    // }
    // if (!rsi1HFull) {
    //   console.log('rsi1HFull-->' + rsi1HFull);
    // }

    // if (cci6HFull.length <= 0) {
    //   console.log(' cci6HFull.length <= 0-->');
    // }
    // if (cci4HFull.length <= 0) {
    //   console.log('cci4HFull.length <= 0-->');
    // }
    // if (cci1HFull.length <= 0) {
    //   console.log('cci1HFull.length <= 0-->');
    // }
    // if (sma2001HFull.length < 2) {
    //   console.log('sma2001HFull.length < 2-->');
    // }
    // if (ema2001HFull.length < 2) {
    //   console.log('ema2001HFull.length < 2-->');
    // }
    // if (ema2004HFull.length < 2) {
    //   console.log('ema2004HFull.length < 2-->');
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
    // if (macd1H01Full.length < 2) {
    //   console.log('macd1H01Full.length < 2-->');
    // }
    // if (macd1H02Full.length < 2) {
    //   console.log('macd1H02Full.length < 2-->');
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
    // if (obv1HFull.length < 2) {
    //   console.log('obv1HFull.length < 2-->');
    // }
    // if (ao6HFull.length < 2) {
    //   console.log('ao6HFull.length < 2-->');
    // }
    // if (ao4HFull.length < 2) {
    //   console.log('ao4HFull.length < 2-->');
    // }
    // if (ao1HFull.length < 2) {
    //   console.log('ao1HFull.length < 2-->');
    // }
    // if (rsi6HFull.length < 2) {
    //   console.log('rsi6HFull.length < 2-->');
    // }
    // if (rsi4HFull.length < 2) {
    //   console.log('rsi4HFull.length < 2-->');
    // }
    // if (rsi1HFull.length < 2) {
    //   console.log('rsi1HFull.length < 2-->');
    // }

    if (
      !cci6HFull ||
      !cci1HFull ||
      !cci4HFull ||
      !sma2001HFull ||
      !ema2001HFull ||
      !ema2004HFull ||
      !sma2006HFull ||
      !sma2004HFull ||
      !ema2006HFull ||
      !ema704hFull ||
      !ema1006HFull ||
      !macd1H01Full ||
      !macd1H02Full ||
      !macd4H01Full ||
      !macd4H02Full ||
      !macd6HFull ||
      !macd6H01Full ||
      !macd6H02Full ||
      !macd6H03Full ||
      !obv6HFull ||
      !obv4HFull ||
      !obv1HFull ||
      !ao6HFull ||
      !ao4HFull ||
      !ao1HFull ||
      !rsi6HFull ||
      !rsi4HFull ||
      !rsi1HFull ||
      cci6HFull.length <= 0 ||
      cci4HFull.length <= 0 ||
      cci1HFull.length <= 0 ||
      sma2001HFull.length < 2 ||
      ema2001HFull.length < 2 ||
      ema2004HFull.length < 2 ||
      sma2006HFull.length < 2 ||
      sma2004HFull.length < 2 ||
      ema2006HFull.length < 2 ||
      ema704hFull.length < 2 ||
      ema1006HFull.length < 2 ||
      macd1H01Full.length < 2 ||
      macd1H02Full.length < 2 ||
      macd4H01Full.length < 2 ||
      macd4H02Full.length < 2 ||
      macd6HFull.length < 2 ||
      macd6H01Full.length < 2 ||
      macd6H02Full.length < 2 ||
      macd6H03Full.length < 2 ||
      obv6HFull.length < 2 ||
      obv4HFull.length < 2 ||
      obv1HFull.length < 2 ||
      ao6HFull.length < 2 ||
      ao4HFull.length < 2 ||
      ao1HFull.length < 2 ||
      rsi6HFull.length < 2 ||
      rsi4HFull.length < 2 ||
      rsi1HFull.length < 2
    ) {
      return;
    }

    // remove incomplete candle
    const sma2001H = sma2001HFull.slice(0, -1);
    const ema2001H = ema2001HFull.slice(0, -1);
    const ema2004H = ema2004HFull.slice(0, -1);
    const sma2006H = sma2006HFull.slice(0, -1);
    const sma2004H = sma2004HFull.slice(0, -1);
    const ema2006H = ema2006HFull.slice(0, -1);
    const ema704h = ema704hFull.slice(0, -1);
    const ema1006H = ema1006HFull.slice(0, -1);
    const cci6H = cci6HFull.slice(0, -1);
    const cci1H = cci1HFull.slice(0, -1);
    const cci4H = cci4HFull.slice(0, -1);
    const macd1H01 = macd1H01Full.slice(0, -1);
    const macd1H02 = macd1H02Full.slice(0, -1);
    const macd4H01 = macd4H01Full.slice(0, -1);
    const macd4H02 = macd4H02Full.slice(0, -1);
    const macd6H = macd6HFull.slice(0, -1);
    const macd6H01 = macd6H01Full.slice(0, -1);
    const macd6H02 = macd6H02Full.slice(0, -1);
    const macd6H03 = macd6H03Full.slice(0, -1);
    const obv6H = obv6HFull.slice(0, -1);
    const obv4H = obv4HFull.slice(0, -1);
    const obv1H = obv1HFull.slice(0, -1);
    const ao6H = ao6HFull.slice(0, -1);
    const ao4H = ao4HFull.slice(0, -1);
    const ao1H = ao1HFull.slice(0, -1);
    const rsi6H = rsi6HFull.slice(0, -1);
    const rsi4H = rsi4HFull.slice(0, -1);
    const rsi1H = rsi1HFull.slice(0, -1);

    // console.log('***************************rsi6H***************--->' + rsi6H);

    // const debug = {
    //   sma2001H: sma2001H.slice(-1)[0],
    //   ema2001H: ema2001H.slice(-1)[0],
    //   ema2004H: ema2004H.slice(-1)[0],
    //   sma2006H: sma2006H.slice(-1)[0],
    //   sma2004H: sma2004H.slice(-1)[0],
    //   ema2006H: ema2006H.slice(-1)[0],
    //   ema704h: ema704h.slice(-1)[0],
    //   ema1006H: ema1006H.slice(-1)[0],
    //   last_histogram_6H: macd6H.slice(-1)[0].histogram,
    //   before_histogram_6H: macd6H.slice(-2)[0].histogram,
    //   last_histogram_1h: macd1H.slice(-1)[0].histogram,
    //   before_histogram_1h: macd1H.slice(-2)[0].histogram,
    //   last_histogram_4h: macd4H.slice(-1)[0].histogram,
    //   before_histogram_4h: macd4H.slice(-2)[0].histogram,
    //   cci6H: cci6H.slice(-1)[0],
    //   cci1H: cci1H.slice(-1)[0],
    //   cci4H: cci4H.slice(-1)[0],
    //   Lrsi6H: rsi6H.slice(-1)[0],
    //   Brsi6H: rsi6H.slice(-2)[0],
    //   last_signal: lastSignal,
    // };

    let count_signals_buy = 0;
    let count_signals_sell = 0;

    let debug = {
      macd1H01: 0,
      // macd1H02: 0,
      macd4H01: 0,
      // macd4H02: 0,
      macd6H: 0,
      // macd6H01: 0,
      // macd6H02: 0,
      // macd6H03: 0,
      cci6H: 0,
      cci4H: 0,
      cci1H: 0,
      obv6H: 0,
      highest_overage_obv_6h: 0,
      current_average_obv_6h: 0,
      difference_obv_6h: 0,
      obv4H: 0,
      highest_overage_obv_4h: 0,
      current_average_obv_4h: 0,
      difference_obv_4h: 0,
      obv1H: 0,
      highest_overage_obv_1h: 0,
      current_average_obv_1h: 0,
      difference_obv_1h: 0,
      ao6H: 0,
      ao4H: 0,
      ao1H: 0,
      rsi6H: 0,
      rsi4H: 0,
      rsi1H: 0,
      sell: 0,
      buy: 0,
      last_signal: lastSignal,
      sentiment_1h: 0,
      incremetShortTOP_1h: 0,
      incremetShortGlobal_1h: 0,
      incrementLogTOP_1h: 0,
      incrementLogGlobal_1h: 0,
      sentiment_30m: 0,
      incremetShortTOP_30m: 0,
      incremetShortGlobal_30m: 0,
      incrementLogTOP_30m: 0,
      incrementLogGlobal_30m: 0,
      sentiment_15m: 0,
      incremetShortTOP_15m: 0,
      incremetShortGlobal_15m: 0,
      incrementLogTOP_15m: 0,
      incrementLogGlobal_15m: 0,
    };
    /*
    levels signals
    */
    let count_ovb6H = 1.75;
    let count_ovb4H = 1.5;
    let count_ovb1H = 1;

    let count_cci6H = 1.75;
    let count_cci4H = 1.5;
    let count_cci1H = 1;

    let count_macd6H = 1.75;
    let count_macd4H = 1.5;
    let count_macd1H = 1;

    let count_ao6H = 1.75;
    let count_ao4H = 1.5;
    let count_ao1H = 1;

    let count_rsi6H = 1.75;
    let count_rsi4H = 1.5;
    let count_rsi1H = 1;

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

    let long1H = price >= sma2001H.slice(-1)[0];

    // ema long
    if (!long1H) {
      long1H = price >= ema2001H.slice(-1)[0];
    }

    // //sma & ema 6H, 4H, 1H

    //map by symbol

    let parameters_by_symbol = [{
        symbol: 'ADAUSD',
        parameters: {
          triggerMultiplier_6h: 1.099,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.024,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_1h: 1.035,
          triggerTimeWindows_1h: 6,
        }
      },
      {
        symbol: 'TRXUSD',
        parameters: {
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 2.5,
          triggerMultiplier_1h: 1.028,
          triggerTimeWindows_1h: 2,
        }
      },
      {
        symbol: 'BTCUSD',
        parameters: {
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 2.5,
          triggerMultiplier_1h: 1.031,
          triggerTimeWindows_1h: 1.5,
        }
      },
      {
        symbol: 'DOTUSD',
        parameters: {
          triggerMultiplier_6h: 1.038,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.093,
          triggerTimeWindows_4h: 1,
          triggerMultiplier_1h: 1.035,
          triggerTimeWindows_1h: 2,
        }
      },
      {
        symbol: 'EOSUSD',
        parameters: {
          triggerMultiplier_6h: 1.217,
          triggerTimeWindows_6h: 3,
          triggerMultiplier_4h: 0.93,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_1h: 0.9837,
          triggerTimeWindows_1h: 2,
        }
      },
      {
        symbol: 'ETHUSD',
        parameters: {
          triggerMultiplier_6h: 1.021,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.071,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_1h: 1.058,
          triggerTimeWindows_1h: 2,
        }
      },
      {
        symbol: 'XRPUSD',
        parameters: {
          triggerMultiplier_6h: 1.021,
          triggerTimeWindows_6h: 3,
          triggerMultiplier_4h: 1.064,
          triggerTimeWindows_4h: 4,
          triggerMultiplier_1h: 1.058,
          triggerTimeWindows_1h: 3,
        }
      },
      {
        symbol: 'LTCUSD',
        parameters: {
          triggerMultiplier_6h: 1.038,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.064,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_1h: 0.9957,
          triggerTimeWindows_1h: 2,
        }
      },
      {
        symbol: 'UNIUSD',
        parameters: {
          triggerMultiplier_6h: 1.41,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 1.018,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_1h: 0.9675,
          triggerTimeWindows_1h: 3,
        }
      },
      {
        symbol: 'XMRUSD',
        parameters: {
          triggerMultiplier_6h: 1.038,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.106,
          triggerTimeWindows_4h: 5,
          triggerMultiplier_1h: 1.08,
          triggerTimeWindows_1h: 1,
        }
      },
      {
        symbol: 'XTZUSD',
        parameters: {
          triggerMultiplier_6h: 1.027,
          triggerTimeWindows_6h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 2.5,
          triggerMultiplier_1h: 1.028,
          triggerTimeWindows_1h: 2,
        }
      },
    ]
    // console.log('symbol-->'+symbol)
    let parameters = parameters_by_symbol.filter(s => s.symbol === symbol)[0]
    if (parameters == [] || parameters == undefined) {
      parameters = parameters_by_symbol[0]
    }
    count_signals_buy += buy_or_sells[0].buy;
    count_signals_sell += buy_or_sells[0].sell;
    debug.sentiment_1h += buy_or_sells[0].buy;
    debug.sentiment_1h -= buy_or_sells[0].sell;
    debug.incrementLogGlobal_1h = buy_or_sells[0].incrementLogGlobal;
    debug.incremetShortTOP_1h = buy_or_sells[0].incremetShortTOP;
    debug.incrementLogTOP_1h = buy_or_sells[0].incrementLogTOP;
    debug.incremetShortGlobal_1h = buy_or_sells[0].incremetShortGlobal;

    count_signals_buy += buy_or_sells[1].buy;
    count_signals_sell += buy_or_sells[1].sell;
    debug.sentiment_30m += buy_or_sells[1].buy;
    debug.sentiment_30m -= buy_or_sells[1].sell;
    debug.incrementLogGlobal_30m = buy_or_sells[1].incrementLogGlobal;
    debug.incremetShortTOP_30m = buy_or_sells[1].incremetShortTOP;
    debug.incrementLogTOP_30m = buy_or_sells[1].incrementLogTOP;
    debug.incremetShortGlobal_30m = buy_or_sells[1].incremetShortGlobal;

    count_signals_buy += buy_or_sells[2].buy;
    count_signals_sell += buy_or_sells[2].sell;
    debug.sentiment_15m += buy_or_sells[2].buy;
    debug.sentiment_15m -= buy_or_sells[2].sell;
    debug.incrementLogGlobal_15m = buy_or_sells[2].incrementLogGlobal;
    debug.incremetShortTOP_15m = buy_or_sells[2].incremetShortTOP;
    debug.incrementLogTOP_15m = buy_or_sells[2].incrementLogTOP;
    debug.incremetShortGlobal_15m = buy_or_sells[2].incremetShortGlobal;


    //obv 6H, 4H, 1H
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

    resolve_obv = this.resolve_obv(debug, obv1H, count_ovb1H, parameters.parameters.triggerMultiplier_1h, parameters.parameters.triggerTimeWindows_1h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv1H += resolve_obv.buy;
    debug.obv1H -= resolve_obv.sell;
    debug.highest_overage_obv_1h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_1h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_1h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    //CCI 6H, 4H, 1H

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

    resolve_cci = this.resolve_cci(debug, long1H, cci1H, count_cci1H);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci1H += resolve_cci.buy;
    debug.cci1H -= resolve_cci.sell;
    debug = resolve_cci.debug;

    //MACD 6H, 4H, 1H

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

    resolve_macd = this.resolve_macd(debug, long1H, macd1H01, count_macd1H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd1H01 += resolve_macd.buy;
    debug.macd1H01 -= resolve_macd.sell;
    debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long1H, macd1H02, count_macd1H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd1H02 += resolve_macd.buy;
    // debug.macd1H02 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    //AO 6H, 4H, 1H

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

    resolve_ao = this.resolve_ao(debug, long1H, ao1H, count_ao1H);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao1H += resolve_ao.buy;
    debug.ao1H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    //RSI 6H, 4H, 1H

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

    resolve_rsi = this.resolve_rsi(debug, rsi1H, count_rsi1H, 20, 80);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi1H += resolve_rsi.buy;
    debug.rsi1H -= resolve_rsi.sell;
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
        label: 'sentiment_1h',
        value: 'sentiment_1h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogGlobal_1h',
        value: 'incrementLogGlobal_1h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortTOP_1h',
        value: 'incremetShortTOP_1h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogTOP_1h',
        value: 'incrementLogTOP_1h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortGlobal_1h',
        value: 'incremetShortGlobal_1h',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'sentiment_30m',
        value: 'sentiment_30m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogGlobal_30m',
        value: 'incrementLogGlobal_30m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortTOP_30m',
        value: 'incremetShortTOP_30m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogTOP_30m',
        value: 'incrementLogTOP_30m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortGlobal_30m',
        value: 'incremetShortGlobal_30m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'sentiment_15m',
        value: 'sentiment_15m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogGlobal_15m',
        value: 'incrementLogGlobal_15m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortTOP_15m',
        value: 'incremetShortTOP_15m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogTOP_15m',
        value: 'incrementLogTOP_15m',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortGlobal_15m',
        value: 'incremetShortGlobal_15m',
        type: 'cross',
        range: 'sma200',
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
        label: 'cci1H',
        value: 'cci1H',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv1H',
        value: 'obv1H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'difference_obv_1h',
        value: 'difference_obv_1h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'cci1H',
        value: 'cci1H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'macd1H01',
        value: 'macd1H01',
        type: 'cross',
        type: 'sma200',
      },
      // {
      //   label: 'macd1H02',
      //   value: 'macd1H02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      {
        label: 'rsi1H',
        value: 'rsi1H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao1H',
        value: 'ao1H',
        type: 'cross',
        type: 'sma200',
      },
    ];
  }

  getOptions() {
    return {
      period: '6h',
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