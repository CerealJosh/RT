"use client";
import { useCallback, useEffect, useState } from "react";

const TESTIMONIALS = [
  {
    quote: "The best wood-fired pizza in Abuja. The crust is cosmic!",
    name: "Sarah J.",
    location: "Abuja",
  },
  {
    quote:
      "Galaxy Pizza truly transports you to Italy. Every bite is an experience.",
    name: "Emeka O.",
    location: "Lagos",
  },
  {
    quote:
      "The most authentic Italian pizzeria I've found in Nigeria. Incredible flavours!",
    name: "Amina B.",
    location: "Abuja",
  },
  {
    quote:
      "From the dough to the toppings, everything is fresh and perfectly balanced.",
    name: "Chidi N.",
    location: "Abuja",
  },
];

export const TestimonialsCarousel = () => {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState(null);

  const goTo = useCallback(
    (index) => {
      if (animating || index === active) return;
      setDirection(index > active ? "next" : "prev");
      setAnimating(true);
      setTimeout(() => {
        setActive(index);
        setAnimating(false);
      }, 350);
    },
    [active, animating],
  );

  const prev = () =>
    goTo((active - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => goTo((active + 1) % TESTIMONIALS.length);

  // Auto-advance every 5s
  useEffect(() => {
    const t = setTimeout(() => {
      goTo((active + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearTimeout(t);
  }, [active, goTo]);

  const { quote, name, location } = TESTIMONIALS[active];

  return (
    <section className="w-full py-24 px-6 md:px-12 lg:px-24 bg-[#0e0e0e]">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <p className="text-[#c89f5a] text-[10px] tracking-[0.3em] font-bold uppercase mb-4">
          Testimonials
        </p>
        <h2 className="text-4xl md:text-5xl font-serif mb-4 text-gray-100">
          What Our Customers Say
        </h2>
        <span className="w-12 h-[1px] bg-[#BD321C] mb-12 block"></span>

        <div className="relative w-full flex items-center justify-between gap-4">
          {/* Prev arrow */}
          <button
            onClick={prev}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#c89f5a] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path
                d="M8.5 1L1.5 8L8.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Quote content */}
          <div
            className="flex flex-col items-center flex-1 transition-all duration-350"
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "next" ? "-24px" : "24px"})`
                : "translateX(0)",
              transition: "opacity 0.35s ease, transform 0.35s ease",
            }}
          >
            <span
              className="text-[#BD321C] leading-none mb-4 select-none"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "4rem",
                lineHeight: 1,
              }}
            >
              <svg
                width="41"
                height="29"
                viewBox="0 0 41 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.34616 28.2691L10.2164 18.0527C10.0721 18.1329 9.90384 18.189 9.71152 18.221C9.5192 18.2531 9.32687 18.2691 9.13455 18.2691C6.5929 18.2691 4.43506 17.3747 2.66104 15.5858C0.887012 13.797 0 11.6466 0 9.13455C0 6.5929 0.887012 4.43506 2.66104 2.66104C4.43506 0.887012 6.5929 0 9.13455 0C11.6466 0 13.797 0.887012 15.5858 2.66104C17.3747 4.43506 18.2691 6.59011 18.2691 9.12618C18.2691 10.01 18.1625 10.8301 17.9494 11.5865C17.7363 12.3429 17.4246 13.064 17.0143 13.7499L8.65375 28.2691H4.34616ZM26.5577 28.2691L32.4279 18.0527C32.2836 18.1329 32.1154 18.189 31.923 18.221C31.7307 18.2531 31.5384 18.2691 31.3461 18.2691C28.8044 18.2691 26.6466 17.3747 24.8726 15.5858C23.0985 13.797 22.2115 11.6466 22.2115 9.13455C22.2115 6.57687 23.0985 4.41503 24.8726 2.64902C26.6466 0.883006 28.8044 0 31.3461 0C33.8581 0 36.0085 0.887012 37.7973 2.66104C39.5862 4.43506 40.4806 6.59011 40.4806 9.12618C40.4806 10.01 40.3741 10.8301 40.1609 11.5865C39.9478 12.3429 39.6361 13.064 39.2258 13.7499L30.8653 28.2691H26.5577ZM9.13455 13.75C10.4166 13.75 11.5064 13.3013 12.4038 12.4038C13.3013 11.5064 13.75 10.4166 13.75 9.13455C13.75 7.85248 13.3013 6.76272 12.4038 5.86528C11.5064 4.96783 10.4166 4.5191 9.13455 4.5191C7.85248 4.5191 6.76272 4.96783 5.86528 5.86528C4.96783 6.76272 4.5191 7.85248 4.5191 9.13455C4.5191 10.4166 4.96783 11.5064 5.86528 12.4038C6.76272 13.3013 7.85248 13.75 9.13455 13.75ZM31.3461 13.75C32.6281 13.75 33.7179 13.3013 34.6153 12.4038C35.5128 11.5064 35.9615 10.4166 35.9615 9.13455C35.9615 7.85248 35.5128 6.76272 34.6153 5.86528C33.7179 4.96783 32.6281 4.5191 31.3461 4.5191C30.064 4.5191 28.9742 4.96783 28.0768 5.86528C27.1793 6.76272 26.7306 7.85248 26.7306 9.13455C26.7306 10.4166 27.1793 11.5064 28.0768 12.4038C28.9742 13.3013 30.064 13.75 31.3461 13.75Z"
                  fill="#BD321C"
                />
              </svg>
            </span>
            <blockquote className="text-white text-xl md:text-2xl font-serif leading-relaxed mb-8 min-h-[80px]">
              "{quote}"
            </blockquote>
            <div className="flex flex-col items-center">
              <span className="text-gray-100 text-xs tracking-[0.2em] font-bold uppercase mb-1">
                {name}
              </span>
              <span className="text-gray-500 text-xs">{location}</span>
            </div>
          </div>

          {/* Next arrow */}
          <button
            onClick={next}
            className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#c89f5a] transition-colors"
            aria-label="Next testimonial"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none">
              <path
                d="M1.5 1L8.5 8L1.5 15"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center gap-2 mt-10">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="rounded-full transition-all duration-300"
              style={{
                width: i === active ? "20px" : "8px",
                height: "8px",
                backgroundColor: i === active ? "#BD321C" : "#4b5563",
              }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#c89f5a] selection:text-white">
      {/* Arch Hero Section */}
      <section className="w-full pt-32 pb-16 px-4 md:px-12 flex justify-center overflow-hidden">
        <div className="relative w-full h-full flex flex-col items-center justify-center text-center px-6 py-20 mt-10">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 z-0">
            <img
              src="images/Hero/about.png"
              alt="Wood Pizza Oven"
              className="w-full h-full object-cover opacity-20 grayscale hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center justify-center mt-12 md:mt-24">
            <p className="text-[#FFB4A7] text-[10px] md:text-xs tracking-[0.2em] font-bold uppercase mb-4 md:mb-6">
              Everything we bake, we bake with love!
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6 md:mb-8 text-white">
              Galaxy Pizza
            </h1>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl px-4 text-[#FFB4A7]">
              Established in 1972, we are a second-generation family business.
            </p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl px-4 text-[#FFB4A7]">
              Galaxy Pizza Abuja is one of its kind Italian
            </p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl px-4 text-[#FFB4A7]">
              & American Pizzeria. All Pizzas are prepared with a Wood Clay Oven
            </p>
            <p className="text-gray-300 text-xs md:text-sm leading-relaxed max-w-xl px-4 text-[#FFB4A7]">
              and Fresh ingredients.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter I Section */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c89f5a]"></span>
              <p className="text-[#c89f5a] text-xs font-bold tracking-[0.2em] uppercase">
                Chapter I : 1972
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Our Mission
            </h2>
            <p className="text-[#ffb4a7] text-sm md:text-base leading-relaxed">
              Galaxy Pizza's Mission is to 'transport our customers from Nigeria
              to the heart of Italy through every slice', embodying the rich
              culinary heritage and culture of authentic Italian cuisine.
            </p>
          </div>

          {/* Image right */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-[4/5] md:aspect-square rounded-sm overflow-hidden shadow-2xl group">
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
      <section className="w-full py-36 px-6 md:px-12 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <h2 className="text-4xl md:text-5xl font-serif mb-16 text-gray-100 text-center">
            Our Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {/* Feature 1 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#FFB4A7] mb-6">
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 22L17.2667 24.5333L25.2 22.0667C25.0889 21.8667 24.9278 21.6944 24.7167 21.55C24.5056 21.4056 24.2667 21.3333 24 21.3333H17.2667C16.6667 21.3333 16.1889 21.3111 15.8333 21.2667C15.4778 21.2222 15.1111 21.1333 14.7333 21L11.6333 19.9667L12.3667 17.3667L15.0667 18.2667C15.4444 18.3778 15.8889 18.4667 16.4 18.5333C16.9111 18.6 17.6667 18.6444 18.6667 18.6667C18.6667 18.4222 18.5944 18.1889 18.45 17.9667C18.3056 17.7444 18.1333 17.6 17.9333 17.5333L10.1333 14.6667H8V22ZM0 26.6667V12H10.1333C10.2889 12 10.4444 12.0167 10.6 12.05C10.7556 12.0833 10.9 12.1222 11.0333 12.1667L18.8667 15.0667C19.6 15.3333 20.1944 15.8 20.65 16.4667C21.1056 17.1333 21.3333 17.8667 21.3333 18.6667H24C25.1111 18.6667 26.0556 19.0333 26.8333 19.7667C27.6111 20.5 28 21.4667 28 22.6667V24L17.3333 27.3333L8 24.7333V26.6667H0ZM2.66667 24H5.33333V14.6667H2.66667V24ZM18.6667 12.8667L16 11.8667C15.9556 10.8 15.55 9.88889 14.7833 9.13333C14.0167 8.37778 13.0889 8 12 8C11.2667 8 10.5944 8.18333 9.98333 8.55C9.37222 8.91667 8.88889 9.4 8.53333 10H5.66667C6.04444 8.86667 6.67222 7.88889 7.55 7.06667C8.42778 6.24444 9.46667 5.71111 10.6667 5.46667V2.66667H8.66667V0H16C16.7556 0 17.4667 0.122222 18.1333 0.366667C18.8 0.611111 19.4111 0.944444 19.9667 1.36667L18.0667 3.26667C17.7556 3.08889 17.4278 2.94444 17.0833 2.83333C16.7389 2.72222 16.3778 2.66667 16 2.66667H13.3333V5.46667C14.8667 5.77778 16.1389 6.53889 17.15 7.75C18.1611 8.96111 18.6667 10.3778 18.6667 12V12.8667ZM24 10.6667C23.2667 10.6667 22.6389 10.4056 22.1167 9.88333C21.5944 9.36111 21.3333 8.73333 21.3333 8C21.3333 7.48889 21.5222 6.85556 21.9 6.1C22.2778 5.34444 22.9778 4.2 24 2.66667C25.0222 4.2 25.7222 5.34444 26.1 6.1C26.4778 6.85556 26.6667 7.48889 26.6667 8C26.6667 8.73333 26.4056 9.36111 25.8833 9.88333C25.3611 10.4056 24.7333 10.6667 24 10.6667Z"
                    fill="#FFB4A7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">
                Hygienic Preparation
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-[#FFB4A7]">
                We prioritize the highest standards of cleanliness and safety in
                every step of our culinary process.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#FFB4A7] mb-6">
                <svg
                  width="24"
                  height="27"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.6 26.6667H9.4V21.3333H0L5.33333 13.3333H2.66667L12 0L21.3333 13.3333H18.6667L24 21.3333H14.6V26.6667ZM5 18.6667H10.3333H7.8H12H16.2H13.6667H19H5ZM5 18.6667H19L13.6667 10.6667H16.2L12 4.66667L7.8 10.6667H10.3333L5 18.6667Z"
                    fill="#FFB4A7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">
                Serene Environment
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed text-[#FFB4A7]">
                A peaceful and welcoming atmosphere designed for a perfect
                getaway and family dining.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#FFB4A7] mb-6">
                <svg
                  width="30"
                  height="28"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1333 28L7.6 23.7333L2.8 22.6667L3.26667 17.7333L0 14L3.26667 10.2667L2.8 5.33333L7.6 4.26667L10.1333 0L14.6667 1.93333L19.2 0L21.7333 4.26667L26.5333 5.33333L26.0667 10.2667L29.3333 14L26.0667 17.7333L26.5333 22.6667L21.7333 23.7333L19.2 28L14.6667 26.0667L10.1333 28ZM11.2667 24.6L14.6667 23.1333L18.1333 24.6L20 21.4L23.6667 20.5333L23.3333 16.8L25.8 14L23.3333 11.1333L23.6667 7.4L20 6.6L18.0667 3.4L14.6667 4.86667L11.2 3.4L9.33333 6.6L5.66667 7.4L6 11.1333L3.53333 14L6 16.8L5.66667 20.6L9.33333 21.4L11.2667 24.6ZM13.2667 18.7333L20.8 11.2L18.9333 9.26667L13.2667 14.9333L10.4 12.1333L8.53333 14L13.2667 18.7333Z"
                    fill="#FFB4A7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">Quality</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-[#FFB4A7]">
                Crafted with premium, quality toppings and dough, promising a
                delectable experience every time.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#181818] p-8 flex flex-col items-start hover:bg-[#1c1c1c] transition-colors rounded-sm border border-white/5">
              <div className="text-[#FFB4A7] mb-6">
                <svg
                  width="20"
                  height="27"
                  viewBox="0 0 20 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 26.6667V14.4667C2.86667 14.1556 1.91667 13.5333 1.15 12.6C0.383333 11.6667 0 10.5778 0 9.33333V0H2.66667V9.33333H4V0H6.66667V9.33333H8V0H10.6667V9.33333C10.6667 10.5778 10.2833 11.6667 9.51667 12.6C8.75 13.5333 7.8 14.1556 6.66667 14.4667V26.6667H4ZM17.3333 26.6667V16H13.3333V6.66667C13.3333 4.82222 13.9833 3.25 15.2833 1.95C16.5833 0.65 18.1556 0 20 0V26.6667H17.3333Z"
                    fill="#FFB4A7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif mb-4 text-gray-100">Tasty</h3>
              <p className="text-gray-400 text-sm leading-relaxed text-[#FFB4A7]">
                Discover a magnificent array of ingredients and flavors from our
                world-famous pizza recipes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter II — Vision & Expansion */}
      <section className="w-full py-36 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Concentric circles map — left */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 bg-[#1a1a1a] flex items-center justify-center rounded-sm">
              <div className="absolute w-64 h-64 md:w-80 md:h-80 rounded-full border border-white/5 flex items-center justify-center">
                <div className="w-40 h-40 md:w-52 md:h-52 rounded-full border border-white/5 flex items-center justify-center">
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

          {/* Text — right */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c89f5a]"></span>
              <p className="text-[#c89f5a] text-xs font-bold tracking-[0.2em] uppercase">
                Chapter II : 2003
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Our Vision & Expansion
            </h2>
            <p className="text-[#ffb4a7] text-sm md:text-base leading-relaxed mb-6">
              Since opening in Abuja in 2003, Galaxy Pizza became a leader in
              its market for a great getaway. Our vision is to 'meticulously
              craft each pizza... to evoke the essence of Italy' and create a
              transcendent dining experience for pizza enthusiasts worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter III — Artisanal Process */}
      <section className="w-full py-36 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text — left */}
          <div className="w-full lg:w-1/2 flex flex-col items-start order-1">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-12 h-[1px] bg-[#c89f5a]"></span>
              <p className="text-[#c89f5a] text-xs font-bold tracking-[0.2em] uppercase">
                Chapter III : The Craft
              </p>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-100">
              Our Artisanal Process
            </h2>
            <p className="text-[#ffb4a7] text-sm md:text-base leading-relaxed mb-6">
              At the heart of Galaxy Pizza is our traditional wood-fired clay
              oven. This artisanal approach ensures that every pizza is baked to
              perfection, with a perfectly blistered crust, smoky flavor
              profile, and melted cheese that only genuine fire can produce. We
              carefully select the finest hardwood to maintain the ideal
              temperature, respecting the time-honored techniques of true
              Italian pizzaiolos.
            </p>
          </div>

          {/* Image — right */}
          <div className="w-full lg:w-1/2 order-2">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden shadow-2xl group">
              <img
                src="/images/section/ch3.png"
                alt="Chef making pizza at wood-fired oven"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />
    </div>
  );
};

export default About;
