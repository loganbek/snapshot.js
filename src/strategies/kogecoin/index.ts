import { formatUnits } from '@ethersproject/units';
import { multicall } from '../../utils';

export const author = 'kogecoin';
export const version = '0.1.0';

// const kogeFarmABI = 
// [  
// {
//     inputs: [
//       { internalType: 'uint256', name: '', type: 'uint256' },
//       { internalType: 'address', name: '', type: 'address' }
//     ],
//     name: 'userInfo',
//     outputs: [
//       { internalType: 'uint256', name: 'amount', type: 'uint256' },
//       { internalType: 'uint256', name: 'rewardDebt', type: 'uint256' }
//     ],
//     stateMutability: 'view',
//     type: 'function'
//   }
// ] 
const abi = [
  'function balanceOf(address account) external view returns (uint256)'
];


export async function strategy(
    space,
    network,
    provider,
    addresses,
    options,
    snapshot
) {
    const blockTag = typeof snapshot === 'number' ? snapshot : 'latest';
    const response = await multicall(
        network,
        provider,
        // kogeFarmABI,
        abi,
        addresses.map((address: any) => [options.address, 'balanceOf', [address]]),
        { blockTag }
    );
    return Object.fromEntries(
        response.map((value, i) => [
            addresses[i],
            parseFloat(formatUnits(value.toString(), options.decimals))
        ])
    );
}



// - [x] X KogeCoin - 0x13748d548d95d78a3c83fe3f32604b4796cffa23 - erc20-balance-of 
// - [x] XX KogeCoin/Matic LP - 0x3885503aef5e929fcb7035fbdca87239651c8154 - erc20-balance-of
// - [ ] XStaked X KogeCoin - 
// - [ ] XStaked X KogeCoin/Matic LP - 