# AXL-Test: Intramural Football League App Starter

This repository is a **starter scaffold** for your intramural football + fantasy league app.

It currently includes:
- Product and planning docs.
- A starter data model (Prisma schema).
- Starter backend route templates (Express + TypeScript).
- Starter frontend components and a sample home page.

> Important: this is not a fully wired production app yet. It is a practical baseline you can run/extend.

## What you can do right now

1. Read the full product plan and architecture docs.
2. Run a starter API service with placeholder responses.
3. Call example endpoints for standings, teams, matches, players, and imports.
4. Use the frontend components as templates when you set up your final Next.js app.

## Project structure

- Docs: `docs/`
- Backend starter: `backend/`
- Frontend starter UI templates: `frontend/`

## 1) Read the docs first

- App specification: `docs/app-spec.md`
- Required data model: `docs/data-model.md`
- Import/sync strategy: `docs/data-import-sync.md`
- Tech recommendations: `docs/technology-recommendations.md`
- Screen/navigation plan: `docs/ui-navigation.md`

## 2) Run the backend starter API

### Prerequisites
- Node.js 20+
- npm 10+

### Setup

```bash
cd backend
npm install
```

### Start server

```bash
npm run dev
```

Expected output:

```text
API listening on :4000
```

### Test endpoints

Health check:

```bash
curl http://localhost:4000/health
```

Standings:

```bash
curl http://localhost:4000/api/leagues/1/standings
```

Teams:

```bash
curl http://localhost:4000/api/leagues/1/teams
```

Matches:

```bash
curl "http://localhost:4000/api/leagues/1/matches?matchday=1"
```

Player profile:

```bash
curl http://localhost:4000/api/players/10
```

Import endpoint (sample file upload):

```bash
curl -X POST -F "file=@sample.csv" http://localhost:4000/api/admin/import/players
```

## 3) Database model usage (Prisma)

The schema is ready at `backend/prisma/schema.prisma`.

Typical next commands once your real app wiring is added:

```bash
npx prisma generate
npx prisma migrate dev -n init
```

## 4) Frontend usage

The frontend code under `frontend/src` is a **template** (page + components).

To use it in practice:
1. Initialize a Next.js app (TypeScript).
2. Copy `frontend/src/components/*` into your app components folder.
3. Copy `frontend/src/app/page.tsx` and replace static sample data with API calls.
4. Connect to backend endpoints and render real standings, teams, matches, and players.

## 5) Recommended next steps

1. Add authentication/roles (`admin`, `editor`, `viewer`).
2. Implement Prisma client + real DB queries in routes.
3. Build import parser/validator service and save import errors.
4. Add standings and fantasy-point recalculation jobs.
5. Build full Next.js screens for Standings, Teams, Matches, Players, Fantasy.
