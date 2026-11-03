# SHOP CARTIN

YOUR WORLD. ONE CART.

Stage 1 storefront for SHOP CARTIN (South Africa), built with React, Vite, TypeScript and Tailwind CSS.

All products are **demonstration products**, not real supplier inventory. There is **no payment functionality**: the checkout button is disabled until real payments are added in a later stage.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy on Netlify

1. Push this project to GitHub.
2. In Netlify choose Add new site, then Import an existing project, and pick the `shop-cartin` repository.
3. Netlify reads `netlify.toml`: build command `npm run build`, publish folder `dist`.
4. Click Deploy.

## Things to change before going live

- `src/config/site.ts`: replace the placeholder email with your real one.
- `src/data/products.ts`: replace demonstration products with real ones.
- `src/components/ProductImage.tsx`: swap the placeholder artwork for real product photos.

## Structure

- `src/components`: reusable parts (Header, Footer, ProductCard, SearchBar, etc.)
- `src/pages`: Home, Shop, ProductDetail, Cart, About, Contact, NotFound
- `src/context/CartContext.tsx`: cart state, saved in the browser (localStorage)
- `src/data/products.ts`: categories and demonstration products
