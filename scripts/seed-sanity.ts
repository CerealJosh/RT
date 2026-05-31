import { createClient } from "next-sanity";
import * as fs from "fs";
import * as path from "path";

// Load .env file manually so we don't need dotenv installed
const envPath = path.resolve(process.cwd(), ".env");
if (fs.existsSync(envPath)) {
  const envFile = fs.readFileSync(envPath, "utf-8");
  envFile.split("\n").forEach((line) => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let value = match[2];
      // remove quotes if any
      if (value.startsWith('"') && value.endsWith('"')) {
        value = value.slice(1, -1);
      }
      process.env[match[1]] = value;
    }
  });
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-03-16",
  useCdn: false,
  token: process.env.SANITY_API_TOKEN || "",
});

const pizzas = [
  {
    name: "Hawaiian",
    description: "Beef Pepperoni, Pineapple, Garlic Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,600 / Fam ₦18,600",
  },
  {
    name: "Vegetable Supreme",
    description: "Tomatoes, Onion, Red Peppers, Green Peppers, Olives, Mushrooms, Sweet corn, Tomato Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,800",
  },
  {
    name: "BBQ Chicken Special",
    description: "BBQ Chicken, Onions, Red Peppers, Green Peppers, Tomato Sauce, Garlic Sauce, BBQ Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
  },
  {
    name: "Chicken Mexicana",
    description: "Chicken Breast, Red Peppers, Green peppers, Onions, Tartar Sauce, Chilli Sauce topped with Chilli flakes & Cheese.",
    price: "Reg ₦15,700 / Fam ₦18,700",
  },
  {
    name: "Tandoori Spicy Chicken Pizza",
    description: "Tandoori Chicken Cubes, Red peppers, Onions, Tomato Sauce, Chilli Sauce & Cheese.",
    price: "Reg ₦15,500 / Fam ₦18,000",
  },
  {
    name: "Pepperoni Pizza",
    description: "Sliced Beef Pepperoni, Tomato Sauce & Mozzarella Cheese.",
    price: "Reg ₦14,800 / Fam ₦17,000",
  },
  {
    name: "Arabica Pizza",
    description: "Sliced Beef Pepperoni, Red Peppers, Onions, Mushrooms, Chilli Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
  },
  {
    name: "Beef Special",
    description: "Special Minced Beef, Green Peppers, Onions, Tomato Sauce, BBQ Sauce, Garlic Sauce & Cheese.",
    price: "Reg ₦15,800 / Fam ₦18,800",
  },
  {
    name: "Philly Cheesesteak Pizza",
    description: "Beef Steak, Cheddar Cheese, Red peppers, Green Peppers, Onions, Mushrooms, Mayonnaise, Philly Sauce, Tomato Sauce & Cheese.",
    price: "Reg ₦16,600 / Fam ₦19,600",
    isSignature: true,
  },
];

const staticMenuData = {
  PIZZA: pizzas,
  "BURGERS & FRIES": [
    { name: "Classic Beef Burger", description: "Juicy beef burger, grilled onion, tomatoes, salad, burger sauce, with fries.", price: "₦10,800" },
    { name: "Swizz Cheese Burger", description: "Beef burger, grilled onion & mushroom, emmental cheese, burger sauce, with fries.", price: "₦11,800" },
    { name: "Classic Chicken Burger", description: "Minced chicken, garlic sauce, onions, tomatoes, emmental cheese, salad, with fries.", price: "₦11,800" },
    { name: "Cheese Burger", description: "Beef burger, grilled onions, tomatoes, salad, cheddar cheese, burger sauce, with fries.", price: "₦11,500" },
    { name: "Double Cheese Burger", description: "Double beef burger, grilled onions, tomatoes, salad, double cheddar, burger sauce, with fries.", price: "₦12,500" },
    { name: "Mexican Chilli Cheese Burger", description: "Beef burger, grilled onions & pepper, salad, jalapenos, burger sauce, chilli sauce, cheddar, with fries.", price: "₦11,800" },
    { name: "Tornado BBQ Chicken", description: "Minced chicken with bbq sauce, onion, tomatoes, salad, burger sauce, with fries.", price: "₦11,500" },
  ],
  "SUBS & SIDES": [
    { name: "Philly Cheese Steak Sub", description: "Shredded beef, hp sauce, tabasco, green/red pepper, mushroom, mozzarella, with fries.", price: "₦11,800" },
    { name: "Fajita Chicken Cheese Sub", description: "Shredded chicken, cumin, paprika, tabasco, green/red pepper, mozzarella, cheddar, with fries.", price: "₦11,800" },
    { name: "Chicken Wings", description: "Fried wings, ketchup, tabasco, spicy chili, garlic powder, with mayo sauce.", price: "₦7,000" },
    { name: "Fries", description: "", price: "₦4,800" },
  ],
  SALADS: [
    { name: "Shrimp Salad", description: "Grilled shrimps, lettuce, sweet corn, avocado, cucumber, with cocktail sauce.", price: "₦13,000" },
    { name: "Mediterranean Salad", description: "Lettuce, sweet corn, tomatoes, cucumber, feta, olives, green pepper, with vinaigrette.", price: "₦11,300" },
  ],
  DRINKS: [
    { name: "Shakes", description: "Oreo Milkshake, Chocolate Vanilla Shake, Vanilla Strawberry, Vanilla Caramel Shake, Strawberry Banana Delight, Peanut Butter Protein Shake.", price: "₦6,800" },
    { name: "Other Drinks", description: "Chapman (₦2,800), Fruit Punch (₦4,000), Soft Drinks (₦1,000), Water (₦500).", price: "" },
  ],
};

async function seedData() {
  if (!process.env.SANITY_API_TOKEN) {
    console.error("Missing SANITY_API_TOKEN in .env");
    process.exit(1);
  }

  console.log("Starting to seed Sanity dataset...");

  try {
    let orderIndex = 1;
    for (const [categoryName, items] of Object.entries(staticMenuData)) {
      console.log(`\nCreating category: ${categoryName}`);
      
      // Create Category
      const catDoc = await client.create({
        _type: "category",
        title: categoryName,
        order: orderIndex++,
      });
      console.log(`✅ Category created with ID: ${catDoc._id}`);

      // Create Menu Items for this Category
      for (const item of items) {
        const itemDoc = {
          _type: "menuItem",
          name: item.name,
          description: item.description,
          price: item.price,
          category: {
            _type: "reference",
            _ref: catDoc._id,
          },
          isSignature: (item as any).isSignature || false,
        };

        const createdItem = await client.create(itemDoc);
        console.log(`  - Created menu item: ${createdItem.name}`);
      }
    }
    
    console.log("\n🎉 Seeding completed successfully!");
  } catch (err) {
    console.error("\n❌ Error during seeding:", err);
  }
}

seedData();
