# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` or `npm run dev`
- **Production build**: `pnpm build` or `npm run build`  
- **Production server**: `pnpm start` or `npm run start`
- **Linting**: `pnpm lint` or `npm run lint`

## Architecture Overview

This is a Next.js 15 application built with TypeScript, focusing on technology consulting services (Bitropy). Key architectural patterns:

### Content Management
- **Articles system**: MDX-based articles stored in `content/articles/` with frontmatter metadata
- **Content processing**: `lib/mdx.ts` handles article parsing, sorting, and filtering using gray-matter and marked
- **Dynamic routing**: Articles use Next.js dynamic routes at `app/articles/[slug]/page.tsx`

### UI Framework
- **Design system**: Tailwind CSS with shadcn/ui components
- **Component structure**: Reusable UI components in `components/ui/`
- **Layout components**: Header/Footer in `components/layout/`
- **Theming**: CSS custom properties for consistent styling

### Core Features
- **Contact forms**: API endpoint at `app/api/contact/route.ts` with Resend integration
- **Social sharing**: ShareButtons component with LinkedIn integration and dynamic Open Graph meta tags
- **Analytics**: Google Analytics integration via GoogleAnalytics component
- **SEO optimization**: Comprehensive metadata in root layout

### Configuration Notes
- **Build settings**: ESLint and TypeScript errors ignored during builds (see next.config.mjs)
- **Images**: Unoptimized images enabled for static deployment
- **MDX support**: Configured with @next/mdx and experimental mdxRs feature
- **Path aliases**: `@/*` mapped to root directory in tsconfig.json

### Styling Approach
- Uses Tailwind with extensive custom color palette via CSS variables
- Supports dark mode with "class" strategy
- Includes animations and custom keyframes for UI interactions
- Responsive design patterns throughout components