# 🍕 Galaxy Pizza

A modern, full-stack restaurant website for **Galaxy Pizza** — an authentic Italian & American pizzeria with branches in Abuja and Lagos, Nigeria. Built with **Next.js 16**, **Sanity CMS**, **Redux Toolkit**, and **Tailwind CSS**.

---

## ✨ Features

- **Dynamic Menu** — Browse pizzas, burgers, subs, salads, and drinks with categorised listings
- **Cart & Checkout** — Add items to cart, manage quantities, and place orders via a sidebar cart modal
- **Wishlist** — Save favourite menu items for later
- **Quick View** — Preview item details in a modal without leaving the page
- **Image Slider** — Full-screen preview slider for menu item images
- **Order Management** — Orders are stored in Sanity with status tracking (Pending → Processing → Completed / Cancelled)
- **Sanity Studio** — Embedded CMS at `/studio` for managing menu items, categories, and orders
- **Responsive Design** — Fully responsive across mobile, tablet, and desktop
- **Dark Mode Support** — Class-based dark mode via Tailwind CSS
- **Scroll to Top** — Smooth scroll-to-top button for better UX
- **Preloader** — Branded loading animation on initial page load

---

## 🛠 Tech Stack

| Layer        | Technology                                                    |
| ------------ | ------------------------------------------------------------- |
| Framework    | [Next.js 16](https://nextjs.org/) (App Router)               |
| Language     | [TypeScript](https://www.typescriptlang.org/)                 |
| CMS          | [Sanity v5](https://www.sanity.io/)                           |
| State        | [Redux Toolkit](https://redux-toolkit.js.org/) + React Redux |
| Styling      | [Tailwind CSS 3](https://tailwindcss.com/)                    |
| Fonts        | Hanken Grotesk, EB Garamond                                   |
| Carousel     | [Swiper](https://swiperjs.com/)                               |
| Notifications| [React Hot Toast](https://react-hot-toast.com/)               |
| Email        | [Nodemailer](https://nodemailer.com/)                         |
| Auth         | [NextAuth.js](https://next-auth.js.org/)                      |

---

## 📁 Project Structure

```
RT/
├── public/                  # Static assets (images, SVGs)
├── scripts/
│   └── seed-sanity.ts       # Seed script to populate Sanity with menu data
├── src/
│   ├── app/
│   │   ├── (site)/          # Public-facing routes
│   │   │   ├── (pages)/     # Sub-pages (checkout, contact, error, shop)
│   │   │   ├── about/       # About page
│   │   │   ├── blogs/       # Blog page
│   │   │   ├── branches/    # Branch locations page
│   │   │   ├── menu/        # Full menu page
│   │   │   ├── layout.tsx   # Site layout (header, footer, modals)
│   │   │   └── page.tsx     # Home page
│   │   ├── api/
│   │   │   └── checkout/    # Checkout API route
│   │   ├── context/         # React context providers
│   │   │   ├── CartSidebarModalContext.tsx
│   │   │   ├── PreviewSliderContext.tsx
│   │   │   └── QuickViewModalContext.tsx
│   │   ├── css/             # Global styles
│   │   ├── fonts/           # Custom font files
│   │   └── studio/          # Embedded Sanity Studio route
│   ├── components/
│   │   ├── About/           # About section components
│   │   ├── Branches/        # Branch locations components
│   │   ├── Checkout/        # Checkout flow components
│   │   ├── Common/          # Shared components (modals, preloader, scroll-to-top)
│   │   ├── Contact/         # Contact form components
│   │   ├── Error/           # Error page components
│   │   ├── Footer/          # Site footer
│   │   ├── Header/          # Site header & navigation
│   │   ├── Home/            # Homepage sections
│   │   └── Menu/            # Menu display components
│   ├── lib/
│   │   └── sanity.ts        # Sanity client, GROQ queries & static fallback data
│   ├── redux/
│   │   ├── features/        # Redux slices
│   │   │   ├── cart-slice.ts
│   │   │   ├── product-details.ts
│   │   │   ├── quickView-slice.ts
│   │   │   └── wishlist-slice.ts
│   │   ├── provider.tsx     # Redux provider wrapper
│   │   └── store.ts         # Redux store configuration
│   ├── sanity/
│   │   ├── schemaTypes/     # Sanity document schemas
│   │   │   ├── category.ts
│   │   │   ├── menuItem.ts
│   │   │   └── order.ts
│   │   ├── lib/             # Sanity client library
│   │   ├── env.ts           # Sanity environment config
│   │   └── structure.ts     # Sanity Studio desk structure
│   └── types/
│       └── Menu.ts          # TypeScript type definitions
├── sanity.cli.ts            # Sanity CLI configuration
├── sanity.config.ts         # Sanity Studio configuration
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** or **pnpm**
- A [Sanity.io](https://www.sanity.io/) account and project

### 1. Clone the Repository

```bash
git clone <repository-url>
cd RT
```

### 2. Install Dependencies

```bash
npm install
# or
pnpm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Edit `.env` with your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=yourProjectId
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2026-05-29
```

> **Note:** If you want to use the checkout/order functionality, you'll also need a `SANITY_API_TOKEN` with write access.

### 4. Seed the Database (Optional)

Populate your Sanity dataset with the full Galaxy Pizza menu:

```bash
npm run seed
```

> This requires a `SANITY_API_TOKEN` with write permissions set in your `.env` file.

### 5. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.  
Access the Sanity Studio at [http://localhost:3000/studio](http://localhost:3000/studio).

---

## 📜 Available Scripts

| Command           | Description                                        |
| ----------------- | -------------------------------------------------- |
| `npm run dev`     | Start the Next.js development server               |
| `npm run build`   | Create a production build                          |
| `npm run start`   | Start the production server                        |
| `npm run lint`    | Run ESLint                                         |
| `npm run seed`    | Seed Sanity with menu data (`scripts/seed-sanity.ts`) |

---

## 📦 Sanity CMS Schemas

The CMS manages three document types:

### Category
- `title` — Category name (e.g., "PIZZA", "BURGERS & FRIES")
- `order` — Display order

### Menu Item
- `name` — Item name
- `description` — Ingredients / description
- `price` — Price string (e.g., "Reg ₦15,600 / Fam ₦18,600")
- `image` — Item photo (with hotspot cropping)
- `category` — Reference to a Category document
- `isSignature` — Boolean flag for featured/signature items

### Order
- `customerName`, `customerEmail`, `customerPhone` — Customer info
- `deliveryAddress` — Delivery location
- `totalAmount` — Order total
- `status` — Order status (Pending / Processing / Completed / Cancelled)
- `items` — Array of ordered items with name, quantity, and price

---

## 🌐 Deployment

This project is ready to deploy on [Vercel](https://vercel.com/):

1. Push your code to a Git repository
2. Import the project on Vercel
3. Set the environment variables in the Vercel dashboard
4. Deploy

> Remember to add your Sanity project's deployment URL to the CORS origins in your [Sanity project settings](https://www.sanity.io/manage).

---

## 📄 License

This project is private and proprietary.