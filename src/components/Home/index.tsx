import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans selection:bg-[#c95d46] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-16 px-4 overflow-hidden">
        {/* Background Image / Placeholder */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-b from-transparent to-[#111111] absolute bottom-[-20%] z-10" />
          <img
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop"
            alt="Pizza Background"
            className="w-full h-full object-cover object-center opacity-60 mask-image:linear-gradient(to_bottom,rgba(0,0,0,1),rgba(0,0,0,0))"
            style={{
              maskImage: "radial-gradient(circle, black 30%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle, black 40%, transparent 80%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-2 tracking-tight">
            Everything we bake,
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#d67b67] mb-6 tracking-tight italic">
            we bake with love!
          </h1>

          <p className="text-[#a8825c] text-sm md:text-base tracking-[0.2em] font-medium uppercase mb-6">
            Galaxy Pizza: Taste & Style
          </p>

          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mb-10 px-4">
            Galaxy Pizza's Mission is to transport our customers from Nigeria to
            the heart of Italy through every slice, embodying the rich culinary
            heritage and culture of authentic Italian cuisine.
          </p>

          <button className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-xs md:text-sm font-bold tracking-widest uppercase py-3.5 px-8 rounded-sm">
            Explore Menu
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Galaxy Pizza
            </h2>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              We are a second-generation family business established in 1972.
              Galaxy Pizza Abuja is one of its kind Italian & American Pizzeria
              in Abuja. All Pizzas are prepared with a Wood Clay Oven and fresh
              ingredients.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10">
              Since opening in 2003, Galaxy Pizza became a leader in its market.
              In 2013, we officially launched our brand identity. Visit Galaxy
              Pizza and discover a magnificent array of ingredients, from our
              famous pizzas to a fun and lively atmosphere where you are always
              assured of a warm welcome.
            </p>

            <button className="border border-gray-400 hover:border-white text-gray-300 hover:text-white transition-all text-xs font-bold tracking-widest uppercase py-3.5 px-8 rounded-sm">
              Read Our Story
            </button>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=2070&auto=format&fit=crop"
                alt="Chef making pizza dough"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Feature 1 */}
          <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
            <div className="text-[#d67b67] mb-6">
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
            <div className="text-[#d67b67] mb-6">
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
              A peaceful and welcoming atmosphere designed for a perfect getaway
              and family dining.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
            <div className="text-[#d67b67] mb-6">
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
            <div className="text-[#d67b67] mb-6">
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
      </section>
    </div>
  );
};

export default Home;
