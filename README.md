# Snapshot.js

## Install

Snapshot.js was designed to work both in the browser and in Node.js.

### Node.js

To install Snapshot.js on Node.js, open your terminal and run:

```sh
npm i @snapshot-labs/snapshot.js
```

#### Browser

You can create an index.html file and include Snapshot.js with:

```html
<script src="https://cdn.jsdelivr.net/npm/@snapshot-labs/snapshot.js"></script>
```
### Development

#### Install dependencies
```bash
npm install
```

#### Build package
```bash
npm run build
```

#### Test strategy
```bash
# Test default strategy (erc20-balance-of)
npm run test
# Test strategy with name
npm run test --strategy=erc20-received
npm run test --strategy=eth-balance
# Test with more addresses from addresses.json
npm run test --strategy=eth-balance --more=200 
```

### License

[MIT](LICENSE).

#### KOGECOIN STRATEGY NOTES

##### Final Strategy builds (improve accuracy)

- [ ] kogecoin works correctly but try w/ erc20-balance-of strat from snapshot.js 
- [ ] kogecoin-matic LP (wallet)  currently cannot weight
- [ ] kogecoin-matic LP (staked)  currently fixed integer weight, should be dynamic w/ supply
- [ ] kogecoin autocompounding vault (vkogekoge)  need to incorporate ratio in calc, use contract getRatio()
- [ ] kogecoin (staked)  need solution w/ masterchef (maybe modified)
  
```JSON
{
  "strategies": [
    ["pancake", {
      "address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
      "chefAddresses": [
          {
            "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
            "decimals": 9
          },
          {
            "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
            "decimals": 18
          }
      ]
    }]
  ]
}
```

{
  "symbol": "KOGECOIN",
  "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
  "decimals": 9
}

{
  "symbol": "UNI-V2",
  "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "decimals": 18
}
  
Strategies to look at

- erc20-balance-of-delegation
- contract-call:
- The graph balance

kogecoin - erc20-balance-of
{
  "symbol": "KOGECOIN",
  "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
  "decimals": 9
}

kogecoin lp - er20-balance-of - returns number of lp tokens - can calculate kogecoin voting power ?

{
  "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "symbol": "UNI-V2",
  "decimals": 18
}

Playground returns .01 - or 0.009249409476126031 in console UNI-V2 coins

kogecoin staking(staking contract 0x6275518a63e891b1bC54FEEBBb5333776E32fAbD) - master-chef-pool-balance - returns matic count - can convert to kogecoin voting power?

{
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "pid": "0",
  "weight": 1,
  "weightDecimals": 0
}

Returns 27.49

27.49 matic
Worth of kogecoin?

~542 KogeCoin

If dont include unipair address returns 0.003468528553547261 or # Kogecoin Matic LP staked.

kogecoin lp staking (staking contract 0x6275518a63e891b1bC54FEEBBb5333776E32fAbD)

0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec
0x16c686a511BdbC697860a4A3284fED9612D21c27

current wallet balance
.05 KogeCoin
X KogeCoin/Matic LP
Staked X KogeCoin
Staked X KogeCoin/Matic LP

kogecoin - erc20-balance-of
{
  "symbol": "KOGECOIN",
  "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
  "decimals": 9
}

KogeCoin/Matic LP - 4.728089 UNI-V2
{
  "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "symbol": "UNI-V2",
  "decimals": 18
}

<!-- - uniPairAddress: address of a uniswap pair (or a sushi pair or any other with the same interface)
 *    - if the uniPairAddress option is provided, converts staked LP token balance to base token balance
 *      (based on the pair total supply and base token reserve) -->

```json

{
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": null,
  "pid": "0",
  "weight": 1,
  "weightDecimals": 0
}

{
    "0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec": 0.007249409476126031,
    "0x16c686a511BdbC697860a4A3284fED9612D21c27": 0
}

{
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": null,
  "pid": "1",
  "weight": 1,
  "weightDecimals": 0
}

{
    "0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec": 0.000004962369676768,
    "0x16c686a511BdbC697860a4A3284fED9612D21c27": 0.000006043193008642
}


{
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "pid": "0",
  "weight": 1,
  "weightDecimals": 0
}

{
    "0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec": 67.40706699588073,
    "0x16c686a511BdbC697860a4A3284fED9612D21c27": 0
}

{
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "pid": "1",
  "weight": 1,
  "weightDecimals": 0
}

{
    "0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec": 0.04614152178350648,
    "0x16c686a511BdbC697860a4A3284fED9612D21c27": 0.05619132390632358
}

```
npm run test --strategy=<STRATEGY NAME> 