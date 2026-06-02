"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";

const Checkout = () => {
  const [orderMethod, setOrderMethod] = useState("delivery");
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePlaceOrder = async () => {
    if (!firstName || !lastName || !phone || (orderMethod === "delivery" && !address)) {
      toast.error("Please fill in all required delivery details.");
      return;
    }

    setIsSubmitting(true);
    try {
      // Mock cart items based on what's hardcoded in the UI
      const mockItems = [
        { itemName: "The Nebula Margherita", quantity: 1, price: 12500 },
        { itemName: "Supernova Pepperoni", quantity: 1, price: 14000 },
      ];
      
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customerName: `${firstName} ${lastName}`,
          customerPhone: phone,
          deliveryAddress: orderMethod === "delivery" ? address : "Pickup",
          totalAmount: 30000,
          items: mockItems,
        }),
      });
      
      const data = await response.json();
      if (data.success) {
        toast.success("Order placed successfully!");
        setFirstName("");
        setLastName("");
        setPhone("");
        setAddress("");
      } else {
        toast.error("Failed to place order. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#e0b0b0] selection:text-white pb-20 pt-36">
      <main className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 mt-12">
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-eb-garamond text-gray-100 mb-3">
            Checkout
          </h1>
          <p className="text-gray-400 text-sm">
            Complete your late-night gourmet indulgence.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Column (Forms) */}
          <div className="w-full lg:w-3/5 flex flex-col gap-6">
            {/* 1. Order Method */}
            <div className="bg-[#151515] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c] text-gray-400 flex items-center justify-center text-xs font-bold font-eb-garamond">
                  1
                </div>
                <h2 className="text-2xl font-eb-garamond text-gray-200 m-0">
                  Order Method
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Delivery Option */}
                <div
                  onClick={() => setOrderMethod("delivery")}
                  className={`p-5 rounded-sm border cursor-pointer transition-colors relative ${orderMethod === "delivery" ? "border-[#e0b0b0] bg-[#1a1515]" : "border-white/5 hover:border-white/10 bg-[#1c1c1c]"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 mb-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#e0b0b0"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect x="1" y="3" width="15" height="13"></rect>
                        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                        <circle cx="5.5" cy="18.5" r="2.5"></circle>
                        <circle cx="18.5" cy="18.5" r="2.5"></circle>
                      </svg>
                      <span className="text-sm font-bold text-gray-200">
                        Delivery
                      </span>
                    </div>
                    {orderMethod === "delivery" && (
                      <div className="w-4 h-4 rounded-full bg-[#e0b0b0] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">45-60 min</p>
                </div>

                {/* Pickup Option */}
                <div
                  onClick={() => setOrderMethod("pickup")}
                  className={`p-5 rounded-sm border cursor-pointer transition-colors relative ${orderMethod === "pickup" ? "border-[#e0b0b0] bg-[#1a1515]" : "border-white/5 hover:border-white/10 bg-[#1c1c1c]"}`}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3 mb-2">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-gray-400"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <path d="M16 10a4 4 0 0 1-8 0"></path>
                      </svg>
                      <span className="text-sm font-bold text-gray-200">
                        Store Pickup
                      </span>
                    </div>
                    {orderMethod === "pickup" && (
                      <div className="w-4 h-4 rounded-full bg-[#e0b0b0] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      </div>
                    )}
                  </div>
                  <p className="text-gray-500 text-xs">15-20 min</p>
                </div>
              </div>
            </div>

            {/* 2. Delivery Details */}
            <div className="bg-[#151515] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#c89f5a]/20 text-[#c89f5a] flex items-center justify-center text-xs font-bold font-eb-garamond">
                  2
                </div>
                <h2 className="text-2xl font-eb-garamond text-gray-200 m-0">
                  Delivery Details
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2 w-full">
                  <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    Street Address
                  </label>
                  <input
                    type="text"
                    placeholder="123 Galactic Boulevard, Suite 4B"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                  />
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+234 (000) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full md:w-1/2">
                    <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                      Delivery Instructions (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="Leave at the front desk..."
                      className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Payment Method */}
            <div className="bg-[#151515] border border-white/5 p-6 md:p-8 rounded-sm flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-[#1c1c1c] text-gray-400 flex items-center justify-center text-xs font-bold font-eb-garamond">
                  3
                </div>
                <h2 className="text-2xl font-eb-garamond text-gray-200 m-0">
                  Payment Method
                </h2>
              </div>

              <div className="flex flex-col gap-4 mt-2">
                {/* Credit Card Option */}
                <div className="border border-white/10 rounded-sm overflow-hidden bg-[#181818]">
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className="p-4 flex items-center justify-between cursor-pointer border-b border-white/5 bg-[#1c1c1c]"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "card" ? "border-[#c89f5a]" : "border-gray-500"}`}
                      >
                        {paymentMethod === "card" && (
                          <div className="w-2 h-2 rounded-full bg-[#c89f5a]"></div>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-200">
                        Credit / Debit Card
                      </span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-400"
                    >
                      <rect
                        x="1"
                        y="4"
                        width="22"
                        height="16"
                        rx="2"
                        ry="2"
                      ></rect>
                      <line x1="1" y1="10" x2="23" y2="10"></line>
                    </svg>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="p-6 flex flex-col gap-5">
                      <div className="flex flex-col gap-2 w-full">
                        <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                          Card Number
                        </label>
                        <div className="relative">
                          <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <rect
                              x="1"
                              y="4"
                              width="22"
                              height="16"
                              rx="2"
                              ry="2"
                            ></rect>
                            <line x1="1" y1="10" x2="23" y2="10"></line>
                          </svg>
                          <input
                            type="text"
                            placeholder="0000 0000 0000 0000"
                            className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 pl-12 pr-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                          />
                        </div>
                      </div>

                      <div className="flex gap-6">
                        <div className="flex flex-col gap-2 w-1/2">
                          <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            placeholder="MM/YY"
                            className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                          />
                        </div>
                        <div className="flex flex-col gap-2 w-1/2">
                          <label className="text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                            CVC
                          </label>
                          <input
                            type="text"
                            placeholder="123"
                            className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Digital Wallet Option */}
                <div className="border border-white/10 rounded-sm overflow-hidden bg-[#1c1c1c]">
                  <div
                    onClick={() => setPaymentMethod("wallet")}
                    className="p-4 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${paymentMethod === "wallet" ? "border-[#c89f5a]" : "border-gray-500"}`}
                      >
                        {paymentMethod === "wallet" && (
                          <div className="w-2 h-2 rounded-full bg-[#c89f5a]"></div>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-400">
                        Digital Wallet (Apple/Google Pay)
                      </span>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-gray-500"
                    >
                      <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"></path>
                      <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"></path>
                      <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (Your Order) */}
          <div className="w-full lg:w-2/5">
            <div className="bg-[#151515] border border-white/5 rounded-sm p-6 md:p-8 sticky top-6">
              <h2 className="text-2xl font-eb-garamond text-gray-200 mb-6">
                Your Order
              </h2>

              {/* Branch Selector */}
              <div className="relative mb-8">
                <select
                  className="w-full bg-[#1c1c1c] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm appearance-none"
                  defaultValue="abuja"
                >
                  <option value="abuja">Abuja Branch</option>
                  <option value="lagos">Lagos Branch</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-500">
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
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
              </div>

              {/* Order Items */}
              <div className="flex flex-col gap-6 mb-8 pb-8 border-b border-white/5">
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-md bg-[#111] border border-white/5 overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop"
                      alt="Pizza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-gray-200">
                        The Nebula Margherita
                      </h4>
                      <span className="text-sm text-gray-200">₦12,500</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      Thin Crust - Extra Basil
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1c1c1c] border border-white/5 px-2 py-1 rounded text-[10px] text-gray-400 font-bold uppercase">
                        QTY 1
                      </span>
                    </div>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-md bg-[#111] border border-white/5 overflow-hidden shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop"
                      alt="Pizza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-sm font-bold text-gray-200">
                        Supernova Pepperoni
                      </h4>
                      <span className="text-sm text-gray-200">₦14,000</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2">
                      Stuffed Crust - Spicy Honey
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="bg-[#1c1c1c] border border-white/5 px-2 py-1 rounded text-[10px] text-gray-400 font-bold uppercase">
                        QTY 1
                      </span>
                      <span className="bg-[#c89f5a]/10 border border-[#c89f5a]/30 px-2 py-1 rounded text-[10px] text-[#c89f5a] font-bold uppercase">
                        SPICY
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Promo Code */}
              <div className="flex gap-2 mb-8 border-b border-white/5 pb-8">
                <input
                  type="text"
                  placeholder="Promo Code"
                  className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                />
                <button className="bg-[#1c1c1c] hover:bg-[#252525] border border-white/5 transition-colors px-5 rounded-sm text-xs font-bold text-gray-300">
                  Apply
                </button>
              </div>

              {/* Totals */}
              <div className="flex flex-col gap-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-gray-200">₦26,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Delivery Fee</span>
                  <span className="text-gray-200">₦1,500</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Taxes (Estimated)</span>
                  <span className="text-gray-200">₦2,000</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8 pt-6 border-t border-white/5">
                <span className="text-lg font-eb-garamond text-gray-300">
                  Total
                </span>
                <span className="text-3xl font-eb-garamond text-[#e0b0b0]">
                  ₦30,000
                </span>
              </div>

              <button 
                onClick={handlePlaceOrder}
                disabled={isSubmitting}
                className="w-full bg-[#b43223] hover:bg-[#9a2a1d] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-white py-4 rounded-sm flex items-center justify-center gap-2 text-[11px] tracking-widest font-bold uppercase mb-4"
              >
                {isSubmitting ? "Processing..." : "Place Order"}
                {!isSubmitting && (
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
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-gray-500 text-[10px]">
                <svg
                  width="10"
                  height="10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="3"
                    y="11"
                    width="18"
                    height="11"
                    rx="2"
                    ry="2"
                  ></rect>
                  <path d="M7 11V7a5 5 0 0110 0v4"></path>
                </svg>
                Payments are secure and encrypted.
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
