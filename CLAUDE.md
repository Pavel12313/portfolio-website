# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

This is a modern portfolio website built with React 19, TypeScript, Vite, and Tailwind CSS. The project emphasizes visual design, animations, and dark mode support with a focus on 2025 design trends.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture and Key Design Principles

### Component Structure
The codebase follows strict component organization principles:
- **DRY Principles**: No code duplication, components must be under 200 lines
- **Separation of Concerns**: 
  - `/hooks` - Custom React hooks for reusable logic
  - `/utils` - Utility functions
  - `/types` - TypeScript type definitions
  - `/components/ui` - Reusable UI components
  - `/components/sections` - Page section components
  - `/components/common` - Common components
- **One Component Per File**: Each component is in its own file with barrel exports

### Japanese Comments
**CRITICAL**: All code comments throughout the codebase MUST be written in Japanese. This is a strict requirement for maintaining consistency.
- Keep comments simple and concise
- Use single-line comments for brief explanations
- Avoid redundant or obvious comments
- Focus on the "why" rather than the "what"

### Theme System
The application uses a comprehensive CSS custom properties system defined in `/src/styles/globals.css`:
- Dark mode with true black backgrounds (#000000) for OLED displays
- High contrast colors for WCAG AAA compliance
- Custom animations: fade-in, slide, float, pulse-glow, gradient-shift, shimmer
- Responsive typography using clamp() functions
- Neumorphic and glassmorphic design elements

### Animation Strategy
- Framer Motion for all animations
- Parallax scrolling effects in Hero section
- Intersection Observer for scroll-triggered animations
- Reduced motion support for accessibility

### Dark Mode Implementation
- Context-based theme management via `ThemeContext`
- Class-based dark mode (`dark:` prefix in Tailwind)
- Initialization script in HTML to prevent flash
- High contrast ratios for text readability

## Key Technical Patterns

### Custom Hooks
- `useIntersectionObserver` - Scroll animations and lazy loading
- `useScrollProgress` - Track page scroll position
- `useReducedMotion` - Accessibility for animations
- `useTheme` - Dark mode management
- `useParallax` - Parallax scrolling effects

### Component Patterns
- Use `AnimatedSection` wrapper for scroll-triggered animations
- Implement `Card` component with glass/hover variants
- All buttons use `Button` component with defined variants
- Skill icons mapped through `skillIconsMap` in `/src/data/skillIcons.tsx`

### State Management
- React Context for theme/dark mode only
- Local component state for UI interactions
- No global state management library

## Important Files

- `/src/styles/globals.css` - Design system and CSS custom properties
- `/src/App.tsx` - Main application structure with all sections
- `/src/contexts/ThemeContext.tsx` - Dark mode implementation
- `/src/data/skillIcons.tsx` - Technology icon mappings
- `/tailwind.config.js` - Extensive Tailwind configuration with custom properties

## Current Limitations

1. **No Testing Infrastructure** - No test commands or framework configured
2. **No Linting/Formatting** - No ESLint or Prettier setup
3. **No Pre-commit Hooks** - No automated code quality checks
4. **No Environment Variables** - All configuration is hardcoded

## Deployment

The project is configured for Vercel deployment with `vercel.json`. The build output goes to the `dist` directory.

## Performance Considerations

- Lazy loading implemented for images via `LazyImage` component
- Intersection Observer for deferred animations
- All animations respect `prefers-reduced-motion`
- CSS custom properties for efficient theming

## Color System

The application uses a sophisticated color system with CSS variables:
- Primary colors: Blue shades
- Accent colors: Purple/violet shades  
- Neutral colors: Gray scale from 50-950
- Dark mode uses inverted neutral scale for high contrast

## Typography

Responsive font sizes using clamp():
- Display: clamp(2.5rem, 5vw, 4rem)
- Headings: Scaled proportionally
- Body text: Base 1rem with responsive scaling