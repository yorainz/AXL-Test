# Recommended Technology Stack

## Primary recommendation (TypeScript-first)
- **Web UI:** Next.js + TypeScript
- **API:** Express (or NestJS) + TypeScript
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Background jobs:** BullMQ + Redis
- **Auth:** JWT + refresh tokens (or managed auth provider)
- **Hosting:**
  - Web: Vercel
  - API: Render/Fly.io/AWS
  - DB: Neon/Supabase/AWS RDS
  - Redis: Upstash/Redis Cloud

## Alternative (Python API)
- FastAPI + SQLAlchemy + Celery + Redis + PostgreSQL.
