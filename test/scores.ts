const { JsonRpcProvider } = require('@ethersproject/providers');
const snapshot = require('../');
const networks = require('../src/networks.json');

const space = 'kogecoin';
const network = '137';
const strategies = [
  {
    name: 'Kogecoin Staked',
    strategy: {
      name: 'kogecoin',
      params: {
        symbol: 'KOGECOIN',
        address: '0x13748d548d95d78a3c83fe3f32604b4796cffa23',
        decimals: 9,
        masterChefContractAddress: '0x6275518a63e891b1bc54feebbb5333776e32fabd'
      }
    },
    network: '137',
    addresses: [
      '0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec',
      '0x16c686a511BdbC697860a4A3284fED9612D21c27',
      '0xa478c2975ab1ea89e8196811f51a7b7ade33eb11',
      '0xeF8305E140ac520225DAf050e2f71d5fBcC543e7',
      '0x1E1A51E25f2816335cA436D65e9Af7694BE232ad',
      '0x1F717Ce8ff07597ee7c408b5623dF40AaAf1787C',
      '0x1c7a9275F2BD5a260A9c31069F77d53473b8ae2e',
      '0x1d5E65a087eBc3d03a294412E46CE5D6882969f4',
      '0x1f254336E5c46639A851b9CfC165697150a6c327',
      '0x2ec3F80BeDA63Ede96BA20375032CDD3aAfb3030',
      '0x4AcBcA6BE2f8D2540bBF4CA77E45dA0A4a095Fa2',
      '0x4F3D348a6D09837Ae7961B1E0cEe2cc118cec777',
      '0x6D7f23A509E212Ba7773EC1b2505d1A134f54fbe',
      '0x07a1f6fc89223c5ebD4e4ddaE89Ac97629856A0f',
      '0x8d5F05270da470e015b67Ab5042BDbE2D2FEFB48',
      '0x8d07D225a769b7Af3A923481E1FdF49180e6A265',
      '0x8f60501dE5b9b01F9EAf1214dbE1924aA97F7fd0',
      '0x9B8e8dD9151260c21CB6D7cc59067cd8DF306D58',
      '0x17ea92D6FfbAA1c7F6B117c1E9D0c88ABdc8b84C',
      '0x38C0039247A31F3939baE65e953612125cB88268'
    ],
    snapshot: 11437846
  },
  {
    name: 'erc20-balance-of',
    params: {
      address: '0xa117000000f279D81A1D3cc75430fAA017FA5A2e',
      symbol: 'ANT',
      decimals: 18
    }
  },
  {
    name: 'balancer',
    params: {
      address: '0xa117000000f279D81A1D3cc75430fAA017FA5A2e',
      symbol: 'ANT BPT'
    }
  }
];
const addresses = [
  '0x66382ac45B6d8Cb4f47685e28b61FBb5486817Ec',
  '0x37Bf78fA8853CEE7df39280e70e38f3e163E44c4',
  '0xdD36C6C74abd4feF4EbCFB42D4622435D5f2c5f0',
  '0x98A729d4F94111ac21Df906fCdA107DcbC65d0B7',
  '0x1a3e98369a9e935d5E807514Fd479Ebf075863c6',
  '0x8fC0620C1f2cf352727E56dF8a895c6779095EF0',
  '0x148a1E9373Ad8D83a8b12592ec90b6F5151b176f',
  '0x4C632beE45E771Beb190B821bb7aa9f2c3D152ba',
  '0xf9c82b33C87Cfbbd1Ba7fa521dBC02dA31680F1a',
  '0x96646a92D0801b30C227404053A35c21A5290fec',
  '0xe3534F90E367F5bd62AF306d9F36804a82ba6cAc',
  '0x580a986b101A9Bed1283BfC7040F1153112b6c42'
];

(async () => {
  console.time('getScores');
  try {
    const scores = await snapshot.utils.getScoresDirect(
      space,
      strategies,
      network,
      new JsonRpcProvider(networks[network].rpc[0]),
      addresses,
      16616383
    );
    console.log(scores);
  } catch (e) {
    console.log('getScores failed');
    console.error(e);
  }
  console.timeEnd('getScores');
})();
