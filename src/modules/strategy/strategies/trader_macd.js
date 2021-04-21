const SignalResult = require('../dict/signal_result');
const request = require('request');
module.exports = class TraderCustom {
  getName() {
    return 'trader_macd';
  }

  buildIndicator(indicatorBuilder, options) {
    // if (!options.period) {
    //   throw 'Invalid period';
    // }
    //6H
    indicatorBuilder.add('cci6H', 'cci', '6h', {
      length: 5,
    });

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

    indicatorBuilder.add('macd_2h_01', 'macd_ext', '2h', {
      fast_period: 5,
      slow_period: 34,
      signal_period: 8,
    });

    indicatorBuilder.add('macd_2h_02', 'macd_ext', '2h', {
      fast_period: 6,
      slow_period: 23,
      signal_period: 10,
    });

    indicatorBuilder.add('macd_4h_01', 'macd_ext', '4h', {
      fast_period: 6,
      slow_period: 23,
      signal_period: 10,
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
      length: 10,
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
    //1D

    indicatorBuilder.add('cci1D', 'cci', '12h', {
      length: 30,
    });

    indicatorBuilder.add('obv12h', 'obv', '12h');

    indicatorBuilder.add('ao12h', 'ao', '12h');

    indicatorBuilder.add('ema2001D', 'ema', '12h', {
      length: 200,
    });

    indicatorBuilder.add('rsi12h', 'rsi', '12h');
  }

  period(indicatorPeriod, options, buy_or_sell) {
    return this.trader_custom(
      buy_or_sell,
      indicatorPeriod.getPrice(),
      indicatorPeriod.getIndicator('macd_12h_01'),
      indicatorPeriod.getIndicator('macd_12h_02'),
      indicatorPeriod.getIndicator('macd_2h_01'),
      indicatorPeriod.getIndicator('macd_2h_02'),
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
      indicatorPeriod.getIndicator('cci1D'),
      indicatorPeriod.getIndicator('ao12h'),
      indicatorPeriod.getIndicator('obv12h'),
      indicatorPeriod.getIndicator('ema2001D'),
      indicatorPeriod.getIndicator('rsi12h'),
      indicatorPeriod.getLastSignal()
    );
  }

  async trader_custom(
    buy_or_sell,
    price,
    macd1D01Full,
    macd1D02Full,
    macd2H01Full,
    macd2H02Full,
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
    cci1DFull,
    ao1DFull,
    obv1DFull,
    ema2001DFull,
    rsi1DFull,
    lastSignal
  ) {
    // console.log('******Entra*****  1  **********--->');

    // if (!cci6HFull) {
    //   console.log('cci6HFull-->' + cci6HFull);
    // }
    // if (!cci1DFull) {
    //   console.log('cci1DFull-->' + cci1DFull);
    // }
    // if (!cci4HFull) {
    //   console.log('cci4HFull-->' + cci4HFull);
    // }
    // if (!ema2001DFull) {
    //   console.log('ema2001DFull-->' + ema2001DFull);
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
    // if (!macd1D01Full) {
    //   console.log('macd1D01Full-->' + macd1D01Full);
    // }
    // if (!macd1D02Full) {
    //   console.log('macd1D02Full-->' + macd1D02Full);
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
    // if (!ao1DFull) {
    //   console.log('ao1DFull-->' + ao1DFull);
    // }
    // if (!obv1DFull) {
    //   console.log('obv1DFull-->' + obv1DFull);
    // }
    // if (!rsi1DFull) {
    //   console.log('rsi1DFull-->' + rsi1DFull);
    // }

    // if (cci6HFull.length <= 0) {
    //   console.log(' cci6HFull.length <= 0-->');
    // }
    // if (cci4HFull.length <= 0) {
    //   console.log('cci4HFull.length <= 0-->');
    // }
    // if (cci1DFull.length <= 0) {
    //   console.log('cci1DFull.length <= 0-->');
    // }
    // if (ema2001DFull.length < 2) {
    //   console.log('ema2001DFull.length < 2-->');
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
    // if (macd1D01Full.length < 2) {
    //   console.log('macd1D01Full.length < 2-->');
    // }
    // if (macd1D02Full.length < 2) {
    //   console.log('macd1D02Full.length < 2-->');
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
    // if (obv1DFull.length < 2) {
    //   console.log('obv1DFull.length < 2-->');
    // }
    // if (ao6HFull.length < 2) {
    //   console.log('ao6HFull.length < 2-->');
    // }
    // if (ao4HFull.length < 2) {
    //   console.log('ao4HFull.length < 2-->');
    // }
    // if (ao1DFull.length < 2) {
    //   console.log('ao1DFull.length < 2-->');
    // }
    // if (rsi6HFull.length < 2) {
    //   console.log('rsi6HFull.length < 2-->');
    // }
    // if (rsi4HFull.length < 2) {
    //   console.log('rsi4HFull.length < 2-->');
    // }
    // if (rsi1DFull.length < 2) {
    //   console.log('rsi1DFull.length < 2-->');
    // }

    if (
      !cci6HFull ||
      !cci1DFull ||
      !cci4HFull ||
      !ema2001DFull ||
      !ema2004HFull ||
      !sma2006HFull ||
      !sma2004HFull ||
      !ema2006HFull ||
      !ema704hFull ||
      !ema1006HFull ||
      !macd1D01Full ||
      !macd1D02Full ||
      !macd4H01Full ||
      !macd4H02Full ||
      !macd6HFull ||
      !macd6H01Full ||
      !macd6H02Full ||
      !macd6H03Full ||
      !obv6HFull ||
      !obv4HFull ||
      !obv1DFull ||
      !ao6HFull ||
      !ao4HFull ||
      !ao1DFull ||
      !rsi6HFull ||
      !rsi4HFull ||
      !rsi1DFull ||
      cci6HFull.length <= 0 ||
      cci4HFull.length <= 0 ||
      cci1DFull.length <= 0 ||
      ema2001DFull.length < 2 ||
      ema2004HFull.length < 2 ||
      sma2006HFull.length < 2 ||
      sma2004HFull.length < 2 ||
      ema2006HFull.length < 2 ||
      ema704hFull.length < 2 ||
      ema1006HFull.length < 2 ||
      macd1D01Full.length < 2 ||
      macd1D02Full.length < 2 ||
      macd4H01Full.length < 2 ||
      macd4H02Full.length < 2 ||
      macd6HFull.length < 2 ||
      macd6H01Full.length < 2 ||
      macd6H02Full.length < 2 ||
      macd6H03Full.length < 2 ||
      obv6HFull.length < 2 ||
      obv4HFull.length < 2 ||
      obv1DFull.length < 2 ||
      ao6HFull.length < 2 ||
      ao4HFull.length < 2 ||
      ao1DFull.length < 2 ||
      rsi6HFull.length < 2 ||
      rsi4HFull.length < 2 ||
      rsi1DFull.length < 2
    ) {
      return;
    }

    // remove incomplete candle
    const ema2001D = ema2001DFull.slice(0, -1);
    const ema2004H = ema2004HFull.slice(0, -1);
    const sma2006H = sma2006HFull.slice(0, -1);
    const sma2004H = sma2004HFull.slice(0, -1);
    const ema2006H = ema2006HFull.slice(0, -1);
    const ema704h = ema704hFull.slice(0, -1);
    const ema1006H = ema1006HFull.slice(0, -1);
    const cci6H = cci6HFull.slice(0, -1);
    const cci1D = cci1DFull.slice(0, -1);
    const cci4H = cci4HFull.slice(0, -1);
    const macd1D01 = macd1D01Full.slice(0, -1);
    const macd1D02 = macd1D02Full.slice(0, -1);
    const macd2H01 = macd2H01Full.slice(0, -1);
    const macd2H02 = macd2H02Full.slice(0, -1);
    const macd4H01 = macd4H01Full.slice(0, -1);
    const macd4H02 = macd4H02Full.slice(0, -1);
    const macd6H = macd6HFull.slice(0, -1);
    const macd6H01 = macd6H01Full.slice(0, -1);
    const macd6H02 = macd6H02Full.slice(0, -1);
    const macd6H03 = macd6H03Full.slice(0, -1);
    const obv6H = obv6HFull.slice(0, -1);
    const obv4H = obv4HFull.slice(0, -1);
    const obv1D = obv1DFull.slice(0, -1);
    const ao6H = ao6HFull.slice(0, -1);
    const ao4H = ao4HFull.slice(0, -1);
    const ao1D = ao1DFull.slice(0, -1);
    const rsi6H = rsi6HFull.slice(0, -1);
    const rsi4H = rsi4HFull.slice(0, -1);
    const rsi1D = rsi1DFull.slice(0, -1);

    // console.log('***************************rsi6H***************--->' + rsi6H);

    // const debug = {
    //   ema2001D: ema2001D.slice(-1)[0],
    //   ema2004H: ema2004H.slice(-1)[0],
    //   sma2006H: sma2006H.slice(-1)[0],
    //   sma2004H: sma2004H.slice(-1)[0],
    //   ema2006H: ema2006H.slice(-1)[0],
    //   ema704h: ema704h.slice(-1)[0],
    //   ema1006H: ema1006H.slice(-1)[0],
    //   last_histogram_6H: macd6H.slice(-1)[0].histogram,
    //   before_histogram_6H: macd6H.slice(-2)[0].histogram,
    //   last_histogram_12h: macd1D.slice(-1)[0].histogram,
    //   before_histogram_12h: macd1D.slice(-2)[0].histogram,
    //   last_histogram_4h: macd4H.slice(-1)[0].histogram,
    //   before_histogram_4h: macd4H.slice(-2)[0].histogram,
    //   cci6H: cci6H.slice(-1)[0],
    //   cci1D: cci1D.slice(-1)[0],
    //   cci4H: cci4H.slice(-1)[0],
    //   Lrsi6H: rsi6H.slice(-1)[0],
    //   Brsi6H: rsi6H.slice(-2)[0],
    //   last_signal: lastSignal,
    // };

    let count_signals_buy = 0;
    let count_signals_sell = 0;

    let debug = {
      macd1D01: 0,
      // macd1D02: 0,
      macd2H01: 0,
      // macd2H02: 0,
      macd4H01: 0,
      // macd4H02: 0,
      macd6H: 0,
      // macd6H01: 0,
      // macd6H02: 0,
      // macd6H03: 0,
      cci6H: 0,
      cci4H: 0,
      cci1D: 0,
      obv6H: 0,
      highest_overage_obv_6h: 0,
      current_average_obv_6h: 0,
      difference_obv_6h: 0,
      obv4H: 0,
      highest_overage_obv_4h: 0,
      current_average_obv_4h: 0,
      difference_obv_4h: 0,
      obv1D: 0,
      highest_overage_obv_12h: 0,
      current_average_obv_12h: 0,
      difference_obv_12h: 0,
      ao6H: 0,
      ao4H: 0,
      ao1D: 0,
      rsi6H: 0,
      rsi4H: 0,
      rsi1D: 0,
      sell: 0,
      buy: 0,
      last_signal: lastSignal,
      sentiment: 0,
      incremetShortTOP: 0,
      incremetShortGlobal: 0,
      incrementLogTOP: 0,
      incrementLogGlobal: 0,
    };
    /*
    levels signals
    */
    let count_ovb1D = 2;
    let count_ovb6H = 1.5;
    let count_ovb4H = 1;

    let count_cci1D = 2;
    let count_cci6H = 1.5;
    let count_cci4H = 1;

    let count_macd1D = 2;
    let count_macd6H = 1.5;
    let count_macd4H = 1;
    let count_macd2H = 0.75;

    let count_ao1D = 2;
    let count_ao6H = 1.5;
    let count_ao4H = 1;

    let count_rsi1D = 2;
    let count_rsi6H = 1.5;
    let count_rsi4H = 1;

    //SMA & LONG

    //6H
    let long6H = price >= sma2006H;

    // ema long
    if (!long6H) {
      long6H = price >= ema2006H.slice(-1)[0];
    }

    //4H
    let long4H = price >= sma2004H;

    // ema long
    if (!long4H) {
      long4H = price >= ema2004H.slice(-1)[0];
    }

    let long1D = price >= sma2006H.slice(-1)[0];

    // ema long
    if (!long1D) {
      long1D = price >= ema2001D.slice(-1)[0];
    }

    //sma & ema 6H, 4H, 1D
    count_signals_buy += buy_or_sell.buy;
    count_signals_sell += buy_or_sell.sell;
    debug.sentiment += buy_or_sell.buy;
    debug.sentiment -= buy_or_sell.sell;
    debug.incrementLogGlobal = buy_or_sell.incrementLogGlobal;
    debug.incremetShortTOP = buy_or_sell.incremetShortTOP;
    debug.incrementLogTOP = buy_or_sell.incrementLogTOP;
    debug.incremetShortGlobal = buy_or_sell.incremetShortGlobal;

    // //obv 6H, 4H, 1D
    // //01 16 -1.248
    // let resolve_obv = this.resolve_obv(debug, obv1D, count_ovb1D, 1.058, 1);
    // count_signals_buy += resolve_obv.buy;
    // count_signals_sell += resolve_obv.sell;
    // debug.obv1D += resolve_obv.buy;
    // debug.obv1D -= resolve_obv.sell;
    // debug.highest_overage_obv_12h -= resolve_obv.highestOverage_obv;
    // debug.current_average_obv_12h -= resolve_obv.currentAverage_obv;
    // debug.difference_obv_12h -= resolve_obv.difference_obv;
    // debug = resolve_obv.debug;

    // resolve_obv = this.resolve_obv(debug, obv6H, count_ovb6H, 1.035, 2);
    // count_signals_buy += resolve_obv.buy;
    // count_signals_sell += resolve_obv.sell;
    // debug.obv6H += resolve_obv.buy;
    // debug.obv6H -= resolve_obv.sell;
    // debug.highest_overage_obv_6h -= resolve_obv.highestOverage_obv;
    // debug.current_average_obv_6h -= resolve_obv.currentAverage_obv;
    // debug.difference_obv_6h -= resolve_obv.difference_obv;
    // debug = resolve_obv.debug;

    // //1.014 20 3 am
    // //resolve_obv = this.resolve_obv(debug, obv4H, count_ovb4H, 1.034, 2.9);     3.6%    56.25%  BTC
    // resolve_obv = this.resolve_obv(debug, obv4H, count_ovb4H, 1.02, 2.5);
    // count_signals_buy += resolve_obv.buy;
    // count_signals_sell += resolve_obv.sell;
    // debug.obv4H += resolve_obv.buy;
    // debug.obv4H -= resolve_obv.sell;
    // debug.highest_overage_obv_4h -= resolve_obv.highestOverage_obv;
    // debug.current_average_obv_4h -= resolve_obv.currentAverage_obv;
    // debug.difference_obv_4h -= resolve_obv.difference_obv;
    // debug = resolve_obv.debug;

    // //CCI 6H, 4H, 1D

    // let resolve_cci = this.resolve_cci(debug, long6H, cci6H, count_cci6H);
    // count_signals_buy += resolve_cci.buy;
    // count_signals_sell += resolve_cci.sell;
    // debug.cci6H += resolve_cci.buy;
    // debug.cci6H -= resolve_cci.sell;
    // debug = resolve_cci.debug;

    // resolve_cci = this.resolve_cci(debug, long4H, cci4H, count_cci4H);
    // count_signals_buy += resolve_cci.buy;
    // count_signals_sell += resolve_cci.sell;
    // debug.cci4H += resolve_cci.buy;
    // debug.cci4H -= resolve_cci.sell;
    // debug = resolve_cci.debug;

    // resolve_cci = this.resolve_cci(debug, long1D, cci1D, count_cci1D);
    // count_signals_buy += resolve_cci.buy;
    // count_signals_sell += resolve_cci.sell;
    // debug.cci1D += resolve_cci.buy;
    // debug.cci1D -= resolve_cci.sell;
    // debug = resolve_cci.debug;

    // //MACD 6H, 4H, 1D

    // // let resolve_macd = this.resolve_macd(debug, long6H, macd6H03, count_macd6H);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd6H03 += resolve_macd.buy;
    // // debug.macd6H03 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // // resolve_macd = this.resolve_macd(debug, long6H, macd6H02, count_macd6H);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd6H02 += resolve_macd.buy;
    // // debug.macd6H02 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // // resolve_macd = this.resolve_macd(debug, long6H, macd6H01, count_macd6H);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd6H01 += resolve_macd.buy;
    // // debug.macd6H01 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // let resolve_macd = this.resolve_macd(debug, long4H, macd6H, count_macd6H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd6H += resolve_macd.buy;
    // debug.macd6H -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // // resolve_macd = this.resolve_macd(debug, long4H, macd4H02, count_macd4H);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd4H02 += resolve_macd.buy;
    // // debug.macd4H02 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long4H, macd4H01, count_macd4H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd4H01 += resolve_macd.buy;
    // debug.macd4H01 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // // resolve_macd = this.resolve_macd(debug, long1D, macd2H02, count_macd2H);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd2H02 += resolve_macd.buy;
    // // debug.macd2H02 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long1D, macd2H01, count_macd2H);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd2H01 += resolve_macd.buy;
    // debug.macd2H01 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // resolve_macd = this.resolve_macd(debug, long1D, macd1D01, count_macd1D);
    // count_signals_buy += resolve_macd.buy;
    // count_signals_sell += resolve_macd.sell;
    // debug.macd1D01 += resolve_macd.buy;
    // debug.macd1D01 -= resolve_macd.sell;
    // debug = resolve_macd.debug;

    // // resolve_macd = this.resolve_macd(debug, long1D, macd1D02, count_macd1D);
    // // count_signals_buy += resolve_macd.buy;
    // // count_signals_sell += resolve_macd.sell;
    // // debug.macd1D02 += resolve_macd.buy;
    // // debug.macd1D02 -= resolve_macd.sell;
    // // debug = resolve_macd.debug;

    // //AO 6H, 4H, 1D

    // let resolve_ao = this.resolve_ao(debug, long6H, ao6H, count_ao6H);
    // count_signals_buy += resolve_ao.buy;
    // count_signals_sell += resolve_ao.sell;
    // debug.ao6H += resolve_ao.buy;
    // debug.ao6H -= resolve_ao.sell;
    // debug = resolve_ao.debug;

    // resolve_ao = this.resolve_ao(debug, long4H, ao4H, count_ao4H);
    // count_signals_buy += resolve_ao.buy;
    // count_signals_sell += resolve_ao.sell;
    // debug.ao4H += resolve_ao.buy;
    // debug.ao4H -= resolve_ao.sell;
    // debug = resolve_ao.debug;

    // resolve_ao = this.resolve_ao(debug, long1D, ao1D, count_ao1D);
    // count_signals_buy += resolve_ao.buy;
    // count_signals_sell += resolve_ao.sell;
    // debug.ao1D += resolve_ao.buy;
    // debug.ao1D -= resolve_ao.sell;
    // debug = resolve_ao.debug;

    // //RSI 6H, 4H, 1D

    // let resolve_rsi = this.resolve_rsi(debug, rsi6H, count_rsi6H, 20, 80);
    // count_signals_buy += resolve_rsi.buy;
    // count_signals_sell += resolve_rsi.sell;
    // debug.rsi6H += resolve_rsi.buy;
    // debug.rsi6H -= resolve_rsi.sell;

    // debug = resolve_rsi.debug;

    // resolve_rsi = this.resolve_rsi(debug, rsi4H, count_rsi4H, 20, 80);
    // count_signals_buy += resolve_rsi.buy;
    // count_signals_sell += resolve_rsi.sell;
    // debug.rsi4H += resolve_rsi.buy;
    // debug.rsi4H -= resolve_rsi.sell;
    // debug = resolve_rsi.debug;

    // resolve_rsi = this.resolve_rsi(debug, rsi1D, count_rsi1D, 20, 80);
    // count_signals_buy += resolve_rsi.buy;
    // count_signals_sell += resolve_rsi.sell;
    // debug.rsi1D += resolve_rsi.buy;
    // debug.rsi1D -= resolve_rsi.sell;
    // debug = resolve_rsi.debug;

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
        label: 'macd2H01',
        value: 'macd2H01',
        type: 'cross',
        type: 'sma200',
      },

      {
        label: 'sentiment',
        value: 'sentiment',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogGlobal',
        value: 'incrementLogGlobal',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortTOP',
        value: 'incremetShortTOP',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incrementLogTOP',
        value: 'incrementLogTOP',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'incremetShortGlobal',
        value: 'incremetShortGlobal',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'cci1D',
        value: 'cci1D',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv1D',
        value: 'obv1D',
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
        label: 'cci1D',
        value: 'cci1D',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'macd1D01',
        value: 'macd1D01',
        type: 'cross',
        type: 'sma200',
      },
      // {
      //   label: 'macd1D02',
      //   value: 'macd1D02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
      {
        label: 'rsi1D',
        value: 'rsi1D',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao1D',
        value: 'ao1D',
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
      // {
      //   label: 'macd2H02',
      //   value: 'macd2H02',
      //   type: 'cross',
      //   type: 'sma200',
      // },
    ];
  }

  getOptions() {
    return {
      period: '12h',
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
          difference_obv: difference_obv,
        };
      } else {
        return {
          buy: 0,
          sell: count_ovb,
          debug: debug,
          highestOverage_obv: highestOverage_obv,
          currentAverage_obv: currentAverage_obv,
          difference_obv: difference_obv,
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      debug: debug,
      highestOverage_obv: highestOverage_obv,
      currentAverage_obv: currentAverage_obv,
      difference_obv: 0,
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