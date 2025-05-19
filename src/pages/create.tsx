import { useWallet } from "@solana/wallet-adapter-react";
import { useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

export default function CreateProject() {
  const { connected, publicKey } = useWallet();
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const router = useRouter();

  const handleUpload = async () => {
    if (!connected || !publicKey) return alert("Connect wallet to continue.");

    const projectData = {
      name,
      desc,
      wallet: publicKey.toBase58(),
      image: image?.name || "",
    };

    console.log("Submitted project:", projectData);
    alert("Project uploaded! (Check dev console)");
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Upload a Project | SolPad</title>
      </Head>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <div className="max-w-xl mx-auto mt-12 bg-gray-800 p-8 rounded-2xl shadow-xl">
          <h1 className="text-3xl font-bold mb-6 text-center">Upload Your Project</h1>

          {!connected ? (
            <p className="text-center text-red-400">Please connect your wallet to upload a project.</p>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleUpload();
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-1">Project Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  className="w-full px-4 py-2 rounded bg-gray-700 focus:outline-none"
                  rows={4}
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Image (optional)</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setImage(e.target.files?.[0] || null)}
                  className="block w-full text-sm text-gray-400 file:bg-blue-500 file:text-white file:rounded file:px-4 file:py-2"
                />
              </div>
              <button
                type="submit"
                className="w-full mt-4 bg-blue-600 hover:bg-blue-700 transition text-white font-semibold py-2 px-4 rounded"
              >
                Submit Project
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
