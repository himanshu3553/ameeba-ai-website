# Ameeba AI Landing Page

A modern, professional, SEO-optimized static landing page for Ameeba AI - a prompt management and versioning platform for AI developers.

## Features

- **Modern Design**: Sleek, professional UI with gradient backgrounds and smooth animations
- **SEO Optimized**: Comprehensive meta tags, Open Graph, structured data, and sitemap
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Fast**: Static export for optimal performance
- **Accessible**: WCAG compliant with semantic HTML

## Tech Stack

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Static Export

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This will generate a static export in the `out` directory, ready for deployment to any static hosting service.

## Project Structure

```
ameeba-website/
├── app/
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Main landing page
│   ├── globals.css         # Global styles + Tailwind
│   └── sitemap.ts          # Sitemap generation
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features showcase
│   ├── HowItWorks.tsx      # Process steps
│   ├── Benefits.tsx        # Benefits section
│   └── CTA.tsx             # Call-to-action section
├── public/
│   └── robots.txt          # Robots.txt file
└── ...
```

## Deployment

The site is configured for static export. After building, deploy the `out` directory to:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## SEO Features

- Comprehensive meta tags
- Open Graph tags for social sharing
- Twitter Card support
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Semantic HTML5

## License

Private - Ameeba AI

