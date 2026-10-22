[Live site: DEE’S BOOKHUB](https://6ada31ad85cd72ff87f93d17--meek-entremet-13f18f.netlify.app/)

# DEE’S BOOKHUB

A responsive admin dashboard for a fictional online bookshop. It brings inventory, orders, readers, and shop activity together in one calm, story-inspired space.

## Screenshots

Add the screenshots to the `screenshots` folder using these filenames:

- Mobile (375px): `screenshots/mobile-375.png`
- Desktop (1440px): `screenshots/desktop-1440.png`

## Built with

- Vite
- Tailwind CSS
- JavaScript

## Run locally

```bash
npm install
npm run dev
```

## How I customized Tailwind

I customized Tailwind to give DEE’S BOOKHUB a calm, welcoming look inspired by the feeling of browsing a well-loved bookshop. I created a soft paper color for the page background, sage and forest greens for the navigation and accents, lavender for gentle highlights, and a deep ink color for readable text. I also added DM Sans for clear interface text and Playfair Display for headings, giving the dashboard a balance between modern usability and literary character.

To keep repeated styles consistent, I created reusable component classes in Tailwind’s component layer with `@apply`. The `card` class gives dashboard panels a shared surface, border, and subtle shadow. The `btn-primary` class provides a consistent style and interactive states for the main action button. The `badge` class keeps order status labels compact and easy to scan. Using these classes makes repeated interface patterns easier to maintain while keeping the page’s Tailwind utilities readable.