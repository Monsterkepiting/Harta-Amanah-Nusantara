import { useAddress, useMetamask } from '@thirdweb-dev/react';

export default function WalletButton() {
  const connectWithMetamask = useMetamask();
  const address = useAddress();

  return (
    <button onClick={connectWithMetamask}>
      {address ? `${address.slice(0,6)}...${address.slice(-4)}` : 'Connect Wallet'}
    </button>
  );
}

