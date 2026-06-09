"use client";
import React, { useState, useEffect, useCallback } from "react";

const FEATURED_ITEMS = [
  {
    tag: "Signature Item",
    name: "Philly Cheesesteak Pizza",
    description:
      "Beef Steak, Cheddar Cheese, Red peppers, Green Peppers, Onions, Mushrooms, Mayonnaise, Philly Sauce, Tomato Sauce & Cheese.",
    price: "₦16,600 / ₦19,600",
    image:
      "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1000&auto=format&fit=crop",
  },
  {
    tag: "Most Popular",
    name: "Meat Craver Pizza",
    description:
      "Beef Pepperoni, Salami, Minced Meat, Ham, Bacon, Chicken, Tomato Sauce & Cheese.",
    price: "₦17,000 / ₦20,000",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1000&auto=format&fit=crop",
  },
  {
    tag: "New Entry",
    name: "Hawaiian Pizza",
    description:
      "Beef Pepperoni, Pineapple, Garlic Sauce, Tomato Sauce & Cheese.",
    price: "₦15,000 / ₦18,000",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=1000&auto=format&fit=crop",
  },
];

interface MenuProps {
  initialMenuData: Record<string, any[]>;
}

const Menu = ({ initialMenuData }: MenuProps) => {
  const categories = Object.keys(initialMenuData);
  const defaultCategory = categories.length > 0 ? categories[0] : "";
  const [activeCategory, setActiveCategory] = useState(defaultCategory);

  const [activeFeatured, setActiveFeatured] = useState(0);
  const [animatingFeatured, setAnimatingFeatured] = useState(false);

  const goToFeatured = useCallback(
    (index: number) => {
      if (animatingFeatured || index === activeFeatured) return;
      setAnimatingFeatured(true);
      setTimeout(() => {
        setActiveFeatured(index);
        setAnimatingFeatured(false);
      }, 600);
    },
    [activeFeatured, animatingFeatured],
  );

  const prevFeatured = () =>
    goToFeatured(
      (activeFeatured - 1 + FEATURED_ITEMS.length) % FEATURED_ITEMS.length,
    );
  const nextFeatured = () =>
    goToFeatured((activeFeatured + 1) % FEATURED_ITEMS.length);

  useEffect(() => {
    const t = setInterval(() => {
      goToFeatured((activeFeatured + 1) % FEATURED_ITEMS.length);
    }, 5000);
    return () => clearInterval(t);
  }, [activeFeatured, goToFeatured]);

  const currentFeatured = FEATURED_ITEMS[activeFeatured];

  if (!categories.length) {
    return (
      <div className="min-h-screen bg-[#111] flex items-center justify-center text-white">
        No menu items found.
      </div>
    );
  }

  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#e0b0b0] selection:text-white pt-36 pb-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-20 mt-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[#e0b0b0]">
          Our Menu
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A progression of rare and beautiful ingredients where texture, flavour
          and harmony is paramount. Delve into the Galaxy dining experience.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex flex-col gap-12">
        {/* Chef's Signature Header */}
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#c89f5a"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </svg>
          <h2 className="text-3xl font-serif text-gray-100">
            Chef's Signature
          </h2>
        </div>

        {/* Signature Pizza Carousel */}
        <div className="relative">
          <div
            className="flex flex-col lg:flex-row bg-[#151515] rounded-sm border border-white/5 overflow-hidden mb-12"
            style={{
              opacity: animatingFeatured ? 0 : 1,
              transform: animatingFeatured
                ? "scale(0.98) translateY(10px)"
                : "scale(1) translateY(0)",
              transition: "all 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
            }}
          >
            <div className="w-full lg:w-1/2 relative bg-[#111] p-10 flex items-center justify-center">
              <div className="absolute top-6 left-6 bg-[#1a1a1a] border border-[#c89f5a]/30 text-[#c89f5a] px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase z-10">
                {currentFeatured.tag}
              </div>
              <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative rounded-full overflow-hidden shadow-2xl">
                <img
                  src={currentFeatured.image}
                  alt={currentFeatured.name}
                  className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center border-l border-white/5 relative">
              <h2 className="text-3xl md:text-4xl font-serif text-[#e0b0b0] mb-6 max-w-sm">
                {currentFeatured.name}
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
                {currentFeatured.description}
              </p>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">
                    Reg / Fam
                  </p>
                  <p className="text-[#c89f5a] font-serif text-xl">
                    {currentFeatured.price}
                  </p>
                </div>
                <button className="border border-white/20 hover:border-[#c89f5a] hover:text-[#c89f5a] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm flex items-center gap-2">
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
                    <circle cx="9" cy="21" r="1" />
                    <circle cx="20" cy="21" r="1" />
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                  </svg>
                  Add To Order
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex items-center gap-8 border-b border-white/10 mb-8 overflow-x-auto pb-4 hide-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-[11px] font-bold tracking-[0.15em] uppercase whitespace-nowrap transition-colors pb-2 border-b-2 ${
                activeCategory === cat
                  ? "text-[#e0b0b0] border-[#e0b0b0]"
                  : "text-gray-500 border-transparent hover:text-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Header */}
        <div className="flex items-center gap-3 mb-4">
          {(() => {
            switch (activeCategory) {
              case "BURGERS & FRIES":
                return (
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 14C0 12.1833 0.758333 10.7292 2.275 9.6375C3.79167 8.54583 5.53333 8 7.5 8C9.46667 8 11.2083 8.54583 12.725 9.6375C14.2417 10.7292 15 12.1833 15 14H0ZM0 18V16H15V18H0ZM1 22C0.716667 22 0.479167 21.9042 0.2875 21.7125C0.0958333 21.5208 0 21.2833 0 21V20H15V21C15 21.2833 14.9042 21.5208 14.7125 21.7125C14.5208 21.9042 14.2833 22 14 22H1ZM17 22V14C17 12.1 16.35 10.4583 15.05 9.075C13.75 7.69167 12.1583 6.76667 10.275 6.3L10 4H15V0H17V4H22L20.375 20.2C20.325 20.7167 20.1125 21.1458 19.7375 21.4875C19.3625 21.8292 18.9167 22 18.4 22H17Z"
                      fill="#FFB955"
                    />
                  </svg>
                );
              case "SUBS & SIDES":
                return (
                  <svg
                    width="20"
                    height="18"
                    viewBox="0 0 20 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 18C1.45 18 0.979167 17.8042 0.5875 17.4125C0.195833 17.0208 0 16.55 0 16V13H20V16C20 16.55 19.8042 17.0208 19.4125 17.4125C19.0208 17.8042 18.55 18 18 18H2ZM10 10.5C9.4 10.5 8.925 10.6667 8.575 11C8.225 11.3333 7.58333 11.5 6.65 11.5C5.71667 11.5 5.08333 11.3333 4.75 11C4.41667 10.6667 3.95 10.5 3.35 10.5C2.75 10.5 2.275 10.6667 1.925 11C1.575 11.3333 0.933333 11.5 0 11.5V9.5C0.6 9.5 1.075 9.33333 1.425 9C1.775 8.66667 2.41667 8.5 3.35 8.5C4.28333 8.5 4.91667 8.66667 5.25 9C5.58333 9.33333 6.05 9.5 6.65 9.5C7.25 9.5 7.725 9.33333 8.075 9C8.425 8.66667 9.06667 8.5 10 8.5C10.9333 8.5 11.575 8.66667 11.925 9C12.275 9.33333 12.75 9.5 13.35 9.5C13.95 9.5 14.4167 9.33333 14.75 9C15.0833 8.66667 15.7167 8.5 16.65 8.5C17.5833 8.5 18.2417 8.66667 18.625 9C19.0083 9.33333 19.4667 9.5 20 9.5V11.5C19.0667 11.5 18.4417 11.3333 18.125 11C17.8083 10.6667 17.35 10.5 16.75 10.5C16.15 10.5 15.6667 10.6667 15.3 11C14.9333 11.3333 14.2833 11.5 13.35 11.5C12.4167 11.5 11.775 11.3333 11.425 11C11.075 10.6667 10.6 10.5 10 10.5ZM0 7V6C0 4.08333 0.904167 2.60417 2.7125 1.5625C4.52083 0.520833 6.95 0 10 0C13.05 0 15.4792 0.520833 17.2875 1.5625C19.0958 2.60417 20 4.08333 20 6V7H0Z"
                      fill="#FFB955"
                    />
                  </svg>
                );
              case "SALADS":
                return (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c89f5a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
                    <path d="M7 2v20" />
                    <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
                  </svg>
                );
              case "DRINKS":
                return (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#c89f5a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                    <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
                    <line x1="6" y1="2" x2="6" y2="4" />
                    <line x1="10" y1="2" x2="10" y2="4" />
                    <line x1="14" y1="2" x2="14" y2="4" />
                  </svg>
                );
              default:
                return (
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
                );
            }
          })()}
          <h2 className="text-3xl font-serif text-gray-100 capitalize">
            {activeCategory.toLowerCase()}
          </h2>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialMenuData[activeCategory]?.map((item, index) => (
            <div
              key={index}
              className="bg-[#181818] rounded-sm overflow-hidden flex flex-col border border-white/5 hover:border-white/10 transition-colors group"
            >
              {item.image && (
                <div className="w-full aspect-[4/3] relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-serif text-gray-100 mb-3">
                  {item.name}
                </h3>
                {item.description && (
                  <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-6">
                    {item.description}
                  </p>
                )}
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-[#c89f5a] font-serif text-sm">
                    {item.price}
                  </p>
                  <button className="w-6 h-6 rounded-full bg-[#e0b0b0] hover:bg-[#c89f5a] flex items-center justify-center text-[#111] transition-colors shrink-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-8 rounded-sm">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;
