# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Reddit Team Inbox** is a productivity tool that enables teams to track and manage Reddit comments discovered through configured keywords. The application provides a streamlined workflow for viewing comments, assigning tasks, and managing team collaboration around Reddit engagement.

**Language**: All code, comments, UI text, and documentation must be written in **English only**.

### Core Functionality
- Multi-team system: Each team configures keywords and receives matching comments
- Simple workflow: View comment → Open Reddit link → Mark as Done/Open or assign to team member
- Productivity features: Global comment view, personal assignment sidebar, quick actions, CmdK navigation
- Comment status tracking: PENDING → DONE
- Keyword management: ACTIVE/INACTIVE states

## Repository Structure

This is a **pnpm monorepo** with the following structure:

```
reddit-comments/
├── apps/
│   ├── backend/          # NestJS API server
│   └── frontend/         # React SPA
├── packages/
│   ├── schemas/          # Shared Zod validation schemas
│   └── types/            # Shared TypeScript types
├── pnpm-workspace.yaml   # Workspace configuration with catalog deps
└── tsconfig.base.json    # Shared TypeScript config
```

### Apps

#### Frontend (`apps/frontend/`)
- **Framework**: React 19 + TypeScript 5.8 + Vite 7
- **Styling**: TailwindCSS 4 (using @tailwindcss/vite plugin)
- **Routing**: TanStack Router (file-based routing)
- **UI Components**: shadcn/ui + Radix UI primitives
- **State Management**: React hooks + context
- **Validation**: Zod schemas from `@reddit-comments/schemas`

**Structure**:
```
src/
├── features/           # Feature-based organization
│   ├── auth/          # Authentication (login, register)
│   │   ├── api/       # API calls
│   │   ├── components/
│   │   ├── context/
│   │   └── views/
│   └── dashboard/     # Main app dashboard
│       ├── api/
│       ├── components/
│       └── views/
├── routes/            # TanStack Router file-based routes
│   ├── __root.tsx     # Root layout
│   ├── login.tsx      # Public routes
│   ├── register.tsx
│   └── _app/          # Protected routes
│       ├── index.tsx  # Dashboard
│       ├── assigned/  # Personal assignments
│       ├── comments/  # All comments
│       └── settings/  # Team settings
├── components/
│   ├── ui/           # shadcn/ui components
│   └── theme.tsx     # Theme provider
├── hooks/            # Custom React hooks
├── lib/              # Utilities
└── App.tsx           # App entry with router
```

#### Backend (`apps/backend/`)
- **Framework**: NestJS 11 + TypeScript 5.8
- **Database**: PostgreSQL with Prisma 6.16 ORM
- **Authentication**: Session-based (express-session + connect-pg-simple)
- **Validation**: Zod schemas from `@reddit-comments/schemas`
- **Testing**: Jest 30

**Structure**:
```
src/
├── auth/              # Authentication module
│   ├── auth.controller.ts
│   ├── auth.service.ts
│   ├── login.dto.ts
│   └── register.dto.ts
├── teams/             # Teams module
│   ├── teams.controller.ts
│   ├── teams.service.ts
│   ├── teams.module.ts
│   └── teams.dto.ts
├── generated/
│   └── prisma/client/ # Generated Prisma client
├── app.module.ts      # Root module
├── main.ts            # Bootstrap & middleware
└── prisma.server.ts   # Prisma service
```

### Packages

#### Schemas (`packages/schemas/`)
Shared Zod validation schemas used by both frontend and backend:
- `auth/schema.ts`: `registerSchema`, `loginSchema`
- `teams/schema.ts`: `teamCreateSchema`

**Usage**: Import as `@reddit-comments/schemas`

#### Types (`packages/types/`)
Shared TypeScript type definitions.

**Usage**: Import as `@reddit-comments/types`

## Tech Stack

### Frontend
| Category | Technology | Version |
|----------|-----------|---------|
| Framework | React | 19.1.1 |
| Language | TypeScript | 5.8.3 |
| Build Tool | Vite | 7.1.2 |
| Routing | TanStack Router | 1.131.49 |
| Styling | TailwindCSS | 4.1.13 |
| UI Components | shadcn/ui + Radix UI | - |
| Icons | lucide-react | 0.544.0 |
| Forms/Validation | Zod | 4.1.11 |
| Notifications | Sonner | 2.0.7 |
| Theme | next-themes | 0.4.6 |
| Linting | oxlint | 1.16.0 |

### Backend
| Category | Technology | Version |
|----------|-----------|---------|
| Framework | NestJS | 11.0.1 |
| Language | TypeScript | 5.8.3 |
| Database | PostgreSQL | - |
| ORM | Prisma | 6.16.2 |
| Session Store | connect-pg-simple | 10.0.0 |
| Password Hashing | bcrypt | 6.0.0 |
| Validation | Zod | 4.1.11 |
| Testing | Jest | 30.0.0 |
| Linting | oxlint | 1.16.0 |

### Tooling
- **Package Manager**: pnpm (workspace monorepo)
- **Code Formatting**: Prettier
- **TypeScript Config**: Shared base config (NodeNext modules, ES2023)

## Database Schema

The application uses PostgreSQL with Prisma ORM. Key models:

```prisma
Users
  ├── id, email, username, password, createdAt
  ├── teams (UsersTeams[])
  └── notes (Notes[])

Teams
  ├── id, name, createdAt
  ├── users (UsersTeams[])
  ├── keywords (TeamsKeywords[])
  └── comments (TeamsComments[])

Keywords
  ├── id, keyword, createdAt
  └── teams (TeamsKeywords[])

Comments
  ├── id, url
  └── teams (TeamsComments[])

Notes
  ├── id, text, userId, createdAt
  └── teamsComments (TeamsComments?)

# Junction tables for many-to-many relationships
UsersTeams (User ↔ Team)
TeamsKeywords (Team ↔ Keyword) + status: ACTIVE/INACTIVE
TeamsComments (Team ↔ Comment) + status: PENDING/DONE + optional note
```

**Migrations**: Located in `/apps/backend/prisma/migrations/`

## Development Setup

### Prerequisites
- Node.js (compatible with ES2023)
- pnpm
- PostgreSQL database

### Environment Variables

**Backend** (`/apps/backend/.env`):
```env
DATABASE_URL=postgresql://user:password@localhost:5432/dbname
SESSION_SECRET=your-secret-key
PORT=3000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173  # For production CORS
```

**Frontend** (`/apps/frontend/.env`):
```env
# Add any frontend-specific env vars here
```

### Installation & Running

```bash
# Install all dependencies
pnpm install

# Run all apps in parallel (recommended for development)
pnpm dev

# Or run individually:
cd apps/frontend && pnpm dev  # Frontend on http://localhost:5173
cd apps/backend && pnpm dev   # Backend on http://localhost:3000
```

### Database Setup

```bash
cd apps/backend

# Run migrations
pnpm exec prisma migrate deploy

# Or generate Prisma client only
pnpm exec prisma generate

# Create a new migration (after schema changes)
pnpm exec prisma migrate dev --name your_migration_name
```

## Available Commands

### Root Level
```bash
pnpm dev              # Run all apps in development mode (parallel)
```

### Frontend (`apps/frontend/`)
```bash
pnpm dev              # Start Vite dev server (http://localhost:5173)
pnpm build            # TypeScript build + Vite production build
pnpm preview          # Preview production build
pnpm lint             # Run oxlint
```

### Backend (`apps/backend/`)
```bash
pnpm dev              # Start NestJS in watch mode
pnpm build            # Build for production
pnpm start            # Start production server
pnpm start:debug      # Start with debugger
pnpm start:prod       # Start from dist/
pnpm test             # Run Jest tests
pnpm test:watch       # Jest in watch mode
pnpm test:cov         # Jest with coverage report
pnpm test:e2e         # Run E2E tests
pnpm lint             # Run oxlint (type-aware)
pnpm format           # Run Prettier
```

### Schemas Package (`packages/schemas/`)
```bash
pnpm dev              # TypeScript compiler in watch mode
pnpm build            # Build types
```

## Architecture & Patterns

### Frontend Patterns

1. **Feature-Based Organization**
   - Each feature (auth, dashboard) is self-contained
   - Contains: `api/`, `components/`, `views/`, `context/`
   - Promotes modularity and separation of concerns

2. **File-Based Routing**
   - TanStack Router auto-generates `routeTree.gen.ts`
   - Route files in `/src/routes/`
   - Protected routes under `_app/` directory
   - Route components can export `loader`, `component`, `errorComponent`

3. **Component Composition**
   - shadcn/ui pattern: Copy/paste components in `src/components/ui/`
   - Built on Radix UI primitives for accessibility
   - Highly customizable with TailwindCSS

4. **Path Aliases**
   - `@/*` maps to `./src/*`
   - Configured in `vite.config.ts` and `tsconfig.json`

5. **API Communication**
   - Vite proxy: `/api` → `http://localhost:3000`
   - API functions in `features/{feature}/api/`
   - Uses native `fetch` API

6. **Theme System**
   - `next-themes` for dark/light mode
   - CSS variables in `index.css` for theming
   - Theme provider wraps entire app

### Backend Patterns

1. **MVC Architecture**
   - Controllers handle HTTP requests/responses
   - Services contain business logic
   - Modules organize features (auth, teams)
   - DTOs for data validation

2. **Dependency Injection**
   - NestJS DI container
   - Providers registered in modules
   - Services injected via constructor

3. **Session-Based Auth**
   - Sessions stored in PostgreSQL via `connect-pg-simple`
   - Cookie-based authentication
   - CORS configured for frontend origin
   - Session duration: 30 days

4. **Database Access**
   - Prisma ORM with generated client
   - PrismaService as singleton
   - Type-safe database queries
   - Client output: `src/generated/prisma/client`

5. **Validation**
   - Shared Zod schemas from `@reddit-comments/schemas`
   - Runtime validation in DTOs
   - Type inference for TypeScript

### Shared Patterns

1. **Workspace Dependencies**
   - Internal packages: `workspace:*`
   - Shared deps in pnpm catalog
   - Ensures version consistency

2. **TypeScript Configuration**
   - Base config in root: `tsconfig.base.json`
   - Apps extend base config
   - NodeNext modules (ESM)
   - ES2023 target

3. **Code Quality**
   - oxlint for fast linting
   - Prettier for consistent formatting
   - TypeScript strict null checks

## Code Conventions

### General
- **Naming**: camelCase for variables/functions, PascalCase for components/classes
- **File naming**:
  - Components: `ComponentName.tsx`
  - Routes: lowercase with hyphens (file-based routing)
  - Services/Controllers: `feature.service.ts`, `feature.controller.ts`
- **Imports**: Absolute imports using `@/` alias (frontend)

### Frontend Specific
- **Components**: Functional components with TypeScript
- **Hooks**: Custom hooks prefixed with `use-` (e.g., `use-mobile.ts`)
- **Styling**: TailwindCSS utility classes, no CSS modules
- **State**: React hooks + context, avoid prop drilling
- **Forms**: Controlled components with Zod validation

### Backend Specific
- **Modules**: Feature modules with `.module.ts` suffix
- **DTOs**: Separate files with `.dto.ts` suffix
- **Services**: Business logic only, no HTTP concerns
- **Controllers**: Thin layer, delegate to services
- **Decorators**: Use NestJS decorators (`@Controller`, `@Get`, `@Post`, etc.)

## Testing

### Backend Testing
- **Unit Tests**: `*.spec.ts` files alongside source
- **E2E Tests**: `/test/` directory
- **Framework**: Jest 30 with ts-jest
- **Coverage**: `pnpm test:cov`

### Frontend Testing
- No testing setup currently configured
- Recommended: Vitest + React Testing Library

## API Endpoints

### Authentication
- `POST /register` - Create new user account
- `POST /login` - Authenticate user
- `GET /session` - Get current session info

### Teams
- `POST /teams` - Create new team
- (More endpoints to be documented as implemented)

## Key Features Status

Based on codebase analysis:

✅ **Implemented**:
- User registration & login (session-based auth)
- Team creation
- Database schema for users, teams, keywords, comments
- Frontend routing with protected routes
- Dark mode theme support
- Basic dashboard layout with sidebar

🚧 **In Progress/Upcoming** (based on agents.md roadmap):
- Keyword management UI & API
- Reddit comment scraping
- Comment assignment workflow
- Comment status transitions
- CmdK navigation
- Quick actions

## Troubleshooting

### Common Issues

**Port conflicts**:
- Frontend runs on 5173, backend on 3000
- Change in `vite.config.ts` or backend `.env`

**Database connection**:
- Verify `DATABASE_URL` in backend `.env`
- Ensure PostgreSQL is running
- Run `prisma migrate deploy`

**Type errors after schema changes**:
```bash
cd packages/schemas && pnpm build
```

**Prisma client out of sync**:
```bash
cd apps/backend && pnpm exec prisma generate
```

**CORS issues**:
- Check `main.ts` CORS configuration
- Verify frontend origin matches

## Additional Resources

- [React Documentation](https://react.dev/)
- [NestJS Documentation](https://docs.nestjs.com/)
- [TanStack Router Docs](https://tanstack.com/router)
- [Prisma Docs](https://www.prisma.io/docs)
- [TailwindCSS v4 Docs](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## Contributing

See `agents.md` for architectural standards and best practices expected in this codebase. Key principles:

- Follow feature-based organization
- Use shared Zod schemas for validation
- Maintain TypeScript type safety
- Keep components small and focused
- Write tests for business logic
- Follow NestJS MVC patterns
- Use Prettier for formatting

## License

ISC