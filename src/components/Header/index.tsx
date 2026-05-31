"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { menuData } from "./menuData";
import Dropdown from "./Dropdown";
import { useAppSelector } from "@/redux/store";
import { useSelector } from "react-redux";
import { selectTotalPrice } from "@/redux/features/cart-slice";
import { useCartModalContext } from "@/app/context/CartSidebarModalContext";
import Image from "next/image";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathname = usePathname();
  const { openCartModal } = useCartModalContext();

  const product = useAppSelector((state) => state.cartReducer.items);
  const totalPrice = useSelector(selectTotalPrice);

  const handleOpenCartModal = () => {
    openCartModal();
  };

  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  return (
    <header
      className={`fixed left-0 top-0 w-full z-9999 transition-all ease-in-out duration-300 ${
        stickyMenu ? "shadow-lg" : ""
      }`}
      style={{ backgroundColor: "#1a0e05" }}
    >
      <div className="max-w-[1170px] mx-auto px-4 sm:px-7.5 xl:px-0">
        <div
          className={`flex items-center justify-between transition-all ease-out duration-200 ${
            stickyMenu ? "py-3" : "py-4"
          }`}
        >
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo/logo.svg"
              alt="Logo"
              width={72}
              height={72}
              className="rounded-full"
            />
          </Link>

          {/* Center Navigation */}
          <nav className="hidden xl:block">
            <ul className="flex items-center gap-8">
              {menuData.map((menuItem, i) =>
                menuItem.submenu ? (
                  <Dropdown
                    key={i}
                    menuItem={menuItem}
                    stickyMenu={stickyMenu}
                  />
                ) : (
                  <li key={i} className="relative group">
                    {(() => {
                      const isActive = menuItem.path === pathname;
                      return (
                        <>
                          <Link
                            href={menuItem.path}
                            className={`text-white text-sm font-medium tracking-wide transition-colors duration-200 py-2 inline-block ${
                              isActive ? "text-red-400" : "hover:text-red-400"
                            }`}
                          >
                            {menuItem.title}
                          </Link>
                          <span
                            className={`absolute bottom-0 left-0 h-[2px] transition-all duration-200 ${
                              isActive
                                ? "w-full"
                                : "w-0 group-hover:w-full"
                            }`}
                            style={{ backgroundColor: "#c0392b" }}
                          />
                        </>
                      );
                    })()}
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Right Side: Cart + Order Now CTA */}
          <div className="flex items-center gap-5">
            {/* Cart (hidden on mobile, visible on xl) */}
            <button
              onClick={handleOpenCartModal}
              className="hidden xl:flex items-center gap-2 text-white hover:text-red-400 transition-colors duration-200"
            >
              <span className="relative inline-block">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.29266 2.7512C1.43005 2.36044 1.8582 2.15503 2.24896 2.29242L2.55036 2.39838C3.16689 2.61511 3.69052 2.79919 4.10261 3.00139C4.54324 3.21759 4.92109 3.48393 5.20527 3.89979C5.48725 4.31243 5.60367 4.76515 5.6574 5.26153C5.66124 5.29706 5.6648 5.33321 5.66809 5.36996L17.1203 5.36996C17.9389 5.36995 18.7735 5.36993 19.4606 5.44674C19.8103 5.48584 20.1569 5.54814 20.4634 5.65583C20.7639 5.76141 21.0942 5.93432 21.3292 6.23974C21.711 6.73613 21.7777 7.31414 21.7416 7.90034C21.7071 8.45845 21.5686 9.15234 21.4039 9.97723L20.8836 12.5033C20.7339 13.2298 20.6079 13.841 20.4455 14.3231C20.2731 14.8346 20.0341 15.2842 19.6076 15.6318C19.1811 15.9793 18.6925 16.1226 18.1568 16.1882C17.6518 16.25 17.0278 16.25 16.2862 16.25L10.8804 16.25C9.53464 16.25 8.44479 16.25 7.58656 16.1283C6.69032 16.0012 5.93752 15.7285 5.34366 15.1022C4.79742 14.526 4.50529 13.9144 4.35897 13.0601C4.22191 12.2598 4.20828 11.2125 4.20828 9.75996V7.03832C4.20828 6.29837 4.20726 5.80316 4.16611 5.42295C4.12678 5.0596 4.05708 4.87818 3.96682 4.74609C3.87876 4.61723 3.74509 4.4968 3.44186 4.34802C3.11902 4.18961 2.68026 4.03406 2.01266 3.79934L1.75145 3.7075C1.36068 3.57012 1.15527 3.14197 1.29266 2.7512Z"
                    fill="currentColor"
                  />
                </svg>
                {product.length > 0 && (
                  <span
                    className="flex items-center justify-center text-xs font-bold absolute -right-2 -top-2.5 w-4.5 h-4.5 rounded-full text-white"
                    style={{
                      backgroundColor: "#c0392b",
                      width: "18px",
                      height: "18px",
                      fontSize: "10px",
                    }}
                  >
                    {product.length}
                  </span>
                )}
              </span>
            </button>

            {/* ORDER NOW Button */}
            <Link
              href="/menu"
              className="hidden xl:inline-flex items-center justify-center px-6 py-3 text-white text-sm font-bold tracking-widest uppercase transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                backgroundColor: "#c0392b",
                borderRadius: "4px",
                letterSpacing: "0.1em",
              }}
            >
              Order Now
            </Link>

            {/* Hamburger (mobile) */}
            <button
              id="Toggle"
              aria-label="Toggle menu"
              className="xl:hidden block"
              onClick={() => setNavigationOpen(!navigationOpen)}
            >
              <span className="block relative cursor-pointer w-6 h-5">
                <span
                  className={`block absolute w-full h-0.5 bg-white rounded transition-all duration-300 ${
                    navigationOpen ? "top-2 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`block absolute w-full h-0.5 bg-white rounded transition-all duration-300 top-2 ${
                    navigationOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block absolute w-full h-0.5 bg-white rounded transition-all duration-300 ${
                    navigationOpen ? "top-2 -rotate-45" : "top-4"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navigationOpen && (
          <div
            className="xl:hidden pb-5 border-t"
            style={{ borderColor: "rgba(255,255,255,0.1)" }}
          >
            <nav className="pt-4">
              <ul className="flex flex-col gap-3">
                {menuData.map((menuItem, i) => (
                  <li key={i}>
                    <Link
                      href={menuItem.path ?? "#"}
                      className="block text-white text-sm font-medium py-2 px-1 hover:text-red-400 transition-colors"
                      onClick={() => setNavigationOpen(false)}
                    >
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    href="/menu"
                    className="inline-flex items-center justify-center w-full py-3 text-white text-sm font-bold tracking-widest uppercase"
                    style={{ backgroundColor: "#c0392b", borderRadius: "4px" }}
                    onClick={() => setNavigationOpen(false)}
                  >
                    Order Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
