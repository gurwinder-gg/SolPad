import { Metaplex, bundlrStorage } from '@metaplex-foundation/js';
import { Connection, PublicKey, Keypair, Transaction, sendAndConfirmTransaction } from '@solana/web3.js';
import { createMint, getOrCreateAssociatedTokenAccount, mintTo } from '@solana/spl-token';

// Upload metadata to Arweave via Metaplex
export const uploadMetadata = async (wallet: any, connection: Connection, metadata: any) => {
  const metaplex = Metaplex.make(connection)
    .use(bundlrStorage({ address: 'https://devnet.bundlr.network', provider: wallet }));

  const { uri } = await metaplex.nfts().uploadMetadata({
    name: metadata.name,
    symbol: metadata.symbol,
    description: metadata.description,
    image: metadata.image,
  });

  return uri;
};

// Mint SPL token with optional metadata
export const mintToken = async (
  connection: Connection,
  wallet: any,
  name: string,
  symbol: string,
  decimals: number,
  isPremium: boolean,
  metadata?: { description: string; image: string; }
) => {
  const payer = wallet.publicKey;
  const mint = Keypair.generate();

  const tx = new Transaction();

  // Create mint instruction
  const mintIx = await createMint(
    connection,
    wallet,
    payer,
    null,
    decimals,
    mint
  );

  // Create token account for user
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    wallet,
    mint.publicKey,
    payer
  );

  // Mint 1 token to user
  await mintTo(
    connection,
    wallet,
    mint.publicKey,
    tokenAccount.address,
    payer,
    1 * Math.pow(10, decimals)
  );

  let uri = null;
  if (isPremium && metadata) {
    uri = await uploadMetadata(wallet, connection, {
      name,
      symbol,
      description: metadata.description,
      image: metadata.image
    });
  }

  return {
    mintAddress: mint.publicKey.toBase58(),
    tokenAccount: tokenAccount.address.toBase58(),
    metadataUri: uri,
  };
};
