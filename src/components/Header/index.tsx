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
      className={`fixed left-0 top-0 w-full z-9999 transition-all ease-in-out duration-300 font-hanken-grotesk ${
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
                              isActive ? "w-full" : "w-0 group-hover:w-full"
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
