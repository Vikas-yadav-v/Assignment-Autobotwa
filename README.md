# I have create this entire application using Vercel V0.

# Velocity - Modern Next.js Landing Page

A professional, modern landing page application built with Next.js 16, Tailwind CSS, and TypeScript. Features a sophisticated emerald green color palette with a complete multi-page website structure.

## Features

- **Modern Landing Page** - Hero section, features showcase, testimonials, and pricing
- **Multi-Page Architecture** - 10+ dedicated pages with proper routing
- **Reusable Components** - Well-structured, modular component library
- **Type-Safe** - Full TypeScript implementation with separated interface models
- **Responsive Design** - Mobile-first approach with elegant desktop layouts
- **Loading States** - Shimmer effects for improved perceived performance
- **Dark Mode Support** - Built-in theme system (ready to implement)

## Tech Stack

- **Framework:** Next.js 16 with App Router
- **Styling:** Tailwind CSS v4
- **Language:** TypeScript
- **UI Components:** shadcn/ui
- **Icons:** Lucide React
- **Fonts:** Geist & Geist Mono

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd velocity-landing-page
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/                          # Next.js App Router pages
│   ├── about/                    # About page
│   ├── blog/                     # Blog page
│   ├── careers/                  # Careers page
│   ├── contact/                  # Contact page
│   ├── docs/                     # Documentation page
│   ├── features/                 # Features page
│   ├── get-started/              # Get Started page
│   ├── help/                     # Help Center page
│   ├── pricing/                  # Pricing page
│   ├── testimonials/             # Testimonials page
│   ├── updates/                  # Updates/Changelog page
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Global styles & design tokens
│
├── components/                   # React components
│   ├── landing/                  # Landing page sections
│   │   ├── navigation.tsx        # Header navigation
│   │   ├── hero-section.tsx      # Hero section
│   │   ├── features-section.tsx  # Features showcase
│   │   ├── testimonials-section.tsx # Testimonials
│   │   ├── pricing-section.tsx   # Pricing section
│   │   ├── pricing-card.tsx      # Pricing card component
│   │   └── footer.tsx            # Footer component
│   │
│   ├── common/                   # Reusable common components
│   │   ├── page-layout.tsx       # Page wrapper layout
│   │   ├── page-hero.tsx         # Hero section component
│   │   ├── icon-card.tsx         # Icon card component
│   │   └── shimmer.tsx           # Loading shimmer effects
│   │
│   ├── blog/                     # Blog components
│   │   ├── blog-card.tsx         # Blog post card
│   │   └── featured-blog-card.tsx # Featured blog card
│   │
│   ├── careers/                  # Career components
│   │   └── job-listing.tsx       # Job listing card
│   │
│   ├── contact/                  # Contact components
│   │   └── contact-form.tsx      # Contact form
│   │
│   └── ui/                       # shadcn/ui components
│       └── ...                   # Button, Card, Input, etc.
│
├── lib/                          # Utility functions & constants
│   ├── constants/
│   │   └── landing-data.ts       # Landing page data
│   └── utils.ts                  # Utility functions
│
├── models/                       # TypeScript interfaces
│   ├── feature.interface.ts
│   ├── testimonial.interface.ts
│   ├── pricing.interface.ts
│   ├── navigation.interface.ts
│   └── footer.interface.ts
│
├── public/                       # Static assets
│   └── assets/
│       └── images/               # Image assets
│
└── hooks/                        # Custom React hooks
    ├── use-mobile.tsx
    └── use-toast.ts
\`\`\`

## Available Pages

- **/** - Landing page with hero, features, testimonials, and pricing
- **/about** - Company information, mission, and values
- **/features** - Detailed features showcase
- **/testimonials** - Customer testimonials and success stories
- **/pricing** - Pricing plans and comparison
- **/get-started** - Sign-up page with plan selection
- **/blog** - Blog posts and articles
- **/careers** - Job listings and company culture
- **/contact** - Contact form and information
- **/docs** - Documentation and guides
- **/help** - Help center and FAQs
- **/updates** - Product updates and changelog

## Design System

### Colors

The project uses a sophisticated emerald green color palette:

- **Primary:** Emerald green (#10b981)
- **Accent:** Lime green (#84cc16)
- **Neutrals:** Warm beige and charcoal tones
- **Background:** Soft warm tones for light mode, deep charcoal for dark mode

### Typography

- **Headings:** Geist font family with bold weights
- **Body:** Geist with regular weights
- **Code:** Geist Mono

### Components

All components are built with:
- Proper TypeScript typing
- Reusable props interfaces
- Responsive design patterns
- Accessibility considerations

## Code Quality Features

- **Separated Concerns** - Components, models, and constants in dedicated folders
- **Type Safety** - Full TypeScript coverage with interface models
- **Reusability** - Modular components with prop-based configuration
- **Performance** - Loading states and optimized rendering
- **Maintainability** - Clear folder structure and naming conventions

## Customization

### Updating Content

All page content is centralized in `lib/constants/landing-data.ts`. Modify this file to update:
- Navigation links
- Features
- Testimonials
- Pricing plans
- Footer links

### Changing Colors

Update the design tokens in `app/globals.css`:

\`\`\`css
@theme inline {
  --color-primary: /* your color */;
  --color-accent: /* your color */;
  /* ... other tokens */
}
\`\`\`

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add `page.tsx` for the page content
3. Add `loading.tsx` for loading state
4. Update navigation links in `lib/constants/landing-data.ts`

## Scripts

\`\`\`bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
\`\`\`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
