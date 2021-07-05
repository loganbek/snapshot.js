# KogeCoin Strategy

// - [] X KogeCoin - 0x13748d548d95d78a3c83fe3f32604b4796cffa23 - erc20-balance-of 
// - [] XX KogeCoin/Matic LP - 0x3885503aef5e929fcb7035fbdca87239651c8154 - erc20-balance-of
// - [ ] XStaked X KogeCoin - 
// - [ ] XStaked X KogeCoin/Matic LP -

CURRENT STRATEGIES:

1) erc20-balance-of

```json
{
  "symbol": "KOGECOIN (wallet)",
  "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
  "decimals": 9
}
```

2) masterchef-pool-balance

```json
{
  "pid": "0",
  "symbol": "KogeCoin-Matic LP (staked) *UNI-V2*",
  "weight": 15000,
  "chefAddress": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
  "uniPairAddress": null,
  "weightDecimals": 0
}
```

3) erc20-balance-of-coeffy

```json
{
  "coeff": 1,
  "symbol": "Koge-Matic LP (wallet) **UNI-V2**",
  "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "decimals": 18
}
```

4) erc20-balance-of-coeff

```json
{
  "coeff": 1,
  "symbol": "vKogeKoge (auto-compounding)",
  "address": "0x992Ae1912CE6b608E0c0d2BF66259ab1aE62A657",
  "decimals": 9
}
```

5) ? Kogecoin Staked

REBUILD/UPDATE/FIX

1) erc20-balance-of - KogeCoin (wallet)
2) masterchef-pool-balance - KogeCoin-Matic LP (staked)
3) erc20-balance-of - KogeCoin-Matic LP (wallet)
4) erc20-balance-of - KogeCoin (auto-compound)
5) KogeCoin