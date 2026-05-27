# LinkHub

LinkHub is a curated directory of useful tools and resources for developers, built with React, TypeScript, and Vite.

## Features

- Categorized resources (Tools, Mobile Apps, Websites, Learning Resources)
- Real-time search by title, description, and tags
- Light, Dark, and System theme support
- Responsive UI for desktop, tablet, and mobile
- Basic SEO support with dynamic page titles by category/search query

## Tech Stack

- React 19
- TypeScript
- Vite 6
- Tailwind CSS 4
- `lucide-react`
- `clsx` + `tailwind-merge`

## Requirements

- Node.js >= 18
- npm >= 9

## Run Locally

```bash
npm install
npm run dev
```

The app runs at: `http://localhost:3000`

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build production assets into `dist/`
- `npm run preview`: Preview the production build locally
- `npm run lint`: Run TypeScript checks (`tsc --noEmit`)
- `npm run clean`: Remove build artifacts (`dist`, `server.js`)

## Project Structure

```text
src/
├── components/
│   ├── DynamicIcon.tsx
│   ├── Header.tsx
│   ├── ResourceCard.tsx
│   ├── Sidebar.tsx
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── App.tsx
├── data.ts
├── index.css
├── main.tsx
├── types.ts
└── utils.ts
```

## Add Categories and Resources

Edit `src/data.ts`:

```ts
export const categories = [
    {
        id: 'tools',
        name: 'Useful Tools',
        icon: 'Wrench',
        description: '...'
    }
];

export const resources = [
    {
        id: 'unique-id',
        title: 'Tool Name',
        description: 'Short description',
        url: 'https://example.com',
        categoryId: 'tools',
        tags: ['Developer', 'Productivity'],
        iconName: 'Braces'
    }
];
```

Notes:

- `resource.categoryId` must match an existing `categories[].id`
- `icon` and `iconName` must be valid icon names from `lucide-react`

## Current Links

The following links are currently defined in `src/data.ts`:

| Name       | URL                            | Description                                                                                       |
|------------|--------------------------------|---------------------------------------------------------------------------------------------------|
| JSON Tools | https://json-tools.thanhlv.com | A fast and handy online JSON formatting, validation, and processing tool for developers.          |
| YAML Tools | https://yaml-tools.thanhlv.com | A website that supports parsing, converting, and manipulating YAML format easily and intuitively. |

## Deployment

Build for production:

```bash
npm run build
```

Then deploy the `dist/` folder to any static hosting platform (Vercel, Netlify, GitHub Pages, Cloudflare Pages, etc.).
