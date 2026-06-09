import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-03-16",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.SANITY_API_TOKEN || "", // Needed for creating orders
};

export const sanityClient = config.projectId ? createClient(config) : null;

// Fallback static data
const pizzas = [
  {
    name: "Hawaiian",
    description: "Beef Pepperoni, Pineapple, Garlic Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,600 / Fam ₦18,600",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Vegetable Supreme",
    description: "Tomatoes, Onion, Red Peppers, Green Peppers, Olives, Mushrooms, Sweet corn, Tomato Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,800",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "BBQ Chicken Special",
    description: "BBQ Chicken, Onions, Red Peppers, Green Peppers, Tomato Sauce, Garlic Sauce, BBQ Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Chicken Mexicana",
    description: "Chicken Breast, Red Peppers, Green peppers, Onions, Tartar Sauce, Chilli Sauce topped with Chilli flakes & Cheese.",
    price: "Reg ₦15,700 / Fam ₦18,700",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Tandoori Spicy Chicken Pizza",
    description: "Tandoori Chicken Cubes, Red peppers, Onions, Tomato Sauce, Chilli Sauce & Cheese.",
    price: "Reg ₦15,500 / Fam ₦18,000",
    image: "/tandoori-spicy-chicken-pizza.png",
  },
  {
    name: "Pepperoni Pizza",
    description: "Sliced Beef Pepperoni, Tomato Sauce & Mozzarella Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,000",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Arabica Pizza",
    description: "Sliced Beef Pepperoni, Red Peppers, Onions, Mushrooms, Chilli Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Beef Special",
    description: "Special Minced Beef, Green Peppers, Onions, Tomato Sauce, BBQ Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Philly Cheesesteak Pizza",
    description: "Beef Steak, Cheddar Cheese, Red peppers, Green Peppers, Onions, Mushrooms, Mayonnaise, Philly Sauce, Tomato Sauce &...",
    price: "Reg ₦16,600 / Fam ₦19,600",
    image: "https://images.unsplash.com/photo-1613564834361-9436948817d1?q=80&w=800&auto=format&fit=crop",
    isSignature: true,
  },
];

export const staticMenuData = {
  PIZZA: pizzas,
  "BURGERS & FRIES": [
    { name: "Classic Beef Burger", description: "Juicy beef burger, grilled onion, tomatoes, salad, burger sauce, with fries.", price: "₦10,800", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop" },
    { name: "Swizz Cheese Burger", description: "Beef burger, grilled onion & mushroom, emmental cheese, burger sauce, with fries.", price: "₦11,800", image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop" },
    { name: "Classic Chicken Burger", description: "Minced chicken, garlic sauce, onions, tomatoes, emmental cheese, salad, with fries.", price: "₦11,800", image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop" },
    { name: "Cheese Burger", description: "Beef burger, grilled onions, tomatoes, salad, cheddar cheese, burger sauce, with fries.", price: "₦11,500", image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop" },
    { name: "Double Cheese Burger", description: "Double beef burger, grilled onions, tomatoes, salad, double cheddar, burger sauce, with fries.", price: "₦12,500", image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop" },
    { name: "Mexican Chilli Cheese Burger", description: "Beef burger, grilled onions & pepper, salad, jalapenos, burger sauce, chilli sauce, cheddar, with fries.", price: "₦11,800", image: "/mexican-chilli-cheese-burger.png" },
    { name: "Tornado BBQ Chicken", description: "Minced chicken with bbq sauce, onion, tomatoes, salad, burger sauce, with fries.", price: "₦11,500", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=800&auto=format&fit=crop" },
  ],
  "SUBS & SIDES": [
    { name: "Philly Cheese Steak Sub", description: "Shredded beef, hp sauce, tabasco, green/red pepper, mushroom, mozzarella, with fries.", price: "₦11,800", image: "/philly-cheese-steak-sub.png" },
    { name: "Fajita Chicken Cheese Sub", description: "Shredded chicken, cumin, paprika, tabasco, green/red pepper, mozzarella, cheddar, with fries.", price: "₦11,800", image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=800&auto=format&fit=crop" },
    { name: "Chicken Wings", description: "Fried wings, ketchup, tabasco, spicy chili, garlic powder, with mayo sauce.", price: "₦7,000", image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop" },
    { name: "Fries", description: "", price: "₦4,800", image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop" },
  ],
  SALADS: [
    { name: "Shrimp Salad", description: "Grilled shrimps, lettuce, sweet corn, avocado, cucumber, with cocktail sauce.", price: "₦13,000", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop" },
    { name: "Mediterranean Salad", description: "Lettuce, sweet corn, tomatoes, cucumber, feta, olives, green pepper, with vinaigrette.", price: "₦11,300", image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800&auto=format&fit=crop" },
  ],
  DRINKS: [
    { name: "Shakes", description: "Oreo Milkshake, Chocolate Vanilla Shake, Vanilla Strawberry, Vanilla Caramel Shake, Strawberry Banana Delight, Peanut Butter Protein Shake.", price: "₦6,800", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=800&auto=format&fit=crop" },
    { name: "Other Drinks", description: "Chapman (₦2,800), Fruit Punch (₦4,000), Soft Drinks (₦1,000), Water (₦500).", price: "", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop" },
  ],
};

export async function getMenuData() {
  return staticMenuData;
}
