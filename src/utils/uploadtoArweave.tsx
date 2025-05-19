import { Metaplex, bundlrStorage } from '@metaplex-foundation/js';
import { Connection, PublicKey } from '@solana/web3.js';

export async function uploadMetadata(connection: Connection, wallet: any, data: any) {
  const metaplex = Metaplex.make(connection)
    .use(bundlrStorage({ address: 'https://devnet.bundlr.network', provider: wallet }));

  const { uri } = await metaplex.nfts().uploadMetadata({
    name: data.name,
    symbol: data.symbol,
    description: data.description,
    image: data.image, // base64 or URL
  });

  return uri;
}
