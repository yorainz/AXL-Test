# Data Model (Required Tables)

## Core entities
- `leagues`
- `teams`
- `players`
- `matches`
- `player_match_stats`
- `team_standings`
- `fantasy_rules`
- `player_fantasy_points`
- `imports`
- `import_errors`
- `users`

## Relationship summary
- A league has many teams and matches.
- A team has many players.
- A match has two teams and many player stats rows.
- Fantasy points are calculated per player per match from rules.
- Imports can create many row-level errors.
