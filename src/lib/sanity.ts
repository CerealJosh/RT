// Sanity CMS client — kept for future use if CMS integration is needed.
import { createClient } from "next-sanity";

const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2026-05-29",
  useCdn: process.env.NODE_ENV === "production",
};

export const sanityClient = config.projectId ? createClient(config) : null;
