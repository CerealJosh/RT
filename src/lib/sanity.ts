import { createClient } from "next-sanity";
import type { Product } from "@/types/product";
import shopData from "@/components/Shop/shopData";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-29",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = config.projectId ? createClient(config) : null;

type SanityMenuItem = {
  _id: string;
  title: string;
  description?: string;
  category?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  reviews?: number;
  price?: number;
  discountedPrice?: number;
  mainImage?: {
    asset?: {
      url?: string;
    };
  };
};

const toProduct = (item: SanityMenuItem): Product => {
  const imageUrl = item.mainImage?.asset?.url;
  const fallbackImg = "/images/products/product-1-bg-1.png";
  const id = Number.parseInt(item._id.slice(0, 8), 16) || Date.now();

  return {
    title: item.title,
    description: item.description,
    category: item.category,
    allergens: item.allergens,
    isVegetarian: item.isVegetarian,
    isGlutenFree: item.isGlutenFree,
    reviews: item.reviews ?? 0,
    price: item.price ?? 0,
    discountedPrice: item.discountedPrice,
    id,
    imgs: {
      thumbnails: [imageUrl ?? fallbackImg],
      previews: [imageUrl ?? fallbackImg],
    },
  };
};

export const getMenuItems = async (): Promise<Product[]> => {
  if (!config.projectId) {
    return shopData;
  }

  try {
    const query = `*[_type == "menuItem"]{_id, title, description, category, allergens, isVegetarian, isGlutenFree, reviews, price, discountedPrice, mainImage{asset->{url}}}`;
    const data = await sanityClient.fetch<SanityMenuItem[]>(query);
    if (!Array.isArray(data) || data.length === 0) {
      return shopData;
    }
    return data.map(toProduct);
  } catch (error) {
    console.error("Sanity fetch failed", error);
    return shopData;
  }
};
