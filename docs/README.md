# LinkHub

LinkHub is a curated directory of the best developer tools, applications, websites, and learning resources. Built with modern web technologies, it features a sleek responsive design, dark mode support, real-time search, and SEO optimization.

## Features

- **Categorized Directory:** Resources are organized into logical categories (Tools, Mobile Apps, Websites, Learning Resources).
- **Real-time Search:** Instantly filter directories by keyword across titles, descriptions, and tags.
- **Theme Support:** Built-in Light, Dark, and System theme toggling.
- **SEO Optimized:** Semantic HTML, structured data (JSON-LD), and Open Graph/Twitter meta tags configured for `https://link.thanhlv.com/`. Dynamic document titles based on active category or search query.
- **Responsive Design:** Optimized for mobile, tablet, and desktop viewing with an off-canvas/adaptive sidebar logic.

## Technology Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (v4)
- **Icons:** `lucide-react`
- **Utilities:** `clsx`, `tailwind-merge`

## Project Structure

```text
/src
├── components/          # Reusable UI components
│   ├── DynamicIcon.tsx  # Renders Lucide icons dynamically by name
│   ├── Header.tsx       # Top navigation bars and search input
│   ├── ResourceCard.tsx # Display card for each tool/link
│   ├── Sidebar.tsx      # Side navigation for categories
│   ├── ThemeProvider.tsx# Context provider for managing themes
│   └── ThemeToggle.tsx  # Button to switch between light/dark/system themes
├── data.ts              # Static data source for categories and resources
├── types.ts             # TypeScript interfaces for Category and Resource
├── utils.ts             # Utility functions like `cn` for className merging
├── App.tsx              # Main application layout and state management
├── main.tsx             # Application entry point
└── index.css            # Global CSS and Tailwind setup
```

## Adding New Resources

To add new tools or apps to the directory, edit the `src/data.ts` file:

```typescript
import { Category, Resource } from './types';

// Add new categories here
export const categories: Category[] = [
  // ...
];

// Add new resources here
export const resources: Resource[] = [
  {
    id: 'unique_id',
    title: 'Tool Name',
    description: 'A brief description of what the tool does.',
    url: 'https://example.com',
    categoryId: 'tools', // Must match an existing category ID
    tags: ['Tag 1', 'Tag 2'],
    iconName: 'Link' // A valid Lucide Icon name
  }
];
```

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the app in the development mode.
- `npm run build`: Builds the app for production to the `dist` folder.
- `npm run lint`: Lints the source code.
