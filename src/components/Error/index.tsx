import React from "react";
import Link from "next/link";

const Error = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans flex items-center justify-center pt-24 pb-20">
      <div className="text-center max-w-lg mx-auto px-6">
        <p className="text-[#c89f5a] text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
          404
        </p>
        <h1 className="text-5xl md:text-7xl font-serif text-gray-100 mb-6">
          Lost in Space
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-12">
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>
        <Link
          href="/"
          className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 rounded-sm inline-flex items-center gap-2"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5" />
            <path d="M12 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
