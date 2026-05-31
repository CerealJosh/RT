export const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerName",
      title: "Customer Name",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "customerEmail",
      title: "Customer Email",
      type: "string",
    },
    {
      name: "customerPhone",
      title: "Customer Phone",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "deliveryAddress",
      title: "Delivery Address",
      type: "text",
    },
    {
      name: "totalAmount",
      title: "Total Amount",
      type: "number",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "status",
      title: "Order Status",
      type: "string",
      options: {
        list: [
          { title: "Pending", value: "pending" },
          { title: "Processing", value: "processing" },
          { title: "Completed", value: "completed" },
          { title: "Cancelled", value: "cancelled" },
        ],
        layout: "radio",
      },
      initialValue: "pending",
    },
    {
      name: "items",
      title: "Items",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "itemName", title: "Item Name", type: "string" },
            { name: "quantity", title: "Quantity", type: "number" },
            { name: "price", title: "Price", type: "number" },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "customerName",
      subtitle: "status",
      amount: "totalAmount",
    },
    prepare({ title, subtitle, amount }: any) {
      return {
        title: `${title} - ₦${amount}`,
        subtitle: `Status: ${subtitle}`,
      };
    },
  },
};
