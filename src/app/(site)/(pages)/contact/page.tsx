import Contact from "@/components/Contact";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact Us | Galaxy Pizza",
  description:
    "Get in touch with Galaxy Pizza. Send us a catering request, feedback, or general inquiry. We'd love to hear from you.",
};

const ContactPage = () => {
  return (
    <main>
      <Contact />
    </main>
  );
};

export default ContactPage;
