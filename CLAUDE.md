# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Pagser is a full-stack application for creating, publishing, and sharing web pages. It's a Yarn monorepo with a Node.js/Express backend, React frontend, and PostgreSQL database.

**Key Technologies:**
- Backend: Express.js (ESM), TypeScript, PostgreSQL
- Frontend: React 18, Redux, Webpack, TypeScript
- Authentication: Passport.js (local and JWT)
- File uploads: Cloudinary and Busboy
- Styling: SCSS/Sass with PostCSS autoprefixer

## Monorepo Structure

Five packages under `packages/`:

| Package | Purpose | Language | Key Scripts |
|---------|---------|----------|-------------|
| `@pagser/common` | Shared types and utilities | TypeScript | `yarn build`, `yarn start` (watch) |
| `@pagser/reusable` | Shared components and functions | TypeScript | `yarn build`, `yarn start` (watch) |
| `@pagser/server` | Express backend (ESM, port 3080) | TypeScript | `yarn dev`, `yarn build`, `yarn start`, `yarn seed` |
| `@pagser/web` | React SPA frontend | TypeScript/React | `yarn start` (webpack watch), `yarn build` |
| `@pagser/styles` | SCSS stylesheets | SCSS | `yarn dev`, `yarn compile:sass`, `yarn concat:css`, `yarn prefix:css`, `yarn compress:css` |

## Setup & Common Commands

### Initial Setup
```bash
# Install dependencies
yarn install

# Set up database (PostgreSQL at localhost:5433, database "pagser", no password)
cd packages/server
yarn seed
cd ../..
```

### Running the Application
```bash
# Terminal 1: Backend (http://localhost:3080)
cd packages/server
yarn dev

# Terminal 2: Frontend (bundled to packages/server/public/scripts)
cd packages/web
yarn start

# Terminal 3 (optional): Styles (compiled to packages/server/public/styles.css)
cd packages/styles
yarn dev
```

### Building
```bash
# Build everything
yarn build

# Build individual packages
cd packages/server && yarn build
cd packages/web && yarn build
cd packages/styles && yarn compile:sass
```

### Database
- **PostgreSQL**: Requires local postgres running on port 5433
- **Setup**: `cd packages/server && yarn seed` — creates tables, triggers, and seed data
- **Location**: `packages/server/src/database/`
  - `index.ts`: Database connection pool and query helpers
  - `seed.cjs`: Initial schema and seed data
  - `types.ts`: Database types (`TTables`, `IUser`, `IPage`, `IAttachFile`)

## Architecture

### Backend (packages/server)

**Entry point**: `src/index.ts`

**Key directories**:
- `src/api/`: REST API routes organized by feature (auth, pages, users, etc.)
- `src/database/`: PostgreSQL connection, query helpers, and types
- `src/config/`: Configuration and secrets (keys.ts)
- `src/lib/`: Utilities (logging, etc.)
- `src/templates/`: EJS templates for server-side rendering
- `public/`: Static files (compiled JS, CSS, images)

**API Documentation**: Swagger docs at `http://localhost:3080/api-docs` (defined in `src/swagger.yml`)

**Database Access Pattern**:
- `pool` is the PostgreSQL connection pool
- Database operations use parameterized queries to prevent SQL injection
- Custom query helpers for common operations (find, findOne, update, delete)

### Frontend (packages/web)

**Entry point**: `src/index.tsx`

**Key directories**:
- `src/views/`: Page/screen components
- `src/partials/`: Reusable UI components
- `src/`: Root component and app setup

**State Management**:
- Redux for global state management
- Redux Thunk middleware for async operations
- Axios for HTTP requests

**Build Output**: `../server/public/scripts/` (referenced by server's static file serving)

### Shared Packages

**@pagser/common**:
- Core types and interfaces
- Utility functions used across frontend and backend

**@pagser/reusable**:
- Shared validation functions (`validation.ts`)
- Shared UI utilities and helpers
- Alert, modal, and form components for frontend

**@pagser/styles**:
- Single source of truth for CSS
- Compiled to `packages/server/public/styles.css`
- Uses Sass with PostCSS autoprefixer for browser compatibility

## Key Development Patterns

### Authentication
- Passport.js with JWT tokens and local strategy
- Session-based authentication for email verification
- User object available via `req.user` in routes

### File Uploads
- Cloudinary integration for image storage
- Busboy for streaming file uploads
- Attached files stored in database with metadata

### Page Creation Flow
- Pages start as drafts
- Multi-step form with validation in `src/api/pages/` routes
- Uses universal validation functions from `@pagser/reusable`

### Validation
- Shared validation functions in `@pagser/reusable/src/validation.ts`
- Backend validation at API routes
- Frontend validation in React components

## Common Workflows

### Adding a New API Route
1. Create route handler in `packages/server/src/api/[feature]/`
2. Add route to router in `packages/server/src/api/router.ts`
3. Update Swagger docs in `packages/server/src/swagger.yml`
4. Frontend: Add request helper in API module and Redux action

### Adding a Page Feature
- Routes: `packages/server/src/api/pages/`
- Database: Add columns to `pages` table (via seed or migration)
- Frontend: Add form component in `packages/web/src/views/`
- Validation: Use universal validators from `@pagser/reusable`

### Styling Changes
- Edit `packages/styles/src/main.scss`
- Run `yarn dev` in styles package for watch mode
- CSS is compiled to `packages/server/public/styles.css`

### TypeScript Compilation
- Each package has `tsconfig.json`
- Run `yarn build` in a package or `yarn build` at root to compile all
- Use `yarn start` for watch mode during development

## Testing & Validation

- No formal test framework configured
- Manual testing through server and frontend
- API docs available at `http://localhost:3080/api-docs` for endpoint testing
- Type checking via TypeScript compilation (`yarn build`)

## Important Notes

- **Environment**: Server timezone is set to GMT in `index.ts`
- **CORS**: Currently restricted to `https://pagser.com/`
- **Session timeout**: 3 hours (`packages/server/src/index.ts`)
- **Port**: Server runs on 3080, database on 5433
- **Public files**: Server serves from `packages/server/public/`
- **ESM**: Server package uses ES modules (`"type": "module"` in package.json)

## Troubleshooting

**Database connection errors**:
- Ensure PostgreSQL is running on localhost:5433
- Database name: `pagser`, user: `joseph`, no password
- Run `yarn seed` to initialize schema

**Frontend not updating**:
- Check that `yarn start` is running in `packages/web`
- Verify output is being written to `packages/server/public/scripts/`
- Clear browser cache if needed

**Type errors**:
- Run `yarn build` in the package to check TypeScript
- Check that shared types in `@pagser/common` are exported correctly