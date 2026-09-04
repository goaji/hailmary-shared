# @hailmary/shared

Team data, UI message catalogs, and score types shared between `hailmary`
(the app) and `hailmary-e2e` (the Playwright suite), so both consume the
same source instead of drifting copies.

Ships raw TypeScript/JSON — no build step. Depend on it as a git tag:

```json
"@hailmary/shared": "github:lucistana/hailmary-shared#v1.0.0"
```

## Exports

- `.` — `Team`, `Conference`, `Division`, `TEAMS`, `TEAMS_BY_SLUG`,
  `getTeam`, `getTeamsByDivision`, `getAdjacentTeams`, `PICKER_TEAMS`,
  `DEFAULT_TEAM`, `CONFERENCES`, `DIVISIONS`, `onBrandColor`,
  `contrastRatio`, `meetsContrast`, `Game`, `GameStatus`
- `./messages/ro.json`, `./messages/en.json` — the UI copy catalogs

## Consuming from Next.js

Raw TS in `node_modules` isn't transpiled by Next by default — add this
package to `transpilePackages` in `next.config.ts`.

## Bumping

A version bump (new tag) is the only thing that keeps `hailmary` and
`hailmary-e2e` in sync — there's no build-time check across repos for
that. Tag and update both consumers' dependency together.
