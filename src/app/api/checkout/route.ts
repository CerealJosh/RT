import { NextResponse } from "next/server";
import { sanityClient } from "@/lib/sanity";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { customerName, customerPhone, deliveryAddress, totalAmount, items } = body;

    // Check if Sanity is configured
    if (!sanityClient) {
      console.warn("Sanity is not configured. Simulating order success.");
      return NextResponse.json({ success: true, message: "Simulated order placed successfully. (Sanity not configured)" });
    }

    // Check if token is present
    if (!process.env.SANITY_API_TOKEN) {
      console.warn("SANITY_API_TOKEN is missing. Cannot write to Sanity.");
      return NextResponse.json({ success: true, message: "Simulated order placed successfully. (Missing API Token)" });
    }

    // Create the order document in Sanity
    const orderDoc = {
      _type: "order",
      customerName,
      customerPhone,
      deliveryAddress,
      totalAmount,
      status: "pending",
      items: items || [],
    };

    const result = await sanityClient.create(orderDoc);

    return NextResponse.json({ success: true, orderId: result._id, message: "Order placed successfully!" });
  } catch (error) {
    console.error("Failed to place order:", error);
    return NextResponse.json({ success: false, error: "Failed to place order" }, { status: 500 });
  }
}
