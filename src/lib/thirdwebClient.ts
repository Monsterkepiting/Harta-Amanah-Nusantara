import { ThirdwebSDK } from '@thirdweb-dev/sdk';

const RPC_URL = process.env.NEXT_PUBLIC_THIRDWEB_RPC_URL!;
export const sdk = new ThirdwebSDK(RPC_URL);

// NFT Contract
export const nftContract = sdk.getContract(
  process.env.NEXT_PUBLIC_NFT_CONTRACT_ADDRESS!
);

// Damanusa Coin Contract
export const damanusaContract = sdk.getContract(
  process.env.NEXT_PUBLIC_DAMANUSA_CONTRACT!
);
