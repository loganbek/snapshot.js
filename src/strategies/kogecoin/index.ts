import { formatUnits } from '@ethersproject/units';
import { multicall } from '../../utils';

export const author = 'kogecoin';
export const version = '0.0.1';

const abi = [
  'function balanceOf(address account) public view override returns (uint256)'
];

export async function strategy(
  space,
  network,
  provider,
  addresses,
  options,
  snapshot
) {
  const result = await multicall(
    network,
    provider,
    abi,
    addresses.map((address: any) => [options.address, 'balanceOf', [address]]),
    snapshot
  );

  return Object.fromEntries(
    result.map((v, i) => [
      addresses[i],
      parseFloat(formatUnits(v.toString(), options.decimals))
    ])
  );
}
