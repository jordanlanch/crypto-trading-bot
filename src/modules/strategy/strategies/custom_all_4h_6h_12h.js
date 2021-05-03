const SignalResult = require('../dict/signal_result');

module.exports = class TraderCustom {
  getName() {
    return 'custom_all_old';
  }

  buildIndicator(indicatorBuilder, options) {
    // if (!options.period) {
    //   throw 'Invalid period';
    // }
    //6H
    indicatorBuilder.add('cci6H', 'cci', '6h', {
      length: options.cci6H_length || 16,
    });


    indicatorBuilder.add('macd_6h', 'macd_ext', '6h', {
      fast_period: options.macd_6h_fast_period || 9, //9
      slow_period: options.macd_6h_slow_period || 26, //26
      signal_period: options.macd_6h_signal_period || 11, //11
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


    indicatorBuilder.add('hma_high6h', 'hma', '6h', {
      length: options.hma_high6h_length || 14,
      source: 'high'
    });

    // line for long entry or short exit
    indicatorBuilder.add('hma_low6h', 'hma', '6h', {
      length: options.hma_low6h_length || 14,
      source: 'low'
    });

    // basic price normalizer
    indicatorBuilder.add('hma6h', 'hma', '6h', {
      length: options.hma6h_length || 9
    });

    // our main direction
    const trendCloudMultiplier_6h = options.trendCloudMultiplier_6h || 5;
    indicatorBuilder.add('cloud6h', 'ichimoku_cloud', '6h', {
      conversionPeriod: 9 * trendCloudMultiplier_6h,
      basePeriod: 26 * trendCloudMultiplier_6h,
      spanPeriod: 52 * trendCloudMultiplier_6h,
      displacement: 26 * trendCloudMultiplier_6h
    });

    indicatorBuilder.add('bb6h', 'bb', '6h');


    //4h



    indicatorBuilder.add('cci4H', 'cci', '4h', {
      length: options.cci4H_length || 16,
    });


    indicatorBuilder.add('obv4h', 'obv', '4h');

    indicatorBuilder.add('ao4h', 'ao', '4h');



    indicatorBuilder.add('sma2004H', 'sma', '4h', {
      length: 200,
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
      fast_period: options.macd_4h_fast_period || 6,
      slow_period: options.macd_4h_slow_period || 13,
      signal_period: options.macd_4h_signal_period || 9,
    });

    indicatorBuilder.add('rsi4h', 'rsi', '4h');


    indicatorBuilder.add('hma_high4h', 'hma', '4h', {
      length: options.hma_high4h_length || 14,
      source: 'high'
    });

    // line for long entry or short exit
    indicatorBuilder.add('hma_low4h', 'hma', '4h', {
      length: options.hma_low4h_length || 14,
      source: 'low'
    });

    // basic price normalizer
    indicatorBuilder.add('hma4h', 'hma', '4h', {
      length: options.hma4h_length || 9
    });

    // our main direction
    const trendCloudMultiplier_4h = options.trendCloudMultiplier_4h || 5;
    indicatorBuilder.add('cloud4h', 'ichimoku_cloud', '4h', {
      conversionPeriod: 9 * trendCloudMultiplier_4h,
      basePeriod: 26 * trendCloudMultiplier_4h,
      spanPeriod: 52 * trendCloudMultiplier_4h,
      displacement: 26 * trendCloudMultiplier_4h
    });

    indicatorBuilder.add('bb4h', 'bb', '4h');


    //12h
    indicatorBuilder.add('cci12h', 'cci', '12h', {
      length: options.cci12h_length || 14,
    });

    indicatorBuilder.add('macd_12h_01', 'macd_ext', '12h', {
      fast_period: options.macd_12h_01_fast_period || 6,
      slow_period: options.macd_12h_01_slow_period || 25,
      signal_period: options.macd_12h_01_signal_period || 10,
    });

    indicatorBuilder.add('macd_12h_02', 'macd_ext', '12h', {
      fast_period: 12,
      slow_period: 26,
      signal_period: 9,
    });


    indicatorBuilder.add('obv12h', 'obv', '12h');

    indicatorBuilder.add('ao12h', 'ao', '12h');

    indicatorBuilder.add('sma20012h', 'sma', '6h', {
      length: 200,
    });
    indicatorBuilder.add('ema20012h', 'ema', '12h', {
      length: 200,
    });

    indicatorBuilder.add('rsi12h', 'rsi', '12h');


    indicatorBuilder.add('hma_high12h', 'hma', '12h', {
      length: options.hma_high12h_length || 14,
      source: 'high'
    });

    // line for long entry or short exit
    indicatorBuilder.add('hma_low12h', 'hma', '12h', {
      length: options.hma_low12h_length || 14,
      source: 'low'
    });

    // basic price normalizer
    indicatorBuilder.add('hma12h', 'hma', '12h', {
      length: options.hma12h_length || 9
    });

    // our main direction
    const trendCloudMultiplier_12h = options.trendCloudMultiplier_12h || 4;
    indicatorBuilder.add('cloud12h', 'ichimoku_cloud', '12h', {
      conversionPeriod: 9 * trendCloudMultiplier_12h,
      basePeriod: 26 * trendCloudMultiplier_12h,
      spanPeriod: 52 * trendCloudMultiplier_12h,
      displacement: 26 * trendCloudMultiplier_12h
    });

    indicatorBuilder.add('bb12h', 'bb', '12h');
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
      indicatorPeriod.getIndicator('hma6h'),
      indicatorPeriod.getIndicator('hma_low6h'),
      indicatorPeriod.getIndicator('hma_high6h'),
      indicatorPeriod.getIndicator('bb6h'),
      indicatorPeriod.getIndicator('cloud6h'),
      indicatorPeriod.getIndicator('hma4h'),
      indicatorPeriod.getIndicator('hma_low4h'),
      indicatorPeriod.getIndicator('hma_high4h'),
      indicatorPeriod.getIndicator('bb4h'),
      indicatorPeriod.getIndicator('cloud4h'),
      indicatorPeriod.getIndicator('hma12h'),
      indicatorPeriod.getIndicator('hma_low12h'),
      indicatorPeriod.getIndicator('hma_high12h'),
      indicatorPeriod.getIndicator('bb12h'),
      indicatorPeriod.getIndicator('cloud12h'),
      options,
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
    hma6hFull,
    hma_low6hFull,
    hma_high6hFull,
    bb6hFull,
    cloud6hFull,
    hma4hFull,
    hma_low4hFull,
    hma_high4hFull,
    bb4hFull,
    cloud4hFull,
    hma12hFull,
    hma_low12hFull,
    hma_high12hFull,
    bb12hFull,
    cloud12hFull,
    options,
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

    // if (!hma6hFull) {
    //   console.log('hma6hFull-->' + hma6hFull);
    // }
    // if (!hma_low6hFull) {
    //   console.log('hma_low6hFull-->' + hma_low6hFull);
    // }
    // if (!hma_high6hFull) {
    //   console.log('hma_high6hFull-->' + hma_high6hFull);
    // }
    // if (!bb6hFull) {
    //   console.log('bb6hFull-->' + bb6hFull);
    // }
    // if (!cloud6hFull) {
    //   console.log('cloud6hFull-->' + cloud6hFull);
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

    const hma6H = hma6hFull.slice(-2);
    const hmaLow6H = hma_low6hFull.slice(-2);
    const hmaHigh6H = hma_high6hFull.slice(-2);
    const bb6H = bb6hFull.slice(-2);
    const cloud6H = cloud6hFull.slice(-1);

    const hma4H = hma4hFull.slice(-2);
    const hmaLow4H = hma_low4hFull.slice(-2);
    const hmaHigh4H = hma_high4hFull.slice(-2);
    const bb4H = bb4hFull.slice(-2);
    const cloud4H = cloud4hFull.slice(-1);

    const hma12H = hma12hFull.slice(-2);
    const hmaLow12H = hma_low12hFull.slice(-2);
    const hmaHigh12H = hma_high12hFull.slice(-2);
    const bb12H = bb12hFull.slice(-2);
    const cloud12H = cloud12hFull.slice(-1);

    let count_signals_buy = 0;
    let count_signals_sell = 0;

    let debug = {
      macd12h01: 0,
      macd4H01: 0,
      macd6H: 0,
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
      rsi4H: 0,
      before_rsi4H: 0,
      last_rsi4H: 0,
      rsi6H: 0,
      before_rsi6H: 0,
      last_rsi6H: 0,
      rsi12h: 0,
      before_rsi12H: 0,
      last_rsi12H: 0,
      dip6H: 0,
      dip4H: 0,
      dip12H: 0,
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


    let parameters_by_symbol = [{
        //BTC Interval
        // 180 min 
        // Return on Invest = 193.25%
        // Sharpe Ratio = -2.6
        // Average Return Per Trade	= 1.4 %
        // Total Number of Trades	= 85
        // Number of Winning Trades	= 49
        // Percentage of Winning Trades	= 57.65

        symbol: 'BTCUSDT',
        parameters: {
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 1.7,
          triggerMultiplier_6h: 1.019,
          triggerTimeWindows_6h: 1.5,
          triggerMultiplier_12h: 1.008,
          triggerTimeWindows_12h: 1.25,
          resolve_obv_4h: 1,
          resolve_obv_6h: 1,
          resolve_obv_12h: 1,
          resolve_cci_4h: 1,
          resolve_cci_6h: 1,
          resolve_cci_12h: 0.5,
          resolve_macd_4h: 0.25,
          resolve_macd_6h: 0.25,
          resolve_macd_12h: 1,
          resolve_ao_4h: 0.5,
          resolve_ao_6h: 0.5,
          resolve_ao_12h: 2.25,
          resolve_rsi_4h: 1,
          resolve_rsi_6h: 1.5,
          resolve_rsi_12h: 0.5,
          resolve_dip_4h: 0.5,
          resolve_dip_6h: 1,
          resolve_dip_12h: 1,
          count_signal: 1,
        }
      },
      {
        //ADA Interval
        // 180 min 
        // Return on Invest = 193.25%
        // Sharpe Ratio = -2.6
        // Average Return Per Trade	= 1.4 %
        // Total Number of Trades	= 85
        // Number of Winning Trades	= 49
        // Percentage of Winning Trades	= 57.65

        symbol: 'ADAUSDT',
        parameters: {
          triggerMultiplier_4h: 1.028,
          triggerTimeWindows_4h: 1.2,
          triggerMultiplier_6h: 1.009,
          triggerTimeWindows_6h: 1.2,
          triggerMultiplier_12h: 1.001,
          triggerTimeWindows_12h: 1.5,
          resolve_obv_4h: 0.75,
          resolve_obv_6h: 1,
          resolve_obv_12h: 1,
          resolve_cci_4h:0.5,
          resolve_cci_6h: 0.5,
          resolve_cci_12h: 0.5,
          resolve_macd_4h:0.5,
          resolve_macd_6h: 0.5,
          resolve_macd_12h: 1,
          resolve_ao_4h: 0.5,
          resolve_ao_6h: 0.5,
          resolve_ao_12h: 1,
          resolve_rsi_4h:1,
          resolve_rsi_6h: 0.5,
          resolve_rsi_12h: 0.5,
          resolve_dip_4h: 0.5,
          resolve_dip_6h: 0.5,
          resolve_dip_12h: 0.5,
          count_signal: 1,
        }
      },
      {
        symbol: 'XRPUSDT',
        parameters: {
          triggerMultiplier_4h: 1.011,
          triggerTimeWindows_4h: 1,
          triggerMultiplier_6h: 1.019,
          triggerTimeWindows_6h: 1.5,
          triggerMultiplier_12h: 1.027,
          triggerTimeWindows_12h: 1.5,
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
          triggerMultiplier_6h: 1.041,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_4h: 0.93,
          triggerTimeWindows_4h: 2,
          triggerMultiplier_12h: 1.075,
          triggerTimeWindows_12h: 1,
        }
      },
      {
        symbol: 'ETHUSDT',
        parameters: {
          triggerMultiplier_4h: 1.071,
          triggerTimeWindows_4h: 1,
          triggerMultiplier_6h: 1.021,
          triggerTimeWindows_6h: 1,
          triggerMultiplier_12h: 1.058,
          triggerTimeWindows_12h: 1,
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

    let resolve_obv = this.resolve_obv(debug, obv4H, parameters.parameters.resolve_obv_4h, parameters.parameters.triggerMultiplier_4h, parameters.parameters.triggerTimeWindows_4h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv4H += resolve_obv.buy;
    debug.obv4H -= resolve_obv.sell;
    debug.highest_overage_obv_4h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_4h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_4h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    resolve_obv = this.resolve_obv(debug, obv6H, parameters.parameters.resolve_obv_6h, parameters.parameters.triggerMultiplier_6h, parameters.parameters.triggerTimeWindows_6h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv6H += resolve_obv.buy;
    debug.obv6H -= resolve_obv.sell;
    debug.highest_overage_obv_6h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_6h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_6h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    resolve_obv = this.resolve_obv(debug, obv12h, parameters.parameters.resolve_obv_12h, parameters.parameters.triggerMultiplier_12h, parameters.parameters.triggerTimeWindows_12h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv12h += resolve_obv.buy;
    debug.obv12h -= resolve_obv.sell;
    debug.highest_overage_obv_12h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_12h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_12h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    //CCI 6H, 4H, 12h

    let resolve_cci = this.resolve_cci(debug, long4H, cci4H, parameters.parameters.resolve_cci_4h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci4H += resolve_cci.buy;
    debug.cci4H -= resolve_cci.sell;
    debug = resolve_cci.debug;

    resolve_cci = this.resolve_cci(debug, long6H, cci6H, parameters.parameters.resolve_cci_6h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci6H += resolve_cci.buy;
    debug.cci6H -= resolve_cci.sell;
    debug = resolve_cci.debug;



    resolve_cci = this.resolve_cci(debug, long12h, cci12h, parameters.parameters.resolve_cci_12h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci12h += resolve_cci.buy;
    debug.cci12h -= resolve_cci.sell;
    debug = resolve_cci.debug;

    //MACD 6H, 4H, 12h

    let resolve_macd = this.resolve_macd(debug, long4H, macd4H01, parameters.parameters.resolve_macd_4h);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd4H01 += resolve_macd.buy;
    debug.macd4H01 -= resolve_macd.sell;
    debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long4H, macd6H, parameters.parameters.resolve_macd_6h);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd6H += resolve_macd.buy;
    debug.macd6H -= resolve_macd.sell;
    debug = resolve_macd.debug;



    resolve_macd = this.resolve_macd(debug, long12h, macd12h01, parameters.parameters.resolve_macd_16h);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd12h01 += resolve_macd.buy;
    debug.macd12h01 -= resolve_macd.sell;
    debug = resolve_macd.debug;

    //AO 6H, 4H, 12h

    let resolve_ao = this.resolve_ao(debug, long4H, ao4H, parameters.parameters.resolve_ao_4h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao4H += resolve_ao.buy;
    debug.ao4H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    resolve_ao = this.resolve_ao(debug, long6H, ao6H, parameters.parameters.resolve_ao_6h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao6H += resolve_ao.buy;
    debug.ao6H -= resolve_ao.sell;
    debug = resolve_ao.debug;



    resolve_ao = this.resolve_ao(debug, long12h, ao12h, parameters.parameters.resolve_ao_12h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao12h += resolve_ao.buy;
    debug.ao12h -= resolve_ao.sell;
    debug = resolve_ao.debug;

    //RSI 6H, 4H, 12h

    let resolve_rsi = this.resolve_rsi(debug, rsi4H, parameters.parameters.resolve_rsi_4h, options.rsi_min_4h, options.rsi_max_4h);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi4H += resolve_rsi.buy;
    debug.rsi4H -= resolve_rsi.sell;
    debug.last_rsi4H = resolve_rsi.last_rsi;
    debug.before_rsi4H = resolve_rsi.before_rsi;
    debug = resolve_rsi.debug;

    resolve_rsi = this.resolve_rsi(debug, rsi6H, parameters.parameters.resolve_rsi_6h, options.rsi_min_6h, options.rsi_max_6h);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi6H += resolve_rsi.buy;
    debug.rsi6H -= resolve_rsi.sell;
    debug.last_rsi6H = resolve_rsi.last_rsi;
    debug.before_rsi6H = resolve_rsi.before_rsi;
    debug = resolve_rsi.debug;


    resolve_rsi = this.resolve_rsi(debug, rsi12h, parameters.parameters.resolve_rsi_12h, options.rsi_min_12h, options.rsi_max_12h);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi12h += resolve_rsi.buy;
    debug.rsi12h -= resolve_rsi.sell;
    debug.last_rsi12H = resolve_rsi.last_rsi;
    debug.before_rsi12H = resolve_rsi.before_rsi;
    debug = resolve_rsi.debug;


    let resolve_dip = this.resolve_dip(debug, lastSignal, hma4H, hmaLow4H, hmaHigh4H, bb4H, cloud4H, parameters.parameters.resolve_dip_4h)
    count_signals_buy += resolve_dip.buy;
    count_signals_sell += resolve_dip.sell;
    debug.dip4H += resolve_dip.buy;
    debug.dip4H -= resolve_dip.sell;
    debug = resolve_dip.debug;

    resolve_dip = this.resolve_dip(debug, lastSignal, hma6H, hmaLow6H, hmaHigh6H, bb6H, cloud6H, parameters.parameters.resolve_dip_6h)
    count_signals_buy += resolve_dip.buy;
    count_signals_sell += resolve_dip.sell;
    debug.dip6H += resolve_dip.buy;
    debug.dip6H -= resolve_dip.sell;
    debug = resolve_dip.debug;

    resolve_dip = this.resolve_dip(debug, lastSignal, hma12H, hmaLow12H, hmaHigh12H, bb12H, cloud12H, parameters.parameters.resolve_dip_12h)
    count_signals_buy += resolve_dip.buy;
    count_signals_sell += resolve_dip.sell;
    debug.dip12H += resolve_dip.buy;
    debug.dip12H -= resolve_dip.sell;
    debug = resolve_dip.debug;

    // console.log('******price***************--->' + price);
    // console.log('************count_signals_buy***************--->' + count_signals_buy);
    // console.log('******************count_signals_sell***************--->' + count_signals_sell);

    debug.buy = count_signals_buy;
    debug.sell = count_signals_sell;
    let count_signal = parameters.parameters.count_signal;

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
        label: 'before_rsi4H',
        value: 'before_rsi4H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'last_rsi4H',
        value: 'last_rsi4H',
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
        label: 'dip4H',
        value: 'dip4H',
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
      {
        label: 'rsi6H',
        value: 'rsi6H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'before_rsi6H',
        value: 'before_rsi6H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'last_rsi6H',
        value: 'last_rsi6H',
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
        label: 'dip6H',
        value: 'dip6H',
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
        label: 'macd12h01',
        value: 'macd12h01',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'rsi12h',
        value: 'rsi12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'before_rsi12H',
        value: 'before_rsi12H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'last_rsi12H',
        value: 'last_rsi12H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao12h',
        value: 'ao12h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'dip12H',
        value: 'dip12H',
        type: 'cross',
        type: 'sma200',
      },
    ];
  }

  getOptions() {
    return {
      cci4H_length: 25,
      macd_4h_fast_period: 6,
      macd_4h_slow_period: 13,
      macd_4h_signal_period: 9,
      hma_high4h_length: 20,
      hma_low4h_length: 20,
      hma4h_length: 9,
      trendCloudMultiplier_4h: 4,
      rsi_min_4h: 20,
      rsi_max_4h: 80,

      cci6H_length: 12,
      macd_6h_fast_period: 9,
      macd_6h_slow_period: 26,
      macd_6h_signal_period: 11,
      hma_high6h_length: 12,
      hma_low6h_length: 12,
      hma6h_length: 9,
      trendCloudMultiplier_6h: 4,
      rsi_min_6h: 25,
      rsi_max_6h: 75,

      cci12h_length: 12,
      macd_12h_01_fast_period: 6,
      macd_12h_01_slow_period: 13,
      macd_12h_01_signal_period: 9,
      hma_high12h_length: 12,
      hma_low12h_length: 12,
      hma12h_length: 9,
      trendCloudMultiplier_12h: 4,
      rsi_min_12h: 25,
      rsi_max_12h: 75,
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
          last_rsi: last_rsi,
          before_rsi: before_rsi,
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
          last_rsi: last_rsi,
          before_rsi: before_rsi,
          debug: debug
        };
      }
    }
    return {
      buy: 0,
      sell: 0,
      last_rsi: 0,
      before_rsi: 0,
      debug: debug
    };
  }

  resolve_dip(debug, lastSignal, hma, hmaLow, hmaHigh, bb, cloud, count_dip) {

    if (!cloud[0] || !hma[0]) {
      return {
        buy: 0,
        sell: 0,
        debug: debug
      };
    }

    // follow the main trend with entries
    const isLong = hma[0] > cloud[0].spanB;

    if (hmaLow[0] > bb[0].lower && hmaLow[1] < bb[1].lower) {
      if (isLong) {
        return {
          buy: count_dip,
          sell: 0,
          debug: debug
        };
      }
    }

    if (hmaHigh[0] < bb[0].upper && hmaHigh[1] > bb[1].upper) {
      if (!isLong) {
        return {
          buy: 0,
          sell: count_dip,
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
