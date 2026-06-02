"use client";
import Link from "next/link";
import React from "react";

const Branches = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#c89f5a] selection:text-white pt-36 pb-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-20 mt-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-gray-100">
          Our Hubs
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          Step out of the void and into the warmth of our wood-fired ovens. Find
          your nearest location for a premium indulgence.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex mb-20 flex-col gap-12">
        {/* Abuja Branch */}
        <div className="flex flex-col lg:flex-row bg-[#181818] rounded-sm overflow-hidden border border-white/5">
          <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto relative">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop"
              alt="Abuja Branch Pizza Oven"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 border border-[#c89f5a] text-[#c89f5a] px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 w-fit">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              Flagship
            </div>

            <h2 className="text-3xl font-serif text-gray-100 mb-4">
              Abuja Branch
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">
              Our inaugural sanctuary located in the heart of the capital.
              Experience the perfect intersection of artisanal heritage and
              cinematic atmosphere.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Location
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Chocolate Mall, no. 2 Akatampe Street, off Adetokunbo
                    Ademola Crescent, Wuse 2, Abuja
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Hours
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    10am - 10pm daily
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Contact
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    +234 811 275 0422
                    <br />
                    +234 813 022 9302
                    <br />
                    +234 708 999 8575
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3 px-6 rounded-sm w-fit flex items-center gap-2">
              Get Directions
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: "rotate(-45deg)" }}
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Lagos Branch */}
        <div className="flex flex-col lg:flex-row bg-[#181818] rounded-sm overflow-hidden border border-white/5">
          <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
            <h2 className="text-3xl font-serif text-gray-100 mb-4">
              Lagos Branch
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-10 pb-10 border-b border-white/10">
              Bringing our authentic wood-fired experience to the vibrant city
              of Lagos. Step into our atmospheric space for premium indulgence.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Location
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Hours
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    10am - 10pm daily
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="text-gray-400 mt-1 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div>
                  <h4 className="text-gray-300 text-[10px] font-bold tracking-widest uppercase mb-1">
                    Contact
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                    +234 909 444 4744
                  </p>
                </div>
              </div>
            </div>

            <button className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3 px-6 rounded-sm w-fit flex items-center gap-2">
              Get Directions
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transform: "rotate(-45deg)" }}
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div className="w-full lg:w-1/2 aspect-[4/3] lg:aspect-auto relative order-1 lg:order-2">
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
              alt="Lagos Branch Pizza"
              className="absolute inset-0 w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
      {/* Ready to Order CTA */}
      <section className="relative w-full py-20 md:py-36 px-6 md:px-12 lg:px-24 bg-[#111111] overflow-hidden">
        {/* Combined Image and Overlay Layer */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/images/section/ready.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-6 text-white">
            Ready to Order?
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
            Experience the authentic taste of Italy, right here. Order now and
            enjoy hot, fresh pizza delivered straight to your door.
          </p>
          <Link
            href="/menu"
            className="inline-flex items-center justify-center px-6 py-3 text-white text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:brightness-110 active:scale-95 bg-[#c0392b] rounded-[4px]"
            style={{ letterSpacing: "0.1em" }}
          >
            Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Branches;
