import { Metaplex, bundlrStorage } from '@metaplex-foundation/js';
import { Connection } from '@solana/web3.js';

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
