# Contract call strategy

Allows any contract method to be used to calculate voter scores.

## Examples

Can be used instead of the erc20-balance-of strategy, the space config will look like this:

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
```

You can call methods with multiple inputs in any contract:

```JSON
{
  "strategies": [
    ["contract-call", {
      "address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
      "decimals": 9,
      "symbol": "KOGE",
      "args": ["0x13748d548d95d78a3c83fe3f32604b4796cffa23", "%{address}"],
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
      "address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
      "decimals": 9,
      "symbol": "KOGE",
      "args": ["0x13748d548d95d78a3c83fe3f32604b4796cffa23", "%{address}"],
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

```JSON
{
"address": "0x6275518a63e891b1bC54FEEBBb5333776E32fAbD",
"decimals": 9,
"symbol": "KogeCoin (staked)",
"methodABI": {
"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"}

}
```
