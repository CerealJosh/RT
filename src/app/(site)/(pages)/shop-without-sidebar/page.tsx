import React from "react";
import ShopWithoutSidebar from "@/components/ShopWithoutSidebar";
import { getMenuItems } from "@/lib/sanity";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Quick Menu | Restaurant Dining",
  description: "Fast access to our restaurant menu and specials without extra navigation.",
  // other metadata
};

const ShopWithoutSidebarPage = async () => {
  const products = await getMenuItems();

  return (
    <main>
      <ShopWithoutSidebar products={products} />
    </main>
  );
};

export default ShopWithoutSidebarPage;
