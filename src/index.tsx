import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {
  ConnectionProvider,
  WalletProvider
} from '@solana/wallet-adapter-react';
import {
  PhantomWalletAdapter
} from '@solana/wallet-adapter-wallets';

const wallets = [new PhantomWalletAdapter()];
const network = 'https://api.devnet.solana.com';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ConnectionProvider endpoint={network}>
    <WalletProvider wallets={wallets} autoConnect>
      <App />
    </WalletProvider>
  </ConnectionProvider>
);
