export const menuItem = {
  name: "menuItem",
  title: "Menu Item",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "price",
      title: "Price",
      type: "string",
      description: "e.g., 'Reg ₦15,600 / Fam ₦18,600' or '₦10,800'",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "isSignature",
      title: "Signature Item?",
      type: "boolean",
      description: "Check if this item should be featured as a Chef's Signature",
      initialValue: false,
    },
  ],
};
