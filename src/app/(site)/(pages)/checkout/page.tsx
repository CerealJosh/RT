import React from "react";
import { Metadata } from "next";
import Checkout from "@/components/Checkout";

export const metadata: Metadata = {
  title: "Checkout | Galaxy Pizza",
  description: "Securely checkout your Galaxy Pizza order.",
};

export default function CheckoutPage() {
  return (
    <main>
      <Checkout />
    </main>
  );
}
