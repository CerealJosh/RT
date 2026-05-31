import Home from "@/components/Home";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galaxy Pizza | Authentic Italian & American Pizzeria",
  description:
    "Galaxy Pizza — established in 1972. Experience authentic wood-fired Italian and American pizza in Abuja and Lagos, Nigeria.",
};

export default function HomePage() {
  return (
    <>
      <Home />
    </>
  );
}
