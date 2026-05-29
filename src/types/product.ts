export type Product = {
  title: string;
  description?: string;
  category?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  reviews: number;
  price: number;
  discountedPrice?: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
