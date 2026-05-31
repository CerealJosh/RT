import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans selection:bg-[#c89f5a] selection:text-white">
      {/* Arch Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 flex justify-center overflow-hidden">
        <div className="relative w-full max-w-5xl aspect-[16/11] md:aspect-[16/9] lg:aspect-[21/9] rounded-t-[50%] overflow-hidden flex flex-col items-center justify-center text-center px-6 py-20 mt-10 border-t border-x border-white/5">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1622880833523-7cf1c0bd4296?fm=jpg&q=60&w=3000&auto=format&fit=crop"
              alt="Wood Pizza Oven"
              className="w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center mt-12 md:mt-24">
            <p className="text-[#c89f5a] text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase mb-4 md:mb-6">
              Everything we bake, we bake with love!
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 md:mb-8 text-white">
              Galaxy Pizza
            </h1>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl px-4">
              Established in 1972, we are a second-generation family business.
              Galaxy Pizza Abuja is one of its kind Italian & American Pizzeria.
              All Pizzas are prepared with a Wood Clay Oven and Fresh
              ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter I Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c89f5a]"></span>
              <p className="text-[#c89f5a] text-xs font-bold tracking-[0.2em] uppercase">
                Chapter I - 1972
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Our Mission
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              Galaxy Pizza's Mission is to transport our customers from Nigeria
              to the heart of Italy through every slice, embodying the rich
              culinary heritage and culture of authentic Italian cuisine.
            </p>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-sm overflow-hidden shadow-2xl group">
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop"
                alt="Chef making pizza dough"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-100 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Feature 1 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#c89f5a] mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">
                Hygienic Preparation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                We prioritize the highest standards of cleanliness and safety in
                every step of our culinary process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#c89f5a] mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2L2 22h20L12 2z" />
                  <path d="M12 22V10" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">
                Serene Environment
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                A peaceful and welcoming atmosphere designed for a perfect
                getaway and family dining.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#c89f5a] mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Crafted with premium, quality toppings and dough, promising a
                delectable experience every time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#c89f5a] mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                  <path d="M7 2v20" />
                  <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">Tasty</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Discover a magnificent array of ingredients and flavors from our
                world-famous pizza recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter II Section */}
      <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start lg:order-1 order-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c89f5a]"></span>
              <p className="text-[#c89f5a] text-xs font-bold tracking-[0.2em] uppercase">
                Chapter II - 2003
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Our Vision & Expansion
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              Since opening in Abuja in 2003, Galaxy Pizza became a leader in
              its market for a great getaway. Our vision is to meticulously
              craft each pizza... to evoke the essence of Italy and create a
              transcendent dining experience for pizza enthusiasts worldwide.
            </p>
          </div>

          <div className="w-full lg:w-1/2 lg:order-2 order-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/3] bg-[#1a1a1a] flex items-center justify-center rounded-sm">
              {/* Concentric circles */}
              <div className="absolute w-[280px] h-[280px] md:w-[340px] md:h-[340px] rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full border border-white/5 flex items-center justify-center">
                  <div className="flex flex-col items-center">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#c89f5a"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mb-4"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <span className="text-gray-200 tracking-[0.2em] text-sm font-bold uppercase mb-2">
                      Abuja
                    </span>
                    <span className="text-[#c89f5a] text-[10px] tracking-widest uppercase font-semibold">
                      Established 2003
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
