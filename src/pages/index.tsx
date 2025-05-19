import { useEffect, useState } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useWallet } from '@solana/wallet-adapter-react';
import toast from 'react-hot-toast';
import dynamic from 'next/dynamic';

const Home = () => {
  const { publicKey, connected } = useWallet();
  const [tokenName, setTokenName] = useState('');
  const [tokenSymbol, setTokenSymbol] = useState('');
  const [decimals, setDecimals] = useState(9);
  const [supply, setSupply] = useState('');
  const [isPremium, setIsPremium] = useState(false);
  const [logoUrl, setLogoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMint = async () => {
    if (!connected || !publicKey) {
      toast.error('Connect your wallet first.');
      return;
    }

    if (!tokenName || !tokenSymbol || !supply) {
      toast.error('Fill all required fields.');
      return;
    }

    setLoading(true);

    try {
      

      toast.success('Token minted successfully!');
    } catch (e) {
      console.error(e);
      toast.error('Minting failed.');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl space-y-6 bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center">Solana Token Launchpad</h1>

        <WalletMultiButton className="!bg-indigo-500" />

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Token Name"
            value={tokenName}
            onChange={(e) => setTokenName(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />
          <input
            type="text"
            placeholder="Token Symbol"
            value={tokenSymbol}
            onChange={(e) => setTokenSymbol(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />
          <input
            type="number"
            placeholder="Total Supply"
            value={supply}
            onChange={(e) => setSupply(e.target.value)}
            className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
          />
          <label className="flex items-center space-x-3">
            <input
              type="checkbox"
              checked={isPremium}
              onChange={() => setIsPremium(!isPremium)}
              className="form-checkbox h-5 w-5 text-indigo-500"
            />
            <span>Enable Premium (Add Metadata)</span>
          </label>

          {isPremium && (
            <>
              <input
                type="text"
                placeholder="Logo Image URL"
                value={logoUrl}
                onChange={(e) => setLogoUrl(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              />
              <textarea
                placeholder="Token Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              />
            </>
          )}
          const mintToken = async () => {
  try {
    const connection = new Connection(process.env.NEXT_PUBLIC_RPC!, 'confirmed');
    const fromWallet = anchorWallet?.publicKey;

    if (!fromWallet) throw new Error('Wallet not connected');
    // Minting logic goes here...

  } catch (error) {
    console.error('Mint error:', error);
  }
};

          <button
            onClick={handleMint}
            disabled={loading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 p-3 rounded-lg text-white font-semibold"
          >
            {loading ? 'Minting...' : 'Create Token'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Home), { ssr: false });
