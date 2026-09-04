// Extracted from hailmary/types/index.ts — kept here so both the app and
// the e2e suite type live-score data against the same shape.

export type GameStatus = "scheduled" | "live" | "halftime" | "final" | "postponed";

export type Game = {
  id: string;
  homeTeamId: string;
  awayTeamId: string;
  /** ISO datetime string */
  kickoff: string;
  week: number;
  status: GameStatus;
  homeScore?: number;
  awayScore?: number;
  quarter?: number;
  clock?: string;
};
