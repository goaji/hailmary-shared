export type Conference = 'AFC' | 'NFC';
export type Division = 'East' | 'North' | 'South' | 'West';
export type Team = {
    slug: string;
    name: string;
    shortName: string;
    conference: Conference;
    division: Division;
    brand1: string;
    brand2: string;
    accent1: string;
    accent2: string;
    logoUrl: string;
};
export declare const TEAMS: Team[];
export declare const TEAMS_BY_SLUG: Record<string, Team>;
export declare const DEFAULT_TEAM = "kc";
export declare function getTeam(slug: string): Team;
/** Display order for the /echipe index — AFC then NFC, East/North/South/West within. */
export declare const CONFERENCES: Conference[];
export declare const DIVISIONS: Division[];
export declare function getTeamsByDivision(conference: Conference, division: Division): Team[];
/**
 * The neighbouring teams either side of `currentSlug` in TEAMS's own order
 * (conference then division, matching the /echipe index) — for the
 * detail page's prev/next foot nav. `undefined` at either end of the
 * 32-team list, same absent-not-disabled contract as
 * utils/articles.ts's selectAdjacentArticles.
 */
export declare function getAdjacentTeams(currentSlug: string): {
    previous?: Team;
    next?: Team;
};
/**
 * Contrast-safe foreground for text on a `brand1` background (the
 * identity band on /echipe/[team]). brand1 has no contrast guarantee
 * against either surface (AGENTS.md — some primaries are near-black, some
 * near-white), so this picks whichever of $c-text / $c-page wins.
 *
 * A few saturated mid-tone brands (Chiefs red, Chargers blue, Lions blue)
 * fall short of 4.5:1 against *both* $c-text and $c-page — brand1 itself
 * is never adjusted to fix that (AGENTS.md: brand colors are the team's
 * true colors, not tunable for contrast), so for those, and only those,
 * this reaches past the two site tokens to true white/black, whichever
 * clears more.
 */
export declare function onBrandColor(team: Team): string;
/** Six teams shown in the header picker. */
export declare const PICKER_TEAMS: readonly ["kc", "phi", "dal", "gb", "pit", "ne"];
