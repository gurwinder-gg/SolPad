import {
  WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
require('@solana/wallet-adapter-react-ui/styles.css');

export const WalletConnect = () => {
  return (
    <div className="flex justify-end p-4">
      <WalletMultiButton />
    </div>
  );
};
