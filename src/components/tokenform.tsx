import React, { useState } from 'react';
import { PublicKey, Connection, Keypair } from '@solana/web3.js';
import toast from 'react-hot-toast';

export const TokenForm = () => {
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState(9);

  const handleCreate = async () => {
    toast.loading('Creating token...');
    try {
      // This is just placeholder logic; real logic would use Metaplex or custom scripts.
      const token = Keypair.generate();
      console.log(token.publicKey.toBase58());

      toast.success('Token created successfully!');
    } catch (e) {
      console.error(e);
      toast.error('Failed to create token.');
    } finally {
      toast.dismiss();
    }
  };
  const [tier, setTier] = useState<'free' | 'premium'>('free');
  if (tier === 'premium') {
  const uri = await uploadMetadata(wallet, connection, metadata);
  // Use `uri` in token mint
}

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
      <input placeholder="Token Name" className="w-full p-2 bg-gray-800 rounded" onChange={e => setName(e.target.value)} />
      <input placeholder="Symbol" className="w-full p-2 bg-gray-800 rounded" onChange={e => setSymbol(e.target.value)} />
      <input type="number" placeholder="Decimals" className="w-full p-2 bg-gray-800 rounded" onChange={e => setDecimals(Number(e.target.value))} />
      <button onClick={handleCreate} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-4 py-2 rounded hover:scale-105 transition-all">
        Create Token
      </button>
    </div>
  );
};
