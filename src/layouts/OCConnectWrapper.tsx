"use client";

import { OCConnect } from "@opencampus/ocid-connect-js";
import * as React from "react";

interface Options {
  redirectUri: string;
  referralCode: string;
}

export default function OCConnectWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const opts: Options = {
    redirectUri: "http://localhost:5173/redirect",
    referralCode: "PARTNER6",
  };

  return (
    <OCConnect opts={opts} sandboxMode={true}>
      {children}
    </OCConnect>
  );
}
