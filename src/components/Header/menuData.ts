import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Menu",
    newTab: false,
    path: "/shop-with-sidebar",
  },
  {
    id: 3,
    title: "Reservations",
    newTab: false,
    path: "/checkout",
  },
  {
    id: 4,
    title: "About",
    newTab: false,
    path: "/blogs/blog-grid",
  },
  {
    id: 5,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
  {
    id: 6,
    title: "More",
    newTab: false,
    path: "/",
    submenu: [
      {
        id: 61,
        title: "Full Menu",
        newTab: false,
        path: "/shop-with-sidebar",
      },
      {
        id: 62,
        title: "Quick Menu",
        newTab: false,
        path: "/shop-without-sidebar",
      },
      {
        id: 63,
        title: "Reservation",
        newTab: false,
        path: "/checkout",
      },
      {
        id: 64,
        title: "Cart",
        newTab: false,
        path: "/cart",
      },
      {
        id: 65,
        title: "Favorites",
        newTab: false,
        path: "/wishlist",
      },
      {
        id: 66,
        title: "Blog",
        newTab: false,
        path: "/blogs/blog-grid",
      },
      {
        id: 67,
        title: "Contact",
        newTab: false,
        path: "/contact",
      },
    ],
  },
];
