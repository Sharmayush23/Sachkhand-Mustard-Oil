# MEFA Needles - Manufacturing Company Website

## Overview

MEFA Needles is a full-stack web application for India's premier needle manufacturing company, established in 1968. The application serves as a B2B-focused marketing and informational website showcasing the company's products, heritage, facilities, and contact information. It features a modern, professional design inspired by industrial manufacturing websites while maintaining contemporary web standards.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:**
- **Framework**: React 18+ with TypeScript, using Vite as the build tool
- **Routing**: Wouter for client-side routing with file-based page structure
- **Styling**: Tailwind CSS with custom design system based on shadcn/ui components
- **State Management**: TanStack Query (React Query) for server state management
- **Animations**: Framer Motion for smooth transitions and scroll-based animations
- **Form Handling**: React Hook Form with Zod schema validation

**Component Architecture:**
- Component library based on shadcn/ui with Radix UI primitives
- Shared UI components in `client/src/components/ui/`
- Page-level components in `client/src/pages/`
- Layout components (Navbar, Footer) for consistent site structure
- Design follows "new-york" shadcn style variant with custom color scheme

**Design System:**
- Primary brand colors: Red (#E12531) and Orange (#F6A942)
- Typography: Poppins for headings, Inter for body text
- Component variants support light/dark modes via CSS variables
- Custom Tailwind configuration with extended color palette and spacing system
- Glass-morphism navigation with backdrop blur effects

**Page Structure:**
1. HomePage - Hero section with founder tribute, stats, product preview, values
2. AboutPage - Company story, mission/vision, values grid
3. ProductsPage - Filterable product catalog with category/gauge filtering
4. TimelinePage - Company history with vertical timeline visualization
5. FacilitiesPage - Manufacturing capabilities showcase
6. ContactPage - Contact form with company information
7. NotFound - Custom 404 page

### Backend Architecture

**Technology Stack:**
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript with ES modules
- **HTTP Server**: Express with custom middleware for logging and error handling
- **Build System**: esbuild for server bundling, Vite for client bundling

**API Design:**
- RESTful API endpoints under `/api` prefix
- Endpoints for products, timeline events, and contact inquiries
- Response format: JSON with consistent error handling
- Query parameter support for filtering (e.g., products by category)

**Server Structure:**
- `server/index.ts` - Main application entry point with Express setup
- `server/routes.ts` - API route definitions and handlers
- `server/storage.ts` - Data access layer with in-memory storage interface
- `server/vite.ts` - Development server integration with Vite HMR
- `server/static.ts` - Static file serving for production builds

**Data Layer:**
- Interface-based storage abstraction (`IStorage`) for future database integration
- Currently uses in-memory storage with initial seed data
- Designed for easy migration to PostgreSQL via Drizzle ORM

### Data Storage

**Database Configuration:**
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` with Zod validation schemas
- **Migration System**: Drizzle Kit for schema migrations to `./migrations` directory

**Data Models:**
1. **Products** - Needle product catalog with specifications
   - Fields: id, name, category, description, features[], gaugeRange, material, coating, application, badge
2. **Timeline Events** - Company milestone history
   - Fields: id, year, title, description
3. **Contact Inquiries** - Customer contact form submissions
   - Fields: id, name, email, subject, message, createdAt
4. **Users** - Authentication/admin users (prepared for future use)
   - Fields: id, username, password

**Schema Validation:**
- Zod schemas generated from Drizzle table definitions using `drizzle-zod`
- Type-safe insert schemas with omitted auto-generated fields
- Shared types between frontend and backend via `@shared` path alias

### External Dependencies

**UI Component Libraries:**
- **Radix UI**: Comprehensive set of unstyled, accessible components (accordion, alert-dialog, avatar, checkbox, context-menu, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **shadcn/ui**: Pre-configured component patterns built on Radix UI
- **cmdk**: Command menu component for search interfaces
- **embla-carousel-react**: Carousel/slider functionality

**Styling & Icons:**
- **Tailwind CSS**: Utility-first CSS framework with PostCSS processing
- **class-variance-authority**: Component variant management
- **clsx & tailwind-merge**: Conditional className handling
- **Lucide React**: Icon library for UI elements
- **React Icons**: Additional icon sets (SiLinkedin, SiFacebook, SiX)

**Forms & Validation:**
- **React Hook Form**: Form state management and validation
- **@hookform/resolvers**: Zod resolver integration
- **Zod**: Schema validation library
- **date-fns**: Date formatting and manipulation

**Data Fetching:**
- **TanStack Query**: Server state management, caching, and synchronization
- Built-in retry logic and background refetching capabilities

**Database & Sessions:**
- **Drizzle ORM**: Type-safe PostgreSQL ORM
- **pg**: PostgreSQL client driver
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- Database URL configured via `DATABASE_URL` environment variable

**Development Tools:**
- **Vite**: Fast development server with HMR
- **@replit/vite-plugin-runtime-error-modal**: Error overlay for development
- **@replit/vite-plugin-cartographer**: Code navigation helper (Replit-specific)
- **tsx**: TypeScript execution for development and build scripts
- **TypeScript**: Type safety across entire stack

**Build & Deployment:**
- Build process bundles server (esbuild) and client (Vite) separately
- Static assets served from `dist/public` in production
- Client uses HTML5 History API routing with fallback to index.html
- Server allowlisted dependencies are bundled to optimize cold start performance

**Font Loading:**
- Google Fonts: Inter (300-900 weights) and Poppins (400-800 weights)
- Fonts preloaded for performance optimization