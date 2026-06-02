"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#0E0E0E] min-h-screen text-white font-sans selection:bg-[#e0b0b0] selection:text-white pt-36 pb-20">
      {/* Header Section */}
      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 mb-16 mt-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-[#e0b0b0] max-w-3xl leading-tight">
          We'd love to hear from you
        </h1>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Whether it's a stellar catering request, feedback on your recent
          voyage, or just sending some cosmic love, our comms channels are open.
        </p>
      </div>

      <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0 flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Left Side: Transmission Form */}
        <div className="w-full lg:w-3/5 bg-[#151515] rounded-sm border border-white/5 p-8 md:p-12">
          <h2 className="text-2xl font-serif text-gray-100 mb-10">
            Transmission Form
          </h2>

          <form
            className="flex flex-col gap-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <label className="text-[#c89f5a] text-[10px] font-bold tracking-widest uppercase">
                  Astronaut Name
                </label>
                <input
                  type="text"
                  placeholder="Commander Shepard"
                  className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3.5 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                />
              </div>
              <div className="flex flex-col gap-3 w-full md:w-1/2">
                <label className="text-[#c89f5a] text-[10px] font-bold tracking-widest uppercase">
                  Comms Frequency (Email)
                </label>
                <input
                  type="email"
                  placeholder="shepard@normandy.com"
                  className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3.5 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3 w-full">
              <label className="text-[#c89f5a] text-[10px] font-bold tracking-widest uppercase">
                Mission Type
              </label>
              <div className="relative">
                <select
                  className="w-full bg-[#0a0a0a] border border-white/5 text-gray-400 px-4 py-3.5 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm appearance-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select an inquiry type...
                  </option>
                  <option value="catering">Catering Request</option>
                  <option value="feedback">Feedback</option>
                  <option value="general">General Inquiry</option>
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
            </div>

            <div className="flex flex-col gap-3 w-full">
              <label className="text-[#c89f5a] text-[10px] font-bold tracking-widest uppercase">
                Message Log
              </label>
              <textarea
                placeholder="Detail your request here..."
                rows={6}
                className="w-full bg-[#0a0a0a] border border-white/5 text-gray-300 px-4 py-3.5 focus:outline-none focus:border-[#c89f5a]/50 transition-colors rounded-sm text-sm resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-[#b43223] hover:bg-[#9a2a1d] transition-colors text-white text-[10px] font-bold tracking-widest uppercase py-4 px-8 rounded-sm w-fit flex items-center gap-2 mt-4"
            >
              Send Transmission
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
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
              </svg>
            </button>
          </form>
        </div>

        {/* Right Side: Mission Control */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8">
          <div className="bg-[#151515] rounded-sm border border-white/5 p-8 md:p-10 flex flex-col gap-8">
            <h2 className="text-2xl font-serif text-[#c89f5a]">
              Mission Control
            </h2>

            <div className="flex flex-col gap-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-[#c89f5a] mt-0.5 shrink-0"
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
                  <h4 className="text-gray-100 text-sm font-bold mb-2">
                    Address
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Chocolate Mall no. 2 Akatampe Street,
                    <br />
                    off Ademola Adetokunbo Crescent,
                    <br />
                    Wuse 2, Abuja.
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-[#c89f5a] mt-0.5 shrink-0"
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
                  <h4 className="text-gray-100 text-sm font-bold mb-2">
                    Phone
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    +234 811 276 0422
                    <br />
                    +234 813 022 9302
                    <br />
                    +234 708 999 8575
                    <br />
                    +234 909 444 4744 (Lagos)
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-[#c89f5a] mt-0.5 shrink-0"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <div>
                  <h4 className="text-gray-100 text-sm font-bold mb-2">
                    Email
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    galaxypizza2013@gmail.com
                  </p>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="flex items-start gap-4">
                <svg
                  className="text-[#c89f5a] mt-0.5 shrink-0"
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
                  <h4 className="text-gray-100 text-sm font-bold mb-2">
                    Operating Hours
                  </h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Monday - Sunday: 10am - 10pm
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hotline Image */}
          <div className="relative w-full aspect-[16/9] bg-[#151515] rounded-sm overflow-hidden border border-white/5 group">
            <img
              src="https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop"
              alt="Contact Hero"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 bg-[#0a0a0a] border border-[#c89f5a]/30 text-[#c89f5a] px-3 py-1.5 rounded-sm text-[10px] font-bold tracking-widest uppercase z-10 pointer-events-none">
              Hotline Active
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
