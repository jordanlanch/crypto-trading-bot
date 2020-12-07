var c = module.exports = {}

c.symbols = []


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


    // Binance futures
    // c.symbols.push(...(await InstanceUtil.binanceFuturesInit()));

    // Binance futures or trade with 2 USD
    // c.symbols.push(
    //   ...(await InstanceUtil.binanceFuturesInit(pair => {
    //     pair.trade = { currency_capital: 2 };
    //     return pair;
    //   }))
    // );

    // Bitfinex USD margin pairs
    //c.symbols.push(...(await InstanceUtil.bitfinexUsdMarginInit()));

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
                    'state': 'watch',
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
//         'state': 'watch',
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
//         'state': 'watch',
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
let z = [
    'IOTAUSDT',
    'NEOUSDT',
    'QTUMUSDT',
    'ZECUSDT',
    'XTZUSDT',
  ];
  
  z.forEach((pair) => {
    c.symbols.push({
      symbol: pair,
      periods: ['1h', '2h', '4h', '6h', '1d'],
      exchange: 'binance',
      state: 'watch',
      watchdogs: [
        {
          name: 'stoploss_watch',
          stop: 1.5,
        },
      ],
      strategies: [
        {
          strategy: 'trader_macd_ADA',
          options: {
            period: '1d',
          },
        },
      ],
    });
  });

  c.symbols.push({
    symbol: 'BTCUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_BTC',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'ETHUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_ETH',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'XRPUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_XRP',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'EOSUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_EOS',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'LTCUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_LTC',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'ADAUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_ADA',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'ETCUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_ETC',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'LINKUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_LINK',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'DASHUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_DASH',
        options: {
          period: '1d',
        },
      },
    ],
  });

  c.symbols.push({
    symbol: 'XMRUSDT',
    periods: ['1h', '2h', '4h', '6h', '1d'],
    exchange: 'binance',
    state: 'watch',
    watchdogs: [
      {
        name: 'stoploss_watch',
        stop: 1.5,
      },
    ],
    strategies: [
      {
        strategy: 'trader_macd_XMR',
        options: {
          period: '1d',
        },
      },
    ],
  });
