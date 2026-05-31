import React from "react";
import About from "@/components/About";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Galaxy Pizza",
  description:
    "Learn about Galaxy Pizza's story, mission, and core values. Established in 1972, we bring authentic Italian and American pizza to Nigeria.",
};

const AboutPage = () => {
  return (
    <main>
      <About />
    </main>
  );
};

export default AboutPage;
