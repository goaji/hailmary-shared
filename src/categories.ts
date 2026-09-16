export const CATEGORY_IDS = [
  "transferuri",
  "accidentari",
  "analiza",
  "antrenori",
  "draft",
  "program",
  "regulament",
  "meciuri",
  "media",
] as const;

export type Category = (typeof CATEGORY_IDS)[number];