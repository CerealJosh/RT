import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant | Fresh Dining & Reservations",
  description: "Welcome to our restaurant website featuring menu highlights, reservations, and chef specials.",
  // other metadata
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
