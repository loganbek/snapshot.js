# Snapshot.js

### Install
Snapshot.js was designed to work both in the browser and in Node.js.

#### Node.js
To install Snapshot.js on Node.js, open your terminal and run:
```
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

{
  "symbol": "KOGECOIN",
  "address": "0x13748d548d95d78a3c83fe3f32604b4796cffa23",
  "decimals": 18
}

{
  "symbol": "UNI-V2",
  "address": "0x3885503aef5e929fcb7035fbdca87239651c8154",
  "decimals": 18
}

{"version":"0.1.3","timestamp":"1623512349","space":"kogecoin.eth","type":"proposal","payload":{"name":"asdfasdfasdf","body":"sdafdsf","choices":["dfsvvc","scvzxcv"],"start":1623438000,"end":1625079600,"snapshot":15630000,"metadata":{"plugins":{},"network":"137","strategies":[{"name":"erc20-balance-of","params":{"symbol":"KOGECOIN","address":"0x13748d548d95d78a3c83fe3f32604b4796cffa23","decimals":18}},{"name":"masterchef-pool-balance","params":{"symbol":"UNI-V2","address":"0x3885503aef5e929fcb7035fbdca87239651c8154","decimals":18}}]},"type":"approval"}}
