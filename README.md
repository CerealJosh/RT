# Restaurant eCommerce App (Next.js & Sanity)

A modern, responsive restaurant eCommerce and menu ordering application built with Next.js, Tailwind CSS, and Sanity CMS. This project provides a seamless ordering experience with state management powered by Redux Toolkit and a dynamic menu managed via Sanity.

## 🚀 Features

- **Dynamic Menu Management:** Fetch and display restaurant menus in real-time using Sanity CMS.
- **Shopping Cart & Checkout:** Seamless cart management and checkout flow using Redux Toolkit.
- **Multiple Branches:** Support for displaying and navigating multiple restaurant branches.
- **Authentication:** User authentication powered by Next-Auth.
- **Responsive Design:** Fully responsive and styled beautifully with Tailwind CSS.
- **Modern Stack:** Built on the App Router of Next.js for high performance and SEO optimization.

## 💻 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/) & React Redux
- **CMS:** [Sanity](https://www.sanity.io/)
- **Authentication:** [Next-Auth](https://next-auth.js.org/)
- **Other Tools:** Swiper (Carousels), Nodemailer, React Hot Toast

## 🛠️ Getting Started

First, install the dependencies if you haven't already:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🔐 Environment Variables

Create a `.env` or `.env.local` file in the root directory and copy the contents from `.env.example`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
# Add any other required variables (e.g., Next-Auth configuration)
```

## 📝 Sanity CMS Setup

This project uses Sanity to manage restaurant menu items dynamically.

1. Create or use an existing Sanity project.
2. Ensure you have your `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` configured in your local environment.
3. In your Sanity Studio, define documents for `menuItem` with fields such as:
   - `title`
   - `description`
   - `price`
   - `mainImage`
4. The frontend menu components will automatically fetch and display this data. (Falls back to local sample data if Sanity is unconfigured).

## 📂 Key Project Structure

- `/src/app` - Next.js App Router pages and layouts.
- `/src/components` - Reusable React components (`Menu`, `Header`, `Footer`, `Branches`, `Checkout`, etc.).
- `/src/lib` - Utility functions and Sanity helper configuration.
- `/public` - Static assets.