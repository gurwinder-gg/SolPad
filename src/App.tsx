import React from 'react';
import { WalletConnect } from './components/WalletConnect';
import { TokenForm } from './components/TokenForm';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <WalletConnect />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-4xl font-bold text-center mt-10">Solana Token Launchpad</h1>
        <TokenForm />
        <Toaster position="top-right" />
      </motion.div>
    </div>
  );
}

export default App;
