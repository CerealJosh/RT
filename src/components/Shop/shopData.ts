import { Product } from "@/types/product";
const shopData: Product[] = [
  {
    title: "Grilled Salmon with Lemon Herb",
    description: "Fresh Atlantic salmon, roasted and finished with lemon butter.",
    category: "Mains",
    allergens: ["Fish", "Dairy"],
    isGlutenFree: true,
    reviews: 92,
    price: 24.0,
    discountedPrice: 19.0,
    id: 1,
    imgs: {
      thumbnails: [
        "/images/products/product-1-sm-1.png",
        "/images/products/product-1-sm-2.png",
      ],
      previews: [
        "/images/products/product-1-bg-1.png",
        "/images/products/product-1-bg-2.png",
      ],
    },
  },
  {
    title: "Truffle Mushroom Pasta",
    description: "Creamy fettuccine tossed with wild mushrooms and black truffle oil.",
    category: "Mains",
    allergens: ["Dairy", "Gluten"],
    isVegetarian: true,
    reviews: 76,
    price: 19.0,
    discountedPrice: 16.0,
    id: 2,
    imgs: {
      thumbnails: [
        "/images/products/product-2-sm-1.png",
        "/images/products/product-2-sm-2.png",
      ],
      previews: [
        "/images/products/product-2-bg-1.png",
        "/images/products/product-2-bg-2.png",
      ],
    },
  },
  {
    title: "Classic Margherita Pizza",
    description: "Stone-baked pizza with fresh mozzarella, basil, and tomato sauce.",
    category: "Pizza",
    allergens: ["Gluten", "Dairy"],
    isVegetarian: true,
    reviews: 120,
    price: 15.0,
    discountedPrice: 13.0,
    id: 3,
    imgs: {
      thumbnails: [
        "/images/products/product-3-sm-1.png",
        "/images/products/product-3-sm-2.png",
      ],
      previews: [
        "/images/products/product-3-bg-1.png",
        "/images/products/product-3-bg-2.png",
      ],
    },
  },
  {
    title: "Roasted Chicken Caesar Salad",
    description: "Crisp romaine, grilled chicken, parmesan, and house-made caesar dressing.",
    category: "Salads",
    allergens: ["Dairy", "Egg"],
    reviews: 88,
    price: 14.0,
    discountedPrice: 12.0,
    id: 4,
    imgs: {
      thumbnails: [
        "/images/products/product-4-sm-1.png",
        "/images/products/product-4-sm-2.png",
      ],
      previews: [
        "/images/products/product-4-bg-1.png",
        "/images/products/product-4-bg-2.png",
      ],
    },
  },
  {
    title: "BBQ Beef Burger",
    description: "Juicy beef patty, melted cheddar, bacon, and smoky barbecue sauce.",
    category: "Burgers",
    allergens: ["Gluten", "Dairy"],
    reviews: 101,
    price: 17.0,
    discountedPrice: 15.0,
    id: 5,
    imgs: {
      thumbnails: [
        "/images/products/product-5-sm-1.png",
        "/images/products/product-5-sm-2.png",
      ],
      previews: [
        "/images/products/product-5-bg-1.png",
        "/images/products/product-5-bg-2.png",
      ],
    },
  },
  {
    title: "Chocolate Lava Cake",
    description: "Warm chocolate cake with a molten center, served with vanilla ice cream.",
    category: "Desserts",
    allergens: ["Gluten", "Dairy", "Egg"],
    reviews: 134,
    price: 9.0,
    discountedPrice: 8.0,
    id: 6,
    imgs: {
      thumbnails: [
        "/images/products/product-6-sm-1.png",
        "/images/products/product-6-sm-2.png",
      ],
      previews: [
        "/images/products/product-6-bg-1.png",
        "/images/products/product-6-bg-2.png",
      ],
    },
  },
  {
    title: "Fresh Seafood Platter",
    description: "A chef selection of prawns, oysters, mussels, and calamari.",
    category: "Specials",
    allergens: ["Shellfish", "Fish"],
    reviews: 54,
    price: 32.0,
    discountedPrice: 28.0,
    id: 7,
    imgs: {
      thumbnails: [
        "/images/products/product-7-sm-1.png",
        "/images/products/product-7-sm-2.png",
      ],
      previews: [
        "/images/products/product-7-bg-1.png",
        "/images/products/product-7-bg-2.png",
      ],
    },
  },
  {
    title: "Cold Brew Coffee",
    description: "Slow-steeped cold brew served over ice with a citrus twist.",
    category: "Drinks",
    reviews: 68,
    price: 6.0,
    id: 8,
    imgs: {
      thumbnails: [
        "/images/products/product-8-sm-1.png",
        "/images/products/product-8-sm-2.png",
      ],
      previews: [
        "/images/products/product-8-bg-1.png",
        "/images/products/product-8-bg-2.png",
      ],
    },
  },
];

export default shopData;
