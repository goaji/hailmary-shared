# @hailmary/shared

Team data, UI message catalogs, and score types shared between `hailmary`
(the app) and `hailmary-e2e` (the Playwright suite), so both consume the
same source instead of drifting copies.

Ships compiled `dist/` (committed to git, built from `src/`) plus the raw
message JSON. Depend on it as a git tag:

```json
"@hailmary/shared": "github:goaji/hailmary-shared#v1.1.0"
```

`dist/` is committed rather than built on install: npm's `allowScripts`
gate blocks a dependency's `prepare` script by default in every consumer
(this repo included), so a build-on-install step can't be relied on. It's
not just an install-time inconvenience either — Node's own module loader
refuses to type-strip `.ts` files that live under `node_modules`, which is
exactly where a git dependency lands, so shipping raw TypeScript breaks any
consumer that touches it without a bundler in front (Playwright's test
runner, most notably — the reason this package exists). Run `npm run
build` and commit the result before tagging a release.

## Exports

- `.` — `Team`, `Conference`, `Division`, `TEAMS`, `TEAMS_BY_SLUG`,
  `getTeam`, `getTeamsByDivision`, `getAdjacentTeams`, `PICKER_TEAMS`,
  `DEFAULT_TEAM`, `CONFERENCES`, `DIVISIONS`, `onBrandColor`,
  `contrastRatio`, `meetsContrast`, `Game`, `GameStatus`
- `./messages/ro.json`, `./messages/en.json` — the UI copy catalogs

## Bumping

A version bump (new tag) is the only thing that keeps `hailmary` and
`hailmary-e2e` in sync — there's no build-time check across repos for
that. Tag and update both consumers' dependency together.
