import { createSlice } from "@reduxjs/toolkit";

type Product = {
  title: string;
  reviews: number;
  price: number;
  discountedPrice?: number;
  img?: string;
  images?: string[];
  id: number;
  imgs: { thumbnails: string[]; previews: string[] };
  description?: string;
  category?: string;
  allergens?: string[];
  isVegetarian?: boolean;
  isGlutenFree?: boolean;
  status?: string;
};

type InitialState = {
  value: Product;
};

const initialState = {
  value: {
    title: "",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    img: "",
    images: [],
    id: 0,
    imgs: { thumbnails: [], previews: [] },
  },
} as InitialState;

export const productDetails = createSlice({
  name: "productDetails",
  initialState,
  reducers: {
    updateproductDetails: (_, action) => {
      return {
        value: {
          ...action.payload,
        },
      };
    },
  },
});

export const { updateproductDetails } = productDetails.actions;
export default productDetails.reducer;
