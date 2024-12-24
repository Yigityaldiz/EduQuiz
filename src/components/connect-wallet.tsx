"use client";

import { useOCAuth } from "@opencampus/ocid-connect-js";
import ShimmerButton from "./ui/shimmer-button";

export default function ConnectWalletButton() {
  const { ocAuth } = useOCAuth();

  const handleLogin = async () => {
    try {
      await ocAuth.signInWithRedirect({ state: "opencampus" });
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <ShimmerButton
      className="hidden md:inline-block font-semibold border border-[#9ea3bf40] ml-4"
      shimmerColor="rgba(158, 163, 191, 0.25)"
      shimmerSize="0.2em"
      onClick={handleLogin}
    >
      Connect Wallet
    </ShimmerButton>
  );
}
