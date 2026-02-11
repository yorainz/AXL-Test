# Data Import & Sync Strategy

## 1) File upload (CSV/XLSX)
- Admin uploads players, teams, matches, and stats files.
- Pipeline steps:
  1. Verify schema headers.
  2. Validate required fields and value ranges.
  3. Map external IDs to local IDs.
  4. Upsert entities in dependency order (league -> team -> player -> match -> stats).
  5. Persist import summary + row-level errors.
  6. Trigger recalculation jobs for standings and fantasy points.

## 2) External API sync
- Scheduled jobs (e.g., every 15 minutes for match updates, nightly full sync).
- Use `external_id` for idempotent upserts.
- Capture `last_synced_at` and retry failed pulls with backoff.

## 3) Manual admin input
- Admin forms for urgent corrections.
- Write audit entries with actor, timestamp, and before/after values.
