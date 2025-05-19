import { Metaplex, keypairIdentity, bundlrStorage } from "@metaplex-foundation/js";
import { Connection, Keypair, PublicKey } from "@solana/web3.js";

export const uploadMetadata = async (
  connection: Connection,
  walletKeypair: Keypair, // Replace with user's wallet if using signer adapter
  name: string,
  symbol: string,
  description: string,
  imageFile: File // From <input type="file">
) => {
  const metaplex = Metaplex.make(connection)
    .use(keypairIdentity(walletKeypair))
    .use(bundlrStorage({
      address: "https://devnet.bundlr.network",
      providerUrl: "https://api.devnet.solana.com",
      timeout: 60000,
    }));

  const imageBuffer = await imageFile.arrayBuffer();

  // Upload image
  const imageUri = await metaplex.storage().upload(Buffer.from(imageBuffer));
  
  // Upload metadata
  const { uri: metadataUri } = await metaplex.nfts().uploadMetadata({
    name,
    symbol,
    description,
    image: imageUri,
  });

  return metadataUri;
};
