# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Nuxt.js 3 static website for Амгаланбаярын Амартүвшин (A. Amartuvshyn), the Deputy Mayor of Ulaanbaatar City. The site showcases his biography, current responsibilities, projects, and vision for the city's development.

**Live URL**: https://amartuvshin.mn

## Development Commands

### Core Commands
- `npm install` - Install dependencies
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site for deployment
- `npm run preview` - Preview the generated static site

### Important Notes
- The site is configured as a static site (`ssr: false` in nuxt.config.ts)
- Deployment is handled via GitHub Pages with custom domain amartuvshin.mn

## Architecture & Key Files

### Configuration
- **nuxt.config.ts**: Main Nuxt configuration with static site generation, Tailwind CSS module, and custom domain setup
- **tailwind.config.js**: Custom color scheme with primary (#8B2635), secondary (#2E3532), and accent colors. Includes custom animations (`blob`, `blob-slow`)
- **package.json**: Minimal dependencies focused on Nuxt 3, Tailwind CSS, Vue 3

### Site Structure
- **app.vue**: Currently shows maintenance mode - comment out maintenance section and uncomment NuxtLayout to re-enable site
- **layouts/default.vue**: Main layout with header navigation, footer, and animated background elements
- **pages/**: Individual page components including index.vue (homepage), about.vue, projects.vue, etc.

### Content Architecture
The homepage (pages/index.vue) is heavily feature-rich with:
- Hero section with advanced animations and particle effects
- Video highlights section with embedded Facebook content
- Animated statistics counters
- Timeline-based biography section
- Responsibility breakdown
- Recent updates/news section
- Philosophy quote section with parallax effects

### Styling System
- Uses custom Tailwind configuration with brand colors
- Extensive use of CSS animations and hover effects
- Responsive design with mobile-first approach
- Custom keyframes for blob animations and floating effects

### Deployment
- Configured for GitHub Pages deployment
- Custom domain: amartuvshin.mn
- Static site generation with `npm run generate`
- CNAME file in public/ directory for custom domain

## Important Technical Details

### Maintenance Mode
The site is currently in maintenance mode (app.vue). To re-enable:
1. Comment out the maintenance div in app.vue
2. Uncomment the NuxtLayout section

### Animation System
The homepage includes complex JavaScript animations:
- Counter animations with intersection observers
- Progress bar animations
- Typing effects for text
- Parallax scroll effects
- All animations are initialized in onMounted lifecycle

### Content Language
All content is in Mongolian (Cyrillic script). The site focuses on:
- Government official biography and role
- Urban development projects
- Educational and environmental policies
- Social media integration (Facebook, Instagram, X/Twitter)

### SEO & Meta
Uses Nuxt's useSeoMeta composable for proper meta tags and social media optimization.