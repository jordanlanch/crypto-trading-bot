const SignalResult = require('../dict/signal_result');

module.exports = class TraderCustom {
  getName() {
    return 'custom_all';
  }

  buildIndicator(indicatorBuilder, options) {
    //12h
    indicatorBuilder.add('cci12H', 'cci', '12h', {
      length: options.cci12H_length || 14,
    });
    indicatorBuilder.add('macd12H', 'macd_ext', '12h', {
      fast_period: options.macd12H_fast_period || 6,
      slow_period: options.macd12H_slow_period || 25,
      signal_period: options.macd12H_signal_period || 10,
    });
    indicatorBuilder.add('obv12H', 'obv', '12h');
    indicatorBuilder.add('ao12H', 'ao', '12h');
    indicatorBuilder.add('sma20012H', 'sma', '6h', {
      length: 300,
    });
    indicatorBuilder.add('ema20012H', 'ema', '12h', {
      length: 200,
    });
    indicatorBuilder.add('rsi12H', 'rsi', '12h');
    indicatorBuilder.add('hma_high12H', 'hma', '12h', {
      length: options.hma_high12H_length || 14,
      source: 'high'
    });
    // line for long entry or short exit
    indicatorBuilder.add('hma_low12H', 'hma', '12h', {
      length: options.hma_low12H_length || 14,
      source: 'low'
    });
    // basic price normalizer
    indicatorBuilder.add('hma12H', 'hma', '12h', {
      length: options.hma12H_length || 9
    });
    // our main direction
    const trendCloudMultiplier_12h = options.trendCloudMultiplier_12h || 4;
    indicatorBuilder.add('cloud12H', 'ichimoku_cloud', '12h', {
      conversionPeriod: 9 * trendCloudMultiplier_12h,
      basePeriod: 26 * trendCloudMultiplier_12h,
      spanPeriod: 52 * trendCloudMultiplier_12h,
      displacement: 26 * trendCloudMultiplier_12h
    });
    indicatorBuilder.add('bb12H', 'bb', '12h');


    //6H
    indicatorBuilder.add('cci6H', 'cci', '6h', {
      length: options.cci6H_length || 16,
    });
    indicatorBuilder.add('macd6H', 'macd_ext', '6h', {
      fast_period: options.macd6H_fast_period || 9, //9
      slow_period: options.macd6H_slow_period || 26, //26
      signal_period: options.macd6H_signal_period || 11, //11
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
    indicatorBuilder.add('hma_high6H', 'hma', '6h', {
      length: options.hma_high6H_length || 14,
      source: 'high'
    });
    // line for long entry or short exit
    indicatorBuilder.add('hma_low6H', 'hma', '6h', {
      length: options.hma_low6H_length || 14,
      source: 'low'
    });
    // basic price normalizer
    indicatorBuilder.add('hma6H', 'hma', '6h', {
      length: options.hma6H_length || 9
    });
    // our main direction
    const trendCloudMultiplier_6h = options.trendCloudMultiplier_6h || 5;
    indicatorBuilder.add('cloud6H', 'ichimoku_cloud', '6h', {
      conversionPeriod: 9 * trendCloudMultiplier_6h,
      basePeriod: 26 * trendCloudMultiplier_6h,
      spanPeriod: 52 * trendCloudMultiplier_6h,
      displacement: 26 * trendCloudMultiplier_6h
    });
    indicatorBuilder.add('bb6H', 'bb', '6h');



    //4h
    indicatorBuilder.add('cci4H', 'cci', '4h', {
      length: options.cci4H_length || 16,
    });
    indicatorBuilder.add('obv4H', 'obv', '4h');
    indicatorBuilder.add('ao4H', 'ao', '4h');
    indicatorBuilder.add('sma2004H', 'sma', '4h', {
      length: 200,
    });
    indicatorBuilder.add('ema2004H', 'ema', '4h', {
      length: 200,
    });
    indicatorBuilder.add('macd4H', 'macd_ext', '4h', {
      fast_period: options.macd4H_fast_period || 6,
      slow_period: options.macd4H_slow_period || 13,
      signal_period: options.macd4H_signal_period || 9,
    });
    indicatorBuilder.add('rsi4H', 'rsi', '4h');
    indicatorBuilder.add('hma_high4H', 'hma', '4h', {
      length: options.hma_high4H_length || 14,
      source: 'high'
    });
    // line for long entry or short exit
    indicatorBuilder.add('hma_low4H', 'hma', '4h', {
      length: options.hma_low4H_length || 14,
      source: 'low'
    });
    // basic price normalizer
    indicatorBuilder.add('hma4H', 'hma', '4h', {
      length: options.hma4H_length || 9
    });
    // our main direction
    const trendCloudMultiplier_4h = options.trendCloudMultiplier_4h || 5;
    indicatorBuilder.add('cloud4H', 'ichimoku_cloud', '4h', {
      conversionPeriod: 9 * trendCloudMultiplier_4h,
      basePeriod: 26 * trendCloudMultiplier_4h,
      spanPeriod: 52 * trendCloudMultiplier_4h,
      displacement: 26 * trendCloudMultiplier_4h
    });
    indicatorBuilder.add('bb4H', 'bb', '4h');


    //2h
    indicatorBuilder.add('cci2H', 'cci', '2h', {
      length: options.cci2H_length || 16,
    });
    indicatorBuilder.add('obv2H', 'obv', '2h');
    indicatorBuilder.add('ao2H', 'ao', '2h');
    indicatorBuilder.add('sma2002H', 'sma', '2h', {
      length: 200,
    });
    indicatorBuilder.add('ema2002H', 'ema', '2h', {
      length: 200,
    });
    indicatorBuilder.add('macd2H', 'macd_ext', '2h', {
      fast_period: options.macd2H_fast_period || 6,
      slow_period: options.macd2H_slow_period || 13,
      signal_period: options.macd2H_signal_period || 9,
    });
    indicatorBuilder.add('rsi2H', 'rsi', '2h');
    indicatorBuilder.add('hma_high2H', 'hma', '2h', {
      length: options.hma_high2H_length || 14,
      source: 'high'
    });
    // line for long entry or short exit
    indicatorBuilder.add('hma_low2H', 'hma', '2h', {
      length: options.hma_low2H_length || 14,
      source: 'low'
    });
    // basic price normalizer
    indicatorBuilder.add('hma2H', 'hma', '2h', {
      length: options.hma2H_length || 9
    });
    // our main direction
    const trendCloudMultiplier_2h = options.trendCloudMultiplier_2h || 5;
    indicatorBuilder.add('cloud2H', 'ichimoku_cloud', '2h', {
      conversionPeriod: 9 * trendCloudMultiplier_2h,
      basePeriod: 26 * trendCloudMultiplier_2h,
      spanPeriod: 52 * trendCloudMultiplier_2h,
      displacement: 26 * trendCloudMultiplier_2h
    });
    indicatorBuilder.add('bb2H', 'bb', '2h');
  }

  period(indicatorPeriod, options, buy_or_sells, symbol) {
    return this.trader_custom(
      symbol,
      buy_or_sells,
      indicatorPeriod.getPrice(),
      indicatorPeriod.getIndicator('macd12H'),
      indicatorPeriod.getIndicator('macd4H'),
      indicatorPeriod.getIndicator('macd6H'),
      indicatorPeriod.getIndicator('cci6H'),
      indicatorPeriod.getIndicator('obv6H'),
      indicatorPeriod.getIndicator('ao6H'),
      indicatorPeriod.getIndicator('rsi6H'),
      indicatorPeriod.getIndicator('sma2006H'),
      indicatorPeriod.getIndicator('ema2006H'),
      indicatorPeriod.getIndicator('cci4H'),
      indicatorPeriod.getIndicator('ao4H'),
      indicatorPeriod.getIndicator('obv4H'),
      indicatorPeriod.getIndicator('ema2004H'),
      indicatorPeriod.getIndicator('sma2004H'),
      indicatorPeriod.getIndicator('rsi4H'),
      indicatorPeriod.getIndicator('cci12H'),
      indicatorPeriod.getIndicator('ao12H'),
      indicatorPeriod.getIndicator('obv12H'),
      indicatorPeriod.getIndicator('sma20012H'),
      indicatorPeriod.getIndicator('ema20012H'),
      indicatorPeriod.getIndicator('rsi12H'),
      indicatorPeriod.getIndicator('hma6H'),
      indicatorPeriod.getIndicator('hma_low6H'),
      indicatorPeriod.getIndicator('hma_high6H'),
      indicatorPeriod.getIndicator('bb6H'),
      indicatorPeriod.getIndicator('cloud6H'),
      indicatorPeriod.getIndicator('hma4H'),
      indicatorPeriod.getIndicator('hma_low4H'),
      indicatorPeriod.getIndicator('hma_high4H'),
      indicatorPeriod.getIndicator('bb4H'),
      indicatorPeriod.getIndicator('cloud4H'),
      indicatorPeriod.getIndicator('hma12H'),
      indicatorPeriod.getIndicator('hma_low12H'),
      indicatorPeriod.getIndicator('hma_high12H'),
      indicatorPeriod.getIndicator('bb12H'),
      indicatorPeriod.getIndicator('cloud12H'),
      indicatorPeriod.getIndicator('cci2H'),
      indicatorPeriod.getIndicator('obv2H'),
      indicatorPeriod.getIndicator('ao2H'),
      indicatorPeriod.getIndicator('sma2002H'),
      indicatorPeriod.getIndicator('ema2002H'),
      indicatorPeriod.getIndicator('macd2H'),
      indicatorPeriod.getIndicator('rsi2H'),
      indicatorPeriod.getIndicator('hma_high2H'),
      indicatorPeriod.getIndicator('hma_low2H'),
      indicatorPeriod.getIndicator('hma2H'),
      indicatorPeriod.getIndicator('cloud2H'),
      indicatorPeriod.getIndicator('bb2H'),
      options,
      indicatorPeriod.getLastSignal()
    );
  }

  async trader_custom(
    symbol,
    buy_or_sells,
    price,
    macd12HFull,
    macd4HFull,
    macd6HFull,
    cci6HFull,
    obv6HFull,
    ao6HFull,
    rsi6HFull,
    sma2006HFull,
    ema2006HFull,
    cci4HFull,
    ao4HFull,
    obv4HFull,
    ema2004HFull,
    sma2004HFull,
    rsi4HFull,
    cci12HFull,
    ao12HFull,
    obv12HFull,
    sma20012HFull,
    ema20012HFull,
    rsi12HFull,
    hma6HFull,
    hma_low6HFull,
    hma_high6HFull,
    bb6HFull,
    cloud6HFull,
    hma4HFull,
    hma_low4HFull,
    hma_high4HFull,
    bb4HFull,
    cloud4HFull,
    hma12HFull,
    hma_low12HFull,
    hma_high12HFull,
    bb12HFull,
    cloud12HFull,
    cci2HFull,
    obv2HFull,
    ao2HFull,
    sma2002HFull,
    ema2002HFull,
    macd2HFull,
    rsi2HFull,
    hma_high2HFull,
    hma_low2HFull,
    hma2HFull,
    cloud2HFull,
    bb2HFull,
    options,
    lastSignal
  ) {
    // console.log('******Entra*****  1  **********--->');

    // if (!cci2HFull) {
    //   console.log('cci2HFull-->' + cci2HFull);
    // }
    // if (!cci6HFull) {
    //   console.log('cci6HFull-->' + cci6HFull);
    // }
    // if (!cci12HFull) {
    //   console.log('cci12HFull-->' + cci12HFull);
    // }
    // if (!cci4HFull) {
    //   console.log('cci4HFull-->' + cci4HFull);
    // }
    // if (!sma2002HFull) {
    //   console.log('sma2002HFull-->' + sma2002HFull);
    // }
    // if (!ema2002HFull) {
    //   console.log('ema2002HFull-->' + ema2002HFull);
    // }
    // if (!sma20012HFull) {
    //   console.log('sma20012HFull-->' + sma20012HFull);
    // }
    // if (!ema20012HFull) {
    //   console.log('ema20012HFull-->' + ema20012HFull);
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
    // if (!macd2HFull) {
    //   console.log('macd2HFull-->' + macd2HFull);
    // }
    // if (!macd12HFull) {
    //   console.log('macd12HFull-->' + macd12HFull);
    // }
    // if (!macd4HFull) {
    //   console.log('macd4HFull-->' + macd4HFull);
    // }
    // if (!macd6HFull) {
    //   console.log('macd6HFull-->' + macd6HFull);
    // }
    // if (!obv2HFull) {
    //   console.log('obv2HFull-->' + obv2HFull);
    // }
    // if (!obv6HFull) {
    //   console.log('obv6HFull-->' + obv6HFull);
    // }
    // if (!ao2HFull) {
    //   console.log('ao2HFull-->' + ao2HFull);
    // }
    // if (!ao6HFull) {
    //   console.log('ao6HFull-->' + ao6HFull);
    // }
    // if (!rsi2HFull) {
    //   console.log('rsi2HFull-->' + rsi2HFull);
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
    // if (!ao12HFull) {
    //   console.log('ao12HFull-->' + ao12HFull);
    // }
    // if (!obv12HFull) {
    //   console.log('obv12HFull-->' + obv12HFull);
    // }
    // if (!rsi12HFull) {
    //   console.log('rsi12HFull-->' + rsi12HFull);
    // }

    // if (!hma2HFull) {
    //   console.log('hma2HFull-->' + hma2HFull);
    // }
    // if (!hma_low2HFull) {
    //   console.log('hma_low2HFull-->' + hma_low2HFull);
    // }
    // if (!hma_high2HFull) {
    //   console.log('hma_high2HFull-->' + hma_high2HFull);
    // }
    // if (!bb2HFull) {
    //   console.log('bb2HFull-->' + bb2HFull);
    // }
    // if (!cloud2HFull) {
    //   console.log('cloud2HFull-->' + cloud2HFull);
    // }


    // if (!hma6HFull) {
    //   console.log('hma6HFull-->' + hma6HFull);
    // }
    // if (!hma_low6HFull) {
    //   console.log('hma_low6HFull-->' + hma_low6HFull);
    // }
    // if (!hma_high6HFull) {
    //   console.log('hma_high6HFull-->' + hma_high6HFull);
    // }
    // if (!bb6HFull) {
    //   console.log('bb6HFull-->' + bb6HFull);
    // }
    // if (!cloud6HFull) {
    //   console.log('cloud6HFull-->' + cloud6HFull);
    // }


    // if (cci6HFull.length <= 0) {
    //   console.log(' cci6HFull.length <= 0-->');
    // }
    // if (cci4HFull.length <= 0) {
    //   console.log('cci4HFull.length <= 0-->');
    // }
    // if (cci12HFull.length <= 0) {
    //   console.log('cci12HFull.length <= 0-->');
    // }
    // if (ema20012HFull.length < 2) {
    //   console.log('ema20012HFull.length < 2-->');
    // }
    // if (ema2004HFull.length < 2) {
    //   console.log('ema2004HFull.length < 2-->');
    // }
    // if (sma20012HFull.length < 2) {
    //   console.log('sma20012HFull.length < 2-->');
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
    // if (macd12HFull.length < 2) {
    //   console.log('macd12HFull.length < 2-->');
    // }
    // if (macd4HFull.length < 2) {
    //   console.log('macd4HFull.length < 2-->');
    // }
    // if (macd6HFull.length < 2) {
    //   console.log('macd6HFull.length < 2-->');
    // }
    // if (obv6HFull.length < 2) {
    //   console.log('obv6HFull.length < 2-->');
    // }
    // if (obv4HFull.length < 2) {
    //   console.log('obv4HFull.length < 2-->');
    // }
    // if (obv12HFull.length < 2) {
    //   console.log('obv12HFull.length < 2-->');
    // }
    // if (ao6HFull.length < 2) {
    //   console.log('ao6HFull.length < 2-->');
    // }
    // if (ao4HFull.length < 2) {
    //   console.log('ao4HFull.length < 2-->');
    // }
    // if (ao12HFull.length < 2) {
    //   console.log('ao12HFull.length < 2-->');
    // }
    // if (rsi6HFull.length < 2) {
    //   console.log('rsi6HFull.length < 2-->');
    // }
    // if (rsi4HFull.length < 2) {
    //   console.log('rsi4HFull.length < 2-->');
    // }
    // if (rsi12HFull.length < 2) {
    //   console.log('rsi12HFull.length < 2-->');
    // }

    if (
      !cci6HFull ||
      !cci12HFull ||
      !cci4HFull ||
      !cci2HFull ||
      !sma20012HFull ||
      !ema20012HFull ||
      !sma2004HFull ||
      !ema2004HFull ||
      !sma2006HFull ||
      !ema2006HFull ||
      !sma2002HFull ||
      !ema2002HFull ||
      !macd12HFull ||
      !macd4HFull ||
      !macd6HFull ||
      !obv2HFull ||
      !obv4HFull ||
      !obv6HFull ||
      !obv12HFull ||
      !ao2HFull ||
      !ao4HFull ||
      !ao6HFull ||
      !ao12HFull ||
      !rsi2HFull ||
      !rsi6HFull ||
      !rsi4HFull ||
      !rsi12HFull ||
      cci2HFull.length <= 0 ||
      cci4HFull.length <= 0 ||
      cci6HFull.length <= 0 ||
      cci12HFull.length <= 0 ||
      sma20012HFull.length < 2 ||
      ema20012HFull.length < 2 ||
      sma2002HFull.length < 2 ||
      ema2002HFull.length < 2 ||
      sma2004HFull.length < 2 ||
      ema2004HFull.length < 2 ||
      sma2006HFull.length < 2 ||
      ema2006HFull.length < 2 ||
      macd12HFull.length < 2 ||
      macd4HFull.length < 2 ||
      macd6HFull.length < 2 ||
      macd2HFull.length < 2 ||
      obv12HFull.length < 2 ||
      obv6HFull.length < 2 ||
      obv4HFull.length < 2 ||
      obv2HFull.length < 2 ||
      ao2HFull.length < 2 ||
      ao4HFull.length < 2 ||
      ao6HFull.length < 2 ||
      ao12HFull.length < 2 ||
      rsi2HFull.length < 2 ||
      rsi4HFull.length < 2 ||
      rsi6HFull.length < 2 ||
      rsi12HFull.length < 2
    ) {
      return;
    }

    // remove incomplete candle
    const sma20012H = sma20012HFull.slice(0, -1);
    const ema20012H = ema20012HFull.slice(0, -1);
    const cci12H = cci12HFull.slice(0, -1);
    const macd12H = macd12HFull.slice(0, -1);
    const obv12H = obv12HFull.slice(0, -1);
    const ao12H = ao12HFull.slice(0, -1);
    const rsi12H = rsi12HFull.slice(0, -1);
    const hma12H = hma12HFull.slice(-2);
    const hmaLow12H = hma_low12HFull.slice(-2);
    const hmaHigh12H = hma_high12HFull.slice(-2);
    const bb12H = bb12HFull.slice(-2);
    const cloud12H = cloud12HFull.slice(-1);

    const sma2006H = sma2006HFull.slice(0, -1);
    const ema2006H = ema2006HFull.slice(0, -1);
    const cci6H = cci6HFull.slice(0, -1);
    const macd6H = macd6HFull.slice(0, -1);
    const obv6H = obv6HFull.slice(0, -1);
    const ao6H = ao6HFull.slice(0, -1);
    const rsi6H = rsi6HFull.slice(0, -1);
    const hma6H = hma6HFull.slice(-2);
    const hmaLow6H = hma_low6HFull.slice(-2);
    const hmaHigh6H = hma_high6HFull.slice(-2);
    const bb6H = bb6HFull.slice(-2);
    const cloud6H = cloud6HFull.slice(-1);

    const sma2004H = sma2004HFull.slice(0, -1);
    const ema2004H = ema2004HFull.slice(0, -1);
    const cci4H = cci4HFull.slice(0, -1);
    const macd4H = macd4HFull.slice(0, -1);
    const obv4H = obv4HFull.slice(0, -1);
    const ao4H = ao4HFull.slice(0, -1);
    const rsi4H = rsi4HFull.slice(0, -1);
    const hma4H = hma4HFull.slice(-2);
    const hmaLow4H = hma_low4HFull.slice(-2);
    const hmaHigh4H = hma_high4HFull.slice(-2);
    const bb4H = bb4HFull.slice(-2);
    const cloud4H = cloud4HFull.slice(-1);


    const sma2002H = sma2002HFull.slice(0, -1);
    const ema2002H = ema2002HFull.slice(0, -1);
    const cci2H = cci2HFull.slice(0, -1);
    const macd2H = macd2HFull.slice(0, -1);
    const obv2H = obv2HFull.slice(0, -1);
    const ao2H = ao2HFull.slice(0, -1);
    const rsi2H = rsi2HFull.slice(0, -1);
    const hma2H = hma2HFull.slice(-2);
    const hmaLow2H = hma_low2HFull.slice(-2);
    const hmaHigh2H = hma_high2HFull.slice(-2);
    const bb2H = bb2HFull.slice(-2);
    const cloud2H = cloud2HFull.slice(-1);



    let count_signals_buy = 0;
    let count_signals_sell = 0;

    let debug = {
      macd12H: 0,
      macd6H: 0,
      macd4H: 0,
      macd2H: 0,
      cci12H: 0,
      cci6H: 0,
      cci4H: 0,
      cci2H: 0,
      obv12H: 0,
      highest_overage_obv_12h: 0,
      current_average_obv_12h: 0,
      difference_obv_12h: 0,
      obv6H: 0,
      highest_overage_obv_6h: 0,
      current_average_obv_6h: 0,
      difference_obv_6h: 0,
      obv4H: 0,
      highest_overage_obv_4h: 0,
      current_average_obv_4h: 0,
      difference_obv_4h: 0,
      obv2H: 0,
      highest_overage_obv_2h: 0,
      current_average_obv_2h: 0,
      difference_obv_2h: 0,
      ao12H: 0,
      ao6H: 0,
      ao4H: 0,
      ao2H: 0,
      rsi12H: 0,
      before_rsi12H: 0,
      last_rsi12H: 0,
      rsi6H: 0,
      before_rsi6H: 0,
      last_rsi6H: 0,
      rsi4H: 0,
      before_rsi4H: 0,
      last_rsi4H: 0,
      rsi2H: 0,
      before_rsi2H: 0,
      last_rsi2H: 0,
      dip12H: 0,
      dip6H: 0,
      dip4H: 0,
      dip2H: 0,
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

    //12H
    let long12h = price >= sma20012H.slice(-1)[0];

    // ema long
    if (!long12h) {
      long12h = price >= ema20012H.slice(-1)[0];
    }

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

    //2H
    let long2H = price >= sma2002H.slice(-1)[0];

    // ema long
    if (!long2H) {
      long2H = price >= ema2002H.slice(-1)[0];
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
          triggerMultiplier_2h: 1.009,
          triggerTimeWindows_2h: 2,
          triggerMultiplier_4h: 1.02,
          triggerTimeWindows_4h: 1.7,
          triggerMultiplier_6h: 1.024,
          triggerTimeWindows_6h: 1.25,
          triggerMultiplier_12h: 1.008,
          triggerTimeWindows_12h: 1.25,
          resolve_obv_2h: 1,
          resolve_obv_4h: 1,
          resolve_obv_6h: 1,
          resolve_obv_12h: 1,
          resolve_cci_2h: 0.5,
          resolve_cci_4h: 0.75,
          resolve_cci_6h: 1.25,
          resolve_cci_12h: 0.5,
          resolve_macd2H: 0.25,
          resolve_macd4H: 0.5,
          resolve_macd6H: 1.25,
          resolve_macd12H: 1,
          resolve_ao_2h: 0.5,
          resolve_ao_4h: 1.5,
          resolve_ao_6h: 0.5,
          resolve_ao_12h: 2.25,
          resolve_rsi_2h: 1,
          resolve_rsi_4h: 1,
          resolve_rsi_6h: 1.5,
          resolve_rsi_12h: 1.5,
          resolve_dip_2h: 0.5,
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
          triggerMultiplier_2h: 1.001,
          triggerTimeWindows_2h: 1.5,
          triggerMultiplier_4h: 1.028,
          triggerTimeWindows_4h: 1.2,
          triggerMultiplier_6h: 1.009,
          triggerTimeWindows_6h: 1.2,
          triggerMultiplier_12h: 1.001,
          triggerTimeWindows_12h: 1.5,
          resolve_obv_2h: 1,
          resolve_obv_4h: 0.75,
          resolve_obv_6h: 1,
          resolve_obv_12h: 1,
          resolve_cci_2h: 0.5,
          resolve_cci_4h: 0.5,
          resolve_cci_6h: 0.5,
          resolve_cci_12h: 0.5,
          resolve_macd2H: 0.5,
          resolve_macd4H: 0.5,
          resolve_macd6H: 0.5,
          resolve_macd12H: 1,
          resolve_ao_2h: 0.5,
          resolve_ao_4h: 0.5,
          resolve_ao_6h: 0.5,
          resolve_ao_12h: 1,
          resolve_rsi_2h: 1,
          resolve_rsi_4h: 1,
          resolve_rsi_6h: 0.5,
          resolve_rsi_12h: 0.5,
          resolve_dip_2h: 0.5,
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

    let resolve_obv = this.resolve_obv(debug, obv2H, parameters.parameters.resolve_obv_2h, parameters.parameters.triggerMultiplier_2h, parameters.parameters.triggerTimeWindows_2h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv2H += resolve_obv.buy;
    debug.obv2H -= resolve_obv.sell;
    debug.highest_overage_obv_2h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_2h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_2h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    resolve_obv = this.resolve_obv(debug, obv4H, parameters.parameters.resolve_obv_4h, parameters.parameters.triggerMultiplier_4h, parameters.parameters.triggerTimeWindows_4h);
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

    resolve_obv = this.resolve_obv(debug, obv12H, parameters.parameters.resolve_obv_12h, parameters.parameters.triggerMultiplier_12h, parameters.parameters.triggerTimeWindows_12h);
    count_signals_buy += resolve_obv.buy;
    count_signals_sell += resolve_obv.sell;
    debug.obv12H += resolve_obv.buy;
    debug.obv12H -= resolve_obv.sell;
    debug.highest_overage_obv_12h -= resolve_obv.highestOverage_obv;
    debug.current_average_obv_12h -= resolve_obv.currentAverage_obv;
    debug.difference_obv_12h -= resolve_obv.difference_obv;
    debug = resolve_obv.debug;

    //CCI 6H, 4H, 12h

    let resolve_cci = this.resolve_cci(debug, long2H, cci2H, parameters.parameters.resolve_cci_2h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci2H += resolve_cci.buy;
    debug.cci2H -= resolve_cci.sell;
    debug = resolve_cci.debug;
    
    resolve_cci = this.resolve_cci(debug, long4H, cci4H, parameters.parameters.resolve_cci_4h);
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

    resolve_cci = this.resolve_cci(debug, long12h, cci12H, parameters.parameters.resolve_cci_12h);
    count_signals_buy += resolve_cci.buy;
    count_signals_sell += resolve_cci.sell;
    debug.cci12H += resolve_cci.buy;
    debug.cci12H -= resolve_cci.sell;
    debug = resolve_cci.debug;

    //MACD 6H, 4H, 12h

    let resolve_macd = this.resolve_macd(debug, long2H, macd2H, parameters.parameters.resolve_macd2H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd2H += resolve_macd.buy;
    debug.macd2H -= resolve_macd.sell;
    debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long4H, macd4H, parameters.parameters.resolve_macd4H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd4H += resolve_macd.buy;
    debug.macd4H -= resolve_macd.sell;
    debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long4H, macd6H, parameters.parameters.resolve_macd6H);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd6H += resolve_macd.buy;
    debug.macd6H -= resolve_macd.sell;
    debug = resolve_macd.debug;

    resolve_macd = this.resolve_macd(debug, long12h, macd12H, parameters.parameters.resolve_macd_16h);
    count_signals_buy += resolve_macd.buy;
    count_signals_sell += resolve_macd.sell;
    debug.macd12H += resolve_macd.buy;
    debug.macd12H -= resolve_macd.sell;
    debug = resolve_macd.debug;

    //AO 6H, 4H, 12h

    let resolve_ao = this.resolve_ao(debug, long2H, ao2H, parameters.parameters.resolve_ao_2h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao2H += resolve_ao.buy;
    debug.ao2H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    resolve_ao = this.resolve_ao(debug, long4H, ao4H, parameters.parameters.resolve_ao_4h);
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


    resolve_ao = this.resolve_ao(debug, long12h, ao12H, parameters.parameters.resolve_ao_12h);
    count_signals_buy += resolve_ao.buy;
    count_signals_sell += resolve_ao.sell;
    debug.ao12H += resolve_ao.buy;
    debug.ao12H -= resolve_ao.sell;
    debug = resolve_ao.debug;

    //RSI 6H, 4H, 12h

    let resolve_rsi = this.resolve_rsi(debug, rsi2H, parameters.parameters.resolve_rsi_2h, options.rsi_min_2h, options.rsi_max_2h);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi2H += resolve_rsi.buy;
    debug.rsi2H -= resolve_rsi.sell;
    debug.last_rsi2H = resolve_rsi.last_rsi;
    debug.before_rsi2H = resolve_rsi.before_rsi;
    debug = resolve_rsi.debug;

    resolve_rsi = this.resolve_rsi(debug, rsi4H, parameters.parameters.resolve_rsi_4h, options.rsi_min_4h, options.rsi_max_4h);
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


    resolve_rsi = this.resolve_rsi(debug, rsi12H, parameters.parameters.resolve_rsi_12h, options.rsi_min_12h, options.rsi_max_12h);
    count_signals_buy += resolve_rsi.buy;
    count_signals_sell += resolve_rsi.sell;
    debug.rsi12H += resolve_rsi.buy;
    debug.rsi12H -= resolve_rsi.sell;
    debug.last_rsi12H = resolve_rsi.last_rsi;
    debug.before_rsi12H = resolve_rsi.before_rsi;
    debug = resolve_rsi.debug;


    let resolve_dip = this.resolve_dip(debug, lastSignal, hma2H, hmaLow2H, hmaHigh2H, bb2H, cloud2H, parameters.parameters.resolve_dip_2h)
    count_signals_buy += resolve_dip.buy;
    count_signals_sell += resolve_dip.sell;
    debug.dip2H += resolve_dip.buy;
    debug.dip2H -= resolve_dip.sell;
    debug = resolve_dip.debug;

    resolve_dip = this.resolve_dip(debug, lastSignal, hma4H, hmaLow4H, hmaHigh4H, bb4H, cloud4H, parameters.parameters.resolve_dip_4h)
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
        label: 'cci2H',
        value: 'cci2H',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv2H',
        value: 'obv2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'difference_obv_2h',
        value: 'difference_obv_2h',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'macd2H',
        value: 'macd2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'rsi2H',
        value: 'rsi2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'before_rsi2H',
        value: 'before_rsi2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'last_rsi2H',
        value: 'last_rsi2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'ao2H',
        value: 'ao2H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'dip2H',
        value: 'dip2H',
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
      {
        label: 'macd4H',
        value: 'macd4H',
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
        label: 'cci12H',
        value: 'cci12H',
        type: 'cross',
        range: 'sma200',
      },
      {
        label: 'obv12H',
        value: 'obv12H',
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
        label: 'macd12H',
        value: 'macd12H',
        type: 'cross',
        type: 'sma200',
      },
      {
        label: 'rsi12H',
        value: 'rsi12H',
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
        label: 'ao12H',
        value: 'ao12H',
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
      cci12H_length: 24,
      macd12H_fast_period: 6,
      macd12H_slow_period: 13,
      macd12H_signal_period: 9,
      hma_high12H_length: 12,
      hma_low12H_length: 12,
      hma12H_length: 9,
      trendCloudMultiplier_12h: 4,
      rsi_min_12h: 20,
      rsi_max_12h: 80,


      cci6H_length: 24,
      macd6H_fast_period: 9,
      macd6H_slow_period: 26,
      macd6H_signal_period: 11,
      hma_high6H_length: 16,
      hma_low6H_length: 16,
      hma6H_length: 12,
      trendCloudMultiplier_6h: 4,
      rsi_min_6h: 15,
      rsi_max_6h: 85,

      cci4H_length: 24,
      macd4H_fast_period: 6,
      macd4H_slow_period: 13,
      macd4H_signal_period: 9,
      hma_high4H_length: 20,
      hma_low4H_length: 20,
      hma4H_length: 9,
      trendCloudMultiplier_4h: 4,
      rsi_min_4h: 19,
      rsi_max_4h: 81,
    
      cci2H_length: 24,
      macd2H_fast_period: 6,
      macd2H_slow_period: 13,
      macd2H_signal_period: 9,
      hma_high2H_length: 20,
      hma_low2H_length: 20,
      hma2H_length: 9,
      trendCloudMultiplier_2h: 4,
      rsi_min_2h: 15,
      rsi_max_2h: 85,


     
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
