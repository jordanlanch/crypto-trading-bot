var c = (module.exports = {});

c.symbols = [];

const InstanceUtil = require('./src/utils/instance_util');
c.init = async () => {
  // Bitmex contracts + examples
  //   c.symbols.push(
  //     ...(await InstanceUtil.bitmexInit(pair => {
  //       // inverse contracts; trade with 1 USD
  //       // you can also provide a "capital" instead for trade with fixed BTC or ETH
  //       if (['XBTUSD', 'ETHUSD'].includes(pair.symbol) || pair.symbol.startsWith('XBT')) {
  //         pair.trade = { currency_capital: 1 };
  //         return pair;
  //       }

  //       // trade with 1 ETH on "BTC-ETH" contract, but ignore USD pair
  //       if (pair.symbol.startsWith('ETH') && !pair.symbol.includes('USD')) {
  //         pair.trade = { capital: 1 };
  //         return pair;
  //       }

  //       // trade ADA-BTC; as ADA is low priced BTC; good for testing
  //       if (pair.symbol.startsWith('ADA')) {
  //         pair.trade = { capital: 1 };
  //         return pair;
  //       }

  //       // remove others; we can not use all pairs in one instance; (only on when we not in quarterly contract change window)
  //       return undefined;
  //     }))
  //   );

  // FTX all "perp" / futures contracts
  // c.symbols.push(...(await InstanceUtil.ftxInitPerp()));

  // Binance all USDT pairs
  // c.symbols.push(...(await InstanceUtil.binanceInitUsd()));

  // Binance all USDT pairs spot or margin
  // c.symbols.push(...(await InstanceUtil.binanceInitMarginUsd()));
  // c.symbols.push(...(await InstanceUtil.binanceInitSpotUsd()));

  c.symbols.push({
    symbol: 'BTCUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_BTC',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'ETHUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_ETH',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'BCHUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_BCH',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'XRPUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_XRP',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'EOSUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_EOS',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'LTCUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_LTC',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'ADAUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_ADA',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'ETCUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_ETC',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'LINKUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_LINK',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'DASHUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_DASH',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  c.symbols.push({
    symbol: 'XMRUSDT',
    periods: ['15m', '1h', '2h', '4h', '6h', '12h'],
    exchange: 'binance_futures',
    state: 'trade',
    watchdogs: [{
      name: 'risk_reward_ratio',
      target_percent: 4.5,
      stop_percent: 2.5,
    }, ],
    trade: {
      currency_capital: 60,
      strategies: [{
          strategy: 'trader_macd_XMR',
          options: {
            period: '12h',
          },
        },
        {
          "strategy": "dca_dipper",
          "interval": "15m",
          "options": {
            "period": "15m",
            
            "percent_below_price": 0.1,
            "hma_period": 12,
            "hma_source": "low"
          }
        },
        {
          "strategy": "dip_catcher",
          "interval": "15m",
          "options": {
            "period": "15m",
            "trend_cloud_multiplier": 4,
            "hma_high_period": 9,
            "hma_high_candle_source": "close",
            "hma_low_period": 9,
            "hma_low_candle_source": "close"
          }
        }
      ]
    }
  });

  // Binance futures
  c.symbols.push(...(await InstanceUtil.binanceFuturesInit()));

  // Bitfinex USD margin pairs
  // c.symbols.push(...(await InstanceUtil.bitfinexUsdMarginInit()));

  // Bybit USD pairs
  // c.symbols.push(...(await InstanceUtil.bybitInit()));
};

/*
// external loading; lazy init
c.init = () => {
    return new Promise(resolve => {
        require('request')('https://api.binance.com/api/v1/exchangeInfo', (error, response, body) => {
            let z = [
                'BNBBTC', 'QKCBTC', 'XVGBTC', 'STRATBTC', 'LUNBTC', 'NANOBTC', 'LOOMBTC', 'VIBEBTC', 'PIVXBTC', 'MCOBTC', 'APPCBTC', 'STORJBTC', 'ELFBTC', 'ENJBTC', 'KNCBTC', 'RVNBTC', 'WANBTC', 'HCBTC',
            ]

            let trading = {
                //'BTCUSDT': 50,
                'TNTBTC': 6622,
                'ADAUSDT': 300,
                //'TUSDUSDT': 50,
                'ONTUSDT': 40,
            }

            // only USDT pairs, because of its volume and ignore stable coin pairing
            JSON.parse(body)['symbols']
		        .filter(p => p['quoteAsset'] === 'USDT' && !['USDC', 'PAX', 'USDS', 'TUSD'].includes(p['baseAsset']) && p['status'].toLowerCase() === 'trading')
                .forEach(p => {
                    z.push(p['symbol'])
                    trading[p['symbol']] = 50
                }
            )

            z.forEach((pair) => {
                let cfg = {
                    'symbol': pair,
                    'periods': ['1m', '15m', '1h'],
                    'exchange': 'binance',
                    'state': 'trade',
                    'watchdogs': [
                        {
                            'name': 'stoploss_watch',
                            'stop': 1.5,
                        }
                    ],
                    'strategies': [
                        {
                            'strategy': 'cci',
                            'options': {
                                'period': '15m'
                            }
                        },
                        {
                            'strategy': 'obv_pump_dump'
                        },
                        {
                            'strategy': 'macd',
                            'options': {
                                'period': '1h'
                            }
                        }
                    ]
                };

                if (pair in trading) {
                    cfg['trade'] = {
                        'capital': trading[pair],
                    }
                }

                c.symbols.push(cfg)
            })

            resolve()
        })
    })
}
*/

// // bitmex
// let y = [
//     'XBTUSD', 'ETHUSD'
// ]

// y.forEach((pair) => {
//     c.symbols.push({
//         'symbol': pair,
//         'periods': ['1m', '15m', '1h'],
//         'exchange': 'bitmex',
//         'state': 'trade',
//         'extra': {
//             'bitmex_leverage': 5,
//             'bitmex_rest_order_sync': 45000
//         },
//         //'trade': {
//         //    'currency_capital': 1 // trade with 1 USD dollar
//         //},
//         //'watchdogs': [
//         //    {
//         //        'name': 'stoploss',
//         //        'percent': 3,
//         //    },
//         //    {
//         //        'name': 'risk_reward_ratio',
//         //        'target_percent': 3,
//         //        'stop_percent': 3,
//         //    }
//         //],
//         'strategies': [
//             {
//                 'strategy': 'cci',
//                 'options': {
//                     'period': '15m'
//                 }
//             },
//             {
//                 'strategy': 'obv_pump_dump'
//             },
//             {
//                 'strategy': 'macd',
//                 'options': {
//                     'period': '1h'
//                 }
//             }
//         ]
//     })
// })

// // bitmex testnet
// let l = [
//     'XBTUSD'
// ]

// l.forEach((pair) => {
//     c.symbols.push({
//         'symbol': pair,
//         'periods': ['1m', '15m', '1h'],
//         'exchange': 'bitmex_testnet',
//         'state': 'trade',
//         'watchdogs': [
//             {
//                 'name': 'stoploss',
//                 'percent': 3,
//             }
//         ],
//         'extra': {
//             'bitmex_leverage': 5,
//         },
//         'trade': {
//             'capital': 50,
//         },
//         'strategies': [
//             {
//                 'strategy': 'cci',
//                 'options': {
//                     'period': '15m'
//                 }
//             },
//             {
//                 'strategy': 'obv_pump_dump'
//             },
//             {
//                 'strategy': 'macd',
//                 'options': {
//                     'period': '1h'
//                 }
//             }
//         ]
//     })
// })

// let z = [
//     'BTCUSDT', 'XLMUSDT', 'BNBBTC', 'BNBUSDT'
// ]

// z.forEach((pair) => {
//     c.symbols.push({
//         'symbol': pair,
//         'periods': ['1m', '15m', '1h'],
//         'exchange': 'binance',
//         'state': 'trade',
//         'strategies': [
//             {
//                 'strategy': 'cci',
//                 'options': {
//                     'period': '15m'
//                 }
//             },
//             {
//                 'strategy': 'obv_pump_dump'
//             },
//             {
//                 'strategy': 'macd',
//                 'options': {
//                     'period': '1h'
//                 }
//             }
//         ]
//     })
// })