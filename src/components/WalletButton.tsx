import { useAddress, useMetamask, useWalletConnect, useCoinbaseWallet } from '@thirdweb-dev/react';

export default function WalletButton() {
  const address = useAddress();
  const connectMetamask = useMetamask();
  const connectWalletConnect = useWalletConnect();
  const connectCoinbase = useCoinbaseWallet();

  return (
    <div>
      {address ? (
        <span>{address.slice(0,6)}...{address.slice(-4)}</span>
      ) : (
        <div>
          <button onClick={connectMetamask}>Connect MetaMask</button>
          <button onClick={connectWalletConnect}>Connect WalletConnect</button>
          <button onClick={connectCoinbase}>Connect Coinbase</button>
        </div>
      )}
    </div>
  );
}
