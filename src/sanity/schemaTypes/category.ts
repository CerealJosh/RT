export const category = {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      description: "Use this to determine the order of categories in the menu (e.g., 1 for Pizza, 2 for Burgers)",
    },
  ],
};
