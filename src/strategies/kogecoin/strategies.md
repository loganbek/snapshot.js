# KOGECOIN STRATEGY NOTES

Before Release:

- [ ] calculate weights
  - [ ] kogecoin-matic LP
    - [ ] returns 0.00009249409476126
  - [ ] kogecoin-matic LP (staking)
    - [ ] returns .01 or 0.009156915381364771 - [] matches kogefarm
- [x] Kogecoin (wallet)
- [x] KogeKoge auto compounding (vault)
- [x] Kogecoin-Matic LP (wallet)
- [x] Kogecoin-Matic LP (staking)
- [ ] Kogecoin (staking)
- [ ] ensure strategies can use together
  - [ ] symbol updates
- [ ] improve css for skin
- [ ] Testing
- [ ] Terms
- [ ] Logo Contest Trial
- [ ] finalize proposal threshold + weights

After Release:

- [ ] New strategies for 5 Koge Types
- [ ] subgraph
  - [ ] the-graph
  - [ ] the-graph-balance
  - [ ] the-graph-delegation
  - [ ] the-graph-indexing
- [ ] Automated Member additions
- [ ] ERC-Balance-of w/ minimum?

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
"symbol": "WIP **_Koge-Matic LP (wallet) Votes_** **_TODO: DECIDE WEIGHT_**",
"address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
"decimals": 18
} 
```

returns 0.00009249409476126 | TODO need to weight this? maybe need new strategy.

---

## KOGECOIN-MATIC LP (staked) - [x] TODO: DECIDE WEIGHT

KOGECOIN-MATIC LP STAKED - masterchef-pool-balance <https://polygonscan.com/address/0x6275518a63e891b1bC54FEEBBb5333776E32fAbD>
[<https://snapshot.org/#/playground/masterchef-pool-balance>](https://snapshot.org/#/playground/masterchef-pool-balance)

```JSON
{
"symbol": "WIP **_Koge-Matic (wallet) LP Votes_** **_TODO: DECIDE WEIGHT_**",
"chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"uniPairAddress": null,
"pid": "0",
"weight": 1,
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
