import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TestimonialsCarousel } from "../About";

const PIZZAS = [
  {
    name: "Hawaiian",
    description:
      "Beef Pepperoni, Pineapple, Garlic Sauce, Tomato Sauce & Cheese.",
    image: "/images/menu/hawaiian.jpg",
  },
  {
    name: "Vegetable Supreme",
    description:
      "Tomatoes, Onion, Red Peppers, Green Peppers, Olives, Mushrooms, Sweet corn, Tomato Sauce, Garlic Sauce & Cheese.",
    image: "/images/menu/vegetable.jpg",
  },
  {
    name: "BBQ Chicken Special",
    description:
      "BBQ Chicken, Onions, Red Peppers, Green Peppers, Tomato Sauce, Garlic Sauce, BBQ Sauce & Cheese.",
    image: "/images/menu/bbq.jpg",
  },
  {
    name: "Pepperoni Pizza",
    description: "Sliced Beef Pepperoni, Tomato Sauce & Mozzarella Cheese.",
    image: "/images/menu/pepperoni.jpg",
  },
];

const Home = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#c95d46] selection:text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center py-36 pb-16 px-4 overflow-hidden">
        {/* Background Image / Placeholder */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="w-[800px] h-[800px] absolute bottom-[-20%] z-10" />
          <img
            src="/images/Hero/home.png"
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

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 text-[#e0b0b0]">
              We are a second-generation family business established in 1972.
              Galaxy Pizza Abuja is one of its kind Italian & American Pizzeria
              in Abuja. All Pizzas are prepared with a Wood Clay Oven and fresh
              ingredients.
            </p>

            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-10 text-[#e0b0b0]">
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
            <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-2xl group">
              <img
                src="/images/Hero/g_pizza.png"
                alt="Chef making pizza dough"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-36 px-6 md:px-12 lg:px-24 bg-[#141414]">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
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

      {/* Taste of the Galaxy — Menu Preview */}
      <section className="w-full py-20 px-6 md:px-12 lg:px-24 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22L2 7C3.41667 5.8 4.97083 4.83333 6.6625 4.1C8.35417 3.36667 10.1333 3 12 3C13.8667 3 15.6458 3.3625 17.3375 4.0875C19.0292 4.8125 20.5833 5.78333 22 7L12 22ZM12 18.4L19.3 7.45C18.2167 6.7 17.0583 6.10417 15.825 5.6625C14.5917 5.22083 13.3167 5 12 5C10.6833 5 9.4125 5.22083 8.1875 5.6625C6.9625 6.10417 5.8 6.7 4.7 7.45L12 18.4ZM10.5625 9.5625C10.8542 9.27083 11 8.91667 11 8.5C11 8.08333 10.8542 7.72917 10.5625 7.4375C10.2708 7.14583 9.91667 7 9.5 7C9.08333 7 8.72917 7.14583 8.4375 7.4375C8.14583 7.72917 8 8.08333 8 8.5C8 8.91667 8.14583 9.27083 8.4375 9.5625C8.72917 9.85417 9.08333 10 9.5 10C9.91667 10 10.2708 9.85417 10.5625 9.5625ZM13.0625 14.5625C13.3542 14.2708 13.5 13.9167 13.5 13.5C13.5 13.0833 13.3542 12.7292 13.0625 12.4375C12.7708 12.1458 12.4167 12 12 12C11.5833 12 11.2292 12.1458 10.9375 12.4375C10.6458 12.7292 10.5 13.0833 10.5 13.5C10.5 13.9167 10.6458 14.2708 10.9375 14.5625C11.2292 14.8542 11.5833 15 12 15C12.4167 15 12.7708 14.8542 13.0625 14.5625Z"
                fill="#FFB955"
              />
            </svg>
            <h2 className="text-2xl md:text-3xl font-serif text-gray-100">
              Taste of the Galaxy
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {PIZZAS.map((pizza) => (
              <div
                key={pizza.name}
                className="bg-[#181818] rounded-sm overflow-hidden flex flex-col"
              >
                <div className="w-full aspect-square overflow-hidden">
                  <img
                    src={pizza.image}
                    alt={pizza.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="text-base font-serif text-gray-100 mb-2">
                    {pizza.name}
                  </h3>
                  <p className="text-[#ffb4a7] text-xs leading-relaxed mb-4 flex-1">
                    {pizza.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
                    <div>
                      <span className="text-[#E9C349] text-[10px] uppercase tracking-wider">
                        Reg:{" "}
                      </span>
                      <span className="text-[#E9C349] text-xs">₦15,500</span>
                      <span className="text-[#E9C349] mx-2 text-[10px]">/</span>
                      <span className="text-[#E9C349] text-[10px] uppercase tracking-wider">
                        Fam:{" "}
                      </span>
                      <span className="text-[#E9C349] text-xs">₦18,500</span>
                    </div>
                    <button className="w-6 h-6 rounded-full border border-[#ffb4a7] flex items-center justify-center text-[#ffb4a7] hover:border-[#c89f5a] hover:text-[#c89f5a] transition-colors flex-shrink-0">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d="M5 1v8M1 5h8"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button className="border border-gray-500 hover:border-white text-gray-300 hover:text-white transition-all text-xs font-bold tracking-widest uppercase py-3.5 px-10 rounded-sm">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

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

export default Home;
