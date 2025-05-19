# 🚀 Solana Token Launchpad

A sleek, production-ready Web3 platform to **create and launch SPL tokens** on the Solana blockchain — in just a few clicks.
 
> 👨‍💻 Built by: Gurwider Singh — ECE Undergrad | Web3 Builder | IIM Bangalore Web-3 Intern

---

## ✨ Features

- 🔐 Connect Solana Wallet (Phantom, Solflare, Backpack)
- 🪙 Mint Real SPL Tokens (on Devnet/Mainnet)
- 🧠 Premium Plan with Arweave-hosted Metadata via Metaplex
- 🆓 Free Tier for basic token creation
- 🖼 Upload logo, name, symbol, description
- 🌀 Smooth animations with Framer Motion
- 📈 Live dashboard to see launched tokens (WIP)
- ☁️ Deployed on Vercel (see below)

---

## 🔧 Tech Stack

| Layer       | Tech                          |
|-------------|-------------------------------|
| Frontend    | React + TypeScript            |
| Styling     | TailwindCSS + Framer Motion   |
| Wallet      | @solana/wallet-adapter        |
| Mint Logic  | @solana/web3.js, @solana/spl-token |
| Metadata    | Metaplex JS SDK + Arweave     |
| Storage     | Bundlr + NFT.storage          |
| Notify      | react-hot-toast               |
| Hosting     | Vercel                        |

---

## 🚀 Live Demo

👉 [**Launchpad Demo**](https://your-vercel-link.vercel.app)

> ⚠️ Uses Solana Devnet — switch wallet network.

---

## 📦 Getting Started

### 🛠 Local Setup

```bash
git clone https://github.com/yourhandle/solana-token-launchpad
cd solana-token-launchpad
npm install
npm run dev
