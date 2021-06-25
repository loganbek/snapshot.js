# KOGECOIN STRATEGY NOTES

Before Release:

- [ ] calculate weights
  - [ ] kogecoin-matic LP - new strategy or subgraph?
    - [ ] returns 0.00009249409476126
  - [x] kogecoin-matic LP (staking)
    - [ ] returns .01 or 0.009156915381364771 - [] matches kogefarm
- [x] Kogecoin (wallet)
- [x] KogeKoge auto compounding (vault)
  - [ ] incorporate ratio from contract
- [ ] Kogecoin-Matic LP (wallet)
- [ ] Kogecoin-Matic LP (staking)
- [ ] Kogecoin (staking)
- [x] ensure strategies can use together
  - [ ] symbol updates
- [x] improve css for skin
- [ ] Testing
- [x] !Terms
- [ ] Logo Contest Trial
- [ ] finalize proposal threshold - up to 100

After Release:

- [ ] New strategies for 5 Koge Types
- [ ] subgraph
  - [ ] the-graph
  - [ ] the-graph-balance
  - [ ] the-graph-delegation
  - [ ] the-graph-indexing
- [ ] Automated Member additions
- [ ] ERC-Balance-of w/ minimum?
- [ ] vote.kogecoin.io

## KOGECOIN (wallet) - [x]

1 KOGECOIN = 1 vote

KOGECOIN - erc20-balance-of - <https://polygonscan.com/address/0x13748d548d95d78a3c83fe3f32604b4796cffa23>

```JSON
{
"symbol": "KOGECOIN",
"address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
"decimals": 9
} 
```

<https://snapshot.org/#/playground/erc20-balance-of>

returns 27.336724979 - [x]

---

## KOGECOIN-MATIC LP (wallet) - [x]

KOGECOIN-MATIC LP - erc20-balance-of - <https://polygonscan.com/token/0x3885503aef5e929fcb7035fbdca87239651c8154>

```JSON
{
"symbol": "WIP Koge-Matic LP (wallet)",
"address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
"decimals": 18,
"weight": 15000
} 
```

returns 0.00009249409476126 | TODO need to weight this? maybe need new strategy.

---

## KOGECOIN-MATIC LP (staked) - [x]

KOGECOIN-MATIC LP STAKED - masterchef-pool-balance <https://polygonscan.com/address/0x6275518a63e891b1bC54FEEBBb5333776E32fAbD>
[<https://snapshot.org/#/playground/masterchef-pool-balance>](https://snapshot.org/#/playground/masterchef-pool-balance)

```JSON
{
"symbol": "Koge-Matic (staked) LP",
"chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"uniPairAddress": null,
"pid": "0",
"weight": 15000,
"weightDecimals": 0
} 
```

returns .01 or 0.009156915381364771 - [] matches kogefarm KogeCoin-Matic LP farm.

---

## KOGECOIN (staked) - [ ]

KOGECOIN STAKED - <https://polygonscan.com/address/0x6275518a63e891b1bC54FEEBBb5333776E32fAbD>

```JSON

```

---

## vKOGEKOGE NEW VAULT (autocompounding) - [x] may need to switch symbol TBD

KOGECOIN-KOGECOIN LP VAULT - erc20-balance-of - <https://polygonscan.com/address/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657>
<https://polygonscan.com/token/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657#balance>
<https://polygonscan.com/token/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657?a=0x66382ac45b6d8cb4f47685e28b61fbb5486817ec#tokenAnalytics>

```JSON
{
"symbol": "vKogeKoge",
"address": "0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657",
"decimals": 9
} 
```

```JSON
{
  "strategies": [
    ["contract-call", {
      // contract address
      "address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
      // output decimals
      "decimals": 9,
      // strategy symbol
      "symbol": "KOGECOIN",
      // arguments are passed to the method; "%{address}" is replaced with the voter's address; default value ["%{addres{s}"]
      "args": ["0x6275518a63e891b1bC54FEEBBb5333776E32fAbD", "%{address}"], 
      // method ABI, output type should be uint256
     "methodABI": {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "account",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    }],
  ]
}
```

```JSON
{
  "strategies": [
    ["contract-call", {
      // token address
      "address": "0x6887DF2f4296e8B772cb19479472A16E836dB9e0",
      // token decimals
      "decimals": 18,
      // token symbol
      "symbol": "DAI",
      // ABI for balanceOf method
      "methodABI": {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "account",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    }],
  ]
}
You can call methods with multiple inputs in any contract:

{
  "strategies": [
    ["contract-call", {
      // contract address
      "address": "0x6887DF2f4296e8B772cb19479472A16E836dB9e0",
      // output decimals
      "decimals": 18,
      // strategy symbol
      "symbol": "mySCORE",
      // arguments are passed to the method; "%{address}" is replaced with the voter's address; default value ["%{address}"]
      "args": ["0x6887DF2f4296e8B772cb19479472A16E836dB9e0", "%{address}"], 
      // method ABI, output type should be uint256
      "methodABI": {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "_someAddress",
          "type": "address"
        }, {
          "internalType": "address",
          "name": "_voterAddress",
          "type": "address"
        }],
        "name": "totalScoresFor",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    }],
  ]
}
```

returns 3500.515950975 - [x]

---

## TRIALS

master-chef-pool-balance

```JSON
{
"chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"uniPairAddress": "0x3885503aef5e929fcb7035fbdca87239651c8154",
"pid": "0",
"weight": 1,
"weightDecimals": 0
} ```

returns 145.49866295618642

```JSON
{
"chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"uniPairAddress": "0x3885503aef5e929fcb7035fbdca87239651c8154",
"pid": "1",
"weight": 1,
"weightDecimals": 0
} ```

returns  0.03932647357965912

---

## SCRATCH
```JSON
[
{
"name": "kogekogeLP",
"strategy": {
"name": "masterchef-pool-balance",
"params": {
"chefAddress": "0xD38abbAeC03a9FF287eFc9a5F0d0580E07335D1D",
"uniPairAddress": null,
"pid": "0",
"weight": 1,
"weightDecimals": 0
}
},
"network": "1",
"addresses": [
"0xfCA5a27d4cfF104FC276897CA3f32cFeDc6f50BA",
"0x577bfa0898187c10bbbbb3d001c94aafb5cfc0e4"
],
"snapshot": "12288851"
},
{
"name": "Pool 1 balance",
"strategy": {
"name": "masterchef-pool-balance",
"params": {
"chefAddress": "0xD38abbAeC03a9FF287eFc9a5F0d0580E07335D1D",
"uniPairAddress": "0xe0b1433e0174b47e8879ee387f1069a0dbf94137",
"pid": "1",
"weight": 5,
"weightDecimals": 1
}
},
"network": "1",
"addresses": [
"0xfCA5a27d4cfF104FC276897CA3f32cFeDc6f50BA",
"0x577bfa0898187c10bbbbb3d001c94aafb5cfc0e4"
],
"snapshot": "12288851"
}
]

{
"chefAddress": "0xD38abbAeC03a9FF287eFc9a5F0d0580E07335D1D",
"uniPairAddress": null,
"pid": "0",
"weight": 1,
"weightDecimals": 0
}

{
"pid": "1",
"symbol": "WSB",
"weight": 1,
"decimals": 18,
"chefAddress": "0xA8183D13420C2cf5D0A866275EA83447868E4410",
"uniPairAddress": "0xE66783Ef2E2bC51958C032F04a37b6F060581fB9"
}

{
"chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"uniPairAddress": null,
"pid": "0",
"weight": 1,
"weightDecimals": 0
}
```

### Pagination seems to function same as erc20-balance-of

```JSON

{
  "symbol": "KOGECOIN",
  "strategy": {
    "name": "erc20-balance-of",
    "params": {
      "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
      "decimals": 9
    }
  }
}
```

kogecoin-matic lp wallet contract-call - 0x6275518a63e891b1bC54FEEBBb5333776E32fAbD

```JSON
{
      // contract address
      "address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
      // output decimals
      "decimals": 18,
      // strategy symbol
      "symbol": "KOGECOIN-MATIC LP (wallet)",
      // arguments are passed to the method; "%{address}" is replaced with the voter's address; default value ["%{addres{s}"]
      "args": ["0x3885503aef5e929fcb7035fbdca87239651c8154", "%{address}"], 
      // method ABI, output type should be uint256
     "methodABI": {
        "constant": true,
        "inputs": [{
          "internalType": "address",
          "name": "account",
          "type": "address"
        }],
        "name": "balanceOf",
        "outputs": [{
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
      }
    }
```

**KOGECOIN** - erc20-balance-of - <https://polygonscan.com/address/0x13748d548d95d78a3c83fe3f32604b4796cffa23>

**KOGECOIN-MATIC LP** - erc20-balance-of - <https://polygonscan.com/token/0x3885503aef5e929fcb7035fbdca87239651c8154>

**KOGECOIN-MATIC LP STAKED** - masterchef-pool-balance <https://polygonscan.com/address/0x6275518a63e891b1bC54FEEBBb5333776E32fAbD>
[<https://snapshot.org/#/playground/masterchef-pool-balance>](https://snapshot.org/#/playground/masterchef-pool-balance)

**KOGECOIN-KOGECOIN LP VAULT** - erc20-balance-of - <https://polygonscan.com/address/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657>
<https://polygonscan.com/token/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657#balance>
<https://polygonscan.com/token/0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657?a=0x66382ac45b6d8cb4f47685e28b61fbb5486817ec#tokenAnalytics>

call getRatio w/ contract_call
`balance().mul(1e18).div(totalSupply());`

**KOGECOIN STAKED** - <https://polygonscan.com/address/0x6275518a63e891b1bC54FEEBBb5333776E32fAbD>
