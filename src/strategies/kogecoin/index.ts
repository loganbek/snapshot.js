import { getAddress } from '@ethersproject/address';
import { formatUnits } from '@ethersproject/units';
import { multicall } from '../../utils';
import { strategy as erc20BalanceOfStrategy } from '../erc20-balance-of';

// import { contractCall } from '../contract-call';

// export const author = 'nerve-finance';
// export const version = '0.0.1';

const masterChefAbi = [
  {
    inputs: [
      { internalType: 'uint256', name: '', type: 'uint256' },
      { internalType: 'address', name: '', type: 'address' }
    ],
    name: 'userInfo',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'rewardDebt', type: 'uint256' }
    ],
    stateMutability: 'view',
    type: 'function'
  },
]


export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';
  const score = await strategy(
    space,
    network,
    provider,
    addresses,
    options,
    snapshot
  );

  const masterBalances = await multicall(
    network,
    provider,
    masterChefAbi,
    // kogeMasterChefABI,
    addresses.map((address: any) => [
      options.masterChefContractAddress,
      'userInfo',
      ['2', address]
    ]),
    { blockTag }
  );

  return Object.fromEntries(
    Object.entries(score).map((address, index) => [
      console.log("address[0]", address[0]),
      console.log("address[1]", address[1]),
      // address[1] = getAddress("0x13748d548d95d78a3c83fe3f32604b4796cffa23"),
      console.log("address[1]", address[1]),
      console.log("mb", parseFloat(formatUnits(masterBalances[index].amount.toString()))),
      address[0],
      address[1],
      parseFloat(formatUnits(masterBalances[index].amount.toString(), 9)),
    ])
  );
}
// import { formatUnits } from '@ethersproject/units';
// import { multicall } from '../../utils';

// export const author = 'bonustrack';
// export const version = '0.1.0';

// const abi = [
//   'function function(address account) external view returns (uint256)'
// ];

// export async function strategy(
//   space,
//   network,
//   provider,
//   addresses,
//   options,
//   snapshot
// ) {
//   const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';
//   const response = await multicall(
//     network,
//     provider,
//     abi,
//     addresses.map((address: any) => [options.address, 'balanceOf', [address]]),
//     { blockTag }
//   );
//   return Object.fromEntries(
//     response.map((value, i) => [
//       addresses[i],
//       parseFloat(formatUnits(value.toString(), options.decimals))
//     ])
//   );
// }
