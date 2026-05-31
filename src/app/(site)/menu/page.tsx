import React from "react";
import Menu from "@/components/Menu";
import { Metadata } from "next";

import { getMenuData } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Our Menu | Galaxy Pizza",
  description:
    "Explore Galaxy Pizza's full menu — wood-fired pizzas, burgers, subs, salads, and more. Crafted with premium, fresh ingredients.",
};

const MenuPage = async () => {
  const menuData = await getMenuData();

  return (
    <main>
      <Menu initialMenuData={menuData} />
    </main>
  );
};

export default MenuPage;
