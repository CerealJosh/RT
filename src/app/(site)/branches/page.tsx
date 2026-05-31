import React from "react";
import Branches from "@/components/Branches";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Branches | Galaxy Pizza",
  description:
    "Find your nearest Galaxy Pizza location. We have wood-fired pizzerias in Abuja and Lagos, Nigeria.",
};

const BranchesPage = () => {
  return (
    <main>
      <Branches />
    </main>
  );
};

export default BranchesPage;
