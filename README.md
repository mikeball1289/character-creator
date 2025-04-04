This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install dependencies

```bash
npm i
```

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build the site

Create a static build in `dist/`

```bash
npm run build
```

Start the static side
```bash
npm run host
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Upload the contents of `dist/` to your favorite static hosting provider, set `index.html` as the index page and `404.html` as the error page.

## Working with storybook

Start the storybook server:

```bash
npm run storybook
```

Add stories by creating `[component].stories.tsx` files, see [`Dropdown.stories.tsx`](./src/components/Dropdown/Dropdown.stories.tsx) for an example.
