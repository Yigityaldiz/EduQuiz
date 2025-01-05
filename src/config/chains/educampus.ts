// src/config/chains/openCampus.ts

import {defineChain } from "viem";

// Chain ID: 656476, RPC: https://rpc.open-campus-codex.gelato.digital
export const openCampusCodex = defineChain({
  id: 656476,
  name: "Open Campus Codex",
  network: "open-campus-codex",
  nativeCurrency: {
    name: "EDU",
    symbol: "EDU",
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: ["https://rpc.open-campus-codex.gelato.digital"],
    },
    public: {
      http: ["https://rpc.open-campus-codex.gelato.digital"],
    },
  },
  blockExplorers: {
    default: {
      name: "Codex Block Explorer",
      // Buraya block explorer'ın tam URL’sini ekleyin
      // Örnek olarak https://codex.explorer.xyz gibi
      url: "https://edu-chain-testnet.blockscout.com/", 
    },
  },
  testnet: true,  // Eğer test ağı ise true yapabilirsiniz
});
