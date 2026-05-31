"use client";
import React, { useState } from "react";

const pizzas = [
  {
    name: "Hawaiian",
    description: "Beef Pepperoni, Pineapple, Garlic Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,600 / Fam ₦18,600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Vegetable Supreme",
    description: "Tomatoes, Onion, Red Peppers, Green Peppers, Olives, Mushrooms, Sweet corn, Tomato Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,800",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "BBQ Chicken Special",
    description: "BBQ Chicken, Onions, Red Peppers, Green Peppers, Tomato Sauce, Garlic Sauce, BBQ Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Chicken Mexicana",
    description: "Chicken Breast, Red Peppers, Green peppers, Onions, Tartar Sauce, Chilli Sauce topped with Chilli flakes & Cheese.",
    price: "Reg ₦15,700 / Fam ₦18,700",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Tandoori Spicy Chicken Pizza",
    description: "Tandoori Chicken Cubes, Red peppers, Onions, Tomato Sauce, Chilli Sauce & Cheese.",
    price: "Reg ₦15,500 / Fam ₦18,000",
    image: "https://images.unsplash.com/photo-1604381536197-5992414777e4?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Pepperoni Pizza",
    description: "Sliced Beef Pepperoni, Tomato Sauce & Mozzarella Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,000",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Arabica Pizza",
    description: "Sliced Beef Pepperoni, Red Peppers, Onions, Mushrooms, Chilli Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Beef Special",
    description: "Special Minced Beef, Green Peppers, Onions, Tomato Sauce, BBQ Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop"
  },
  {
    name: "Philly Cheesesteak Pizza",
    description: "Beef Steak, Cheddar Cheese, Red peppers, Green Peppers, Onions, Mushrooms, Mayonnaise, Philly Sauce, Tomato Sauce &...",
    price: "Reg ₦16,600 / Fam ₦19,600",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=800&auto=format&fit=crop"
  }
];

const categories = ["PIZZA", "BURGERS & FRIES", "SUBS & SIDES", "SALADS", "DRINKS"];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("PIZZA");

  return (
    <div className="bg-[#111111] min-h-screen text-white font-sans selection:bg-[#e0b0b0] selection:text-white pt-36 pb-20">
      
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-20 mt-10">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-[#e0b0b0]">Our Menu</h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
          A progression of rare and beautiful ingredients where texture, flavour and harmony is paramount. Delve into the Galaxy dining experience.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex flex-col gap-12">
        
        {/* Chef's Signature Header */}
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c89f5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z" />
            <line x1="6" y1="17" x2="18" y2="17" />
          </svg>
          <h2 className="text-3xl font-serif text-gray-100">Chef's Signature</h2>
        </div>

        {/* Signature Pizza Card */}
        <div className="flex flex-col lg:flex-row bg-[#151515] rounded-sm border border-white/5 overflow-hidden mb-12">
          <div className="w-full lg:w-1/2 relative bg-[#111] p-10 flex items-center justify-center">
            <div className="absolute top-6 left-6 bg-[#1a1a1a] border border-[#c89f5a]/30 text-[#c89f5a] px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase z-10">
              Signature Item
            </div>
            {/* The signature pizza image placeholder */}
            <div className="w-[280px] h-[280px] md:w-[380px] md:h-[380px] relative rounded-full overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=1000&auto=format&fit=crop" 
                alt="Philly Cheesesteak Pizza" 
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center border-l border-white/5">
            <h2 className="text-3xl md:text-4xl font-serif text-[#e0b0b0] mb-6">Philly Cheesesteak<br/>Pizza</h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-12 max-w-md">
              Beef Steak, Cheddar Cheese, Red peppers, Green Peppers, Onions, Mushrooms, Mayonnaise, Philly Sauce, Tomato Sauce & Cheese.
            </p>

            <div className="flex items-end justify-between">
              <div>
                <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-2 font-bold">Reg / Fam</p>
                <p className="text-[#c89f5a] font-serif text-xl">₦16,600 / ₦19,600</p>
              </div>
              <button className="border border-white/20 hover:border-[#c89f5a] hover:text-[#c89f5a] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-3.5 px-6 rounded-sm flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add To Order
              </button>
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#c89f5a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2L2 22h20L12 2z" />
            <path d="M12 22V10" />
          </svg>
          <h2 className="text-3xl font-serif text-gray-100 capitalize">{activeCategory.toLowerCase()}</h2>
        </div>

        {/* Pizza Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pizzas.map((pizza, index) => (
            <div key={index} className="bg-[#181818] rounded-sm overflow-hidden flex flex-col border border-white/5 hover:border-white/10 transition-colors group">
              <div className="w-full aspect-[4/3] bg-[#1c1c1c] p-8 flex items-center justify-center relative overflow-hidden">
                <div className="w-[180px] h-[180px] rounded-full overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                  <img 
                    src={pizza.image} 
                    alt={pizza.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-serif text-gray-100 mb-3">{pizza.name}</h3>
                <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-6">
                  {pizza.description}
                </p>
                <div className="flex items-center justify-between mt-auto">
                  <p className="text-[#c89f5a] font-serif text-sm">{pizza.price}</p>
                  <button className="w-6 h-6 rounded-full bg-[#e0b0b0] hover:bg-[#c89f5a] flex items-center justify-center text-[#111] transition-colors">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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
