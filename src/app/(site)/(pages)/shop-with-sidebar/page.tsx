import React from "react";
import ShopWithSidebar from "@/components/ShopWithSidebar";
import { getMenuItems } from "@/lib/sanity";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Menu | Restaurant Dining",
  description: "Browse our seasonal restaurant menu with chef favorites, mains, desserts, and drinks.",
  // other metadata
};

const ShopWithSidebarPage = async () => {
  const products = await getMenuItems();

  return (
    <main>
      <ShopWithSidebar products={products} />
    </main>
  );
};

export default ShopWithSidebarPage;
