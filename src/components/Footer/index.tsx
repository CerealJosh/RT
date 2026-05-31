import React from "react";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full overflow-hidden py-16 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-white/10 font-hanken-grotesk">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col">
          <h3 className="text-xl font-serif text-[#c89f5a] mb-6">
            Galaxy Pizza
          </h3>
          <p className="text-gray-400 text-sm mb-6">Crafted to perfection.</p>
          <p className="text-gray-500 text-xs">
            © {year} Galaxy Pizza. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col">
          <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-6">
            Legal
          </h4>
          <Link
            href="/privacy"
            className="text-gray-400 hover:text-[#c89f5a] text-sm mb-3 transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="text-gray-400 hover:text-[#c89f5a] text-sm transition-colors"
          >
            Terms of Service
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-6">
            Locations
          </h4>
          <Link
            href="/branches"
            className="text-gray-400 hover:text-[#c89f5a] text-sm mb-3 transition-colors"
          >
            Abuja Branch
          </Link>
          <Link
            href="/branches"
            className="text-gray-400 hover:text-[#c89f5a] text-sm transition-colors"
          >
            Lagos Branch
          </Link>
        </div>

        <div className="flex flex-col">
          <h4 className="text-xs font-bold tracking-widest uppercase text-gray-300 mb-6">
            Social
          </h4>
          <a
            href="#"
            className="text-gray-400 hover:text-[#c89f5a] text-sm mb-3 transition-colors"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-[#c89f5a] text-sm transition-colors"
          >
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
