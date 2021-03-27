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

  // c.symbols.push({
  //   symbol: 'BTCUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_BTC',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'ETHUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_ETH',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'BCHUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_BCH',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'XRPUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_XRP',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'EOSUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_EOS',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'LTCUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_LTC',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'ADAUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_ADA',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'ETCUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_ETC',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'LINKUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_LINK',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'DASHUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_DASH',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // c.symbols.push({
  //   symbol: 'XMRUSDT',
  //   periods: ['1h', '2h', '4h', '6h', '12h'],
  //   exchange: 'binance_futures',
  //   state: 'trade',
  //   watchdogs: [{
  //     name: 'risk_reward_ratio',
  //     target_percent: 2.5,
  //     stop_percent: 1.7,
  //   }, ],
  //   trade: {
  //     currency_capital: 60,
  //     strategies: [{
  //         strategy: 'trader_macd_XMR',
  //         interval: '5m',
  //         options: {
  //           period: '12h',
  //         },
  //       },
  //       // {
  //       //   "strategy": "dca_dipper",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",

  //       //     "percent_below_price": 0.1,
  //       //     "hma_period": 12,
  //       //     "hma_source": "low"
  //       //   }
  //       // },
  //       // {
  //       //   "strategy": "dip_catcher",
  //       //   "interval": "15m",
  //       //   "options": {
  //       //     "period": "15m",
  //       //     "trend_cloud_multiplier": 4,
  //       //     "hma_high_period": 9,
  //       //     "hma_high_candle_source": "close",
  //       //     "hma_low_period": 9,
  //       //     "hma_low_candle_source": "close"
  //       //   }
  //       // }
  //     ]
  //   }
  // });

  // Binance futures
  //   c.symbols.push(...(await InstanceUtil.binanceFuturesInit()));

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
                    'periods': ['1m', '5m', '1h'],
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
//         'periods': ['1m', '5m', '1h'],
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
//         'periods': ['1m', '5m', '1h'],
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
// let z = ['ADAUSDT', 'BTCUSDT'];

// z.forEach((pair) => {
//   c.symbols.push({
//     symbol: pair,
//     periods: ['1h', '2h', '4h', '6h', '12h'],
//     exchange: 'binance',
//     state: 'watch',
//     watchdogs: [{
//       name: 'stoploss_watch',
//       stop: 1.5,
//     }, ],
//     strategies: [{
//       strategy: 'custom_all',
//       options: {
//         period: '4h',
//       },
//     }, ],
//   });
// });

c.symbols.push({
  symbol: 'BTCUSDT',
  periods: ['1h', '2h', '4h', '6h', '12h', '1d'],
  exchange: 'binance',
  state: 'watch',
  watchdogs: [{
    name: 'stoploss_watch',
    stop: 1.5,
  }, ],
  strategies: [{
    strategy: 'custom_all',
    "interval": "15m",
    options: {
      cci4H_length: 16,
      macd_4h_fast_period: 6,
      macd_4h_slow_period: 13,
      macd_4h_signal_period: 9,
      hma_high4h_length: 16,
      hma_low4h_length: 16,
      hma4h_length: 9,
      trendCloudMultiplier_4h: 4,

      cci6H_length: 20,
      macd_6h_fast_period: 9,
      macd_6h_slow_period: 26,
      macd_6h_signal_period: 11,
      hma_high6h_length: 12,
      hma_low6h_length: 12,
      hma6h_length: 9,
      trendCloudMultiplier_6h: 4,

      cci12h_length: 12,
      macd_12h_01_fast_period: 6,
      macd_12h_01_slow_period: 13,
      macd_12h_01_signal_period: 9,
      hma_high12h_length: 12,
      hma_low12h_length: 12,
      hma12h_length: 9,
      trendCloudMultiplier_12h: 4,
    },
  }, ],
});

c.symbols.push({
  symbol: 'ADAUSDT',
  periods: ['1h', '2h', '4h', '6h', '12h'],
  exchange: 'binance',
  state: 'watch',
  watchdogs: [{
    name: 'stoploss_watch',
    stop: 1.5,
  }, ],
  strategies: [{
    strategy: 'custom_all',
    "interval": "15m",
    options: {
      cci4H_length: 25,
      macd_4h_fast_period: 6,
      macd_4h_slow_period: 13,
      macd_4h_signal_period: 9,
      hma_high4h_length: 20,
      hma_low4h_length: 20,
      hma4h_length: 9,
      trendCloudMultiplier_4h: 4,

      cci6H_length: 12,
      macd_6h_fast_period: 9,
      macd_6h_slow_period: 26,
      macd_6h_signal_period: 11,
      hma_high6h_length: 12,
      hma_low6h_length: 12,
      hma6h_length: 9,
      trendCloudMultiplier_6h: 4,

      cci12h_length: 12,
      macd_12h_01_fast_period: 6,
      macd_12h_01_slow_period: 13,
      macd_12h_01_signal_period: 9,
      hma_high12h_length: 12,
      hma_low12h_length: 12,
      hma12h_length: 9,
      trendCloudMultiplier_12h: 4,
    },
  }, ],
});

// c.symbols.push({
//   symbol: 'ETHUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'custom_all',
//     "interval": "15m",
//     options: {
//       cci4H_length: 25,
//       macd_4h_fast_period: 6,
//       macd_4h_slow_period: 26,
//       macd_4h_signal_period: 9,
//       hma_high4h_length: 20,
//       hma_low4h_length: 20,
//       hma4h_length: 9,
//       trendCloudMultiplier_4h: 4,

//       cci6H_length: 12,
//       macd_6h_fast_period: 9,
//       macd_6h_slow_period: 26,
//       macd_6h_signal_period: 11,
//       hma_high6h_length: 12,
//       hma_low6h_length: 12,
//       hma6h_length: 9,
//       trendCloudMultiplier_6h: 4,

//       cci12h_length: 20,
//       macd_12h_01_fast_period: 9,
//       macd_12h_01_slow_period: 26,
//       macd_12h_01_signal_period: 11,
//       hma_high12h_length: 10,
//       hma_low12h_length: 10,
//       hma12h_length: 9,
//       trendCloudMultiplier_12h: 2,
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'XRPUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_XRP',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'EOSUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_EOS',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'LTCUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_LTC',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });



// c.symbols.push({
//   symbol: 'ETCUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_ETC',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'LINKUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_LINK',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'DASHUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_DASH',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'XMRUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_XMR',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'QTUMUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_QTUM',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'XTZUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_XTZ',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'ZECUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_ZEC',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'IOTAUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_IOTA',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });

// c.symbols.push({
//   symbol: 'NEOUSDT',
//   periods: ['1h', '2h', '4h', '6h', '12h'],
//   exchange: 'binance',
//   state: 'watch',
//   watchdogs: [{
//     name: 'stoploss_watch',
//     stop: 1.5,
//   }, ],
//   strategies: [{
//     strategy: 'trader_macd_NEO',
//     "interval": "15m",
//     options: {
//       period: '12h',
//     },
//   }, ],
// });