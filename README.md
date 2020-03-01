# @davidtavarez/coincap

Get cryptocurrency information from CoinCap.

## Install

```
$ npm install @davidtavarez/coincap --save-dev
```

## Usage

```js
const coincap = require("@davidtavarez/coincap");
coincap("grin").then(response => {
  console.log(response);
});
// {
//  data: {
//    id: 'grin',
//    rank: '77',
//    symbol: 'GRIN',
//    name: 'Grin',
//    supply: '35334120.0000000000000000',
//    maxSupply: null,
//    marketCapUsd: '34983194.8925302328409000',
//    volumeUsd24Hr: '1083096.5311511049404831',
//    priceUsd: '0.9900683784548825',
//    changePercent24Hr: '-2.4690904982478861',
//    vwap24Hr: '1.0039755213578751'
//  },
//  timestamp: 1583052868625
//}
```
