export type GameStatus = "scheduled" | "live" | "halftime" | "final" | "postponed";
export type Game = {
    id: string;
    homeTeamId: string;
    awayTeamId: string;
    /** ISO datetime string */
    kickoff: string;
    season: number;
    week: number;
    status: GameStatus;
    homeScore?: number;
    awayScore?: number;
    quarter?: number;
    clock?: string;
};
