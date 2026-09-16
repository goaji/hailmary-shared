export const TAG_IDS = [
  "playoffs",
  "super-bowl",
  "intrebari",
  "bulletpoints",
  "media",
  "dazn",
  "youtube",
] as const;

export type Tag = (typeof TAG_IDS)[number];