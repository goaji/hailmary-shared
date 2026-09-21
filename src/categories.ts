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

export type AccentSlot = 1 | 2;

export type CategoryDefinition = {
  id: Category;
  messageKey: string;
  accent: AccentSlot;
};

// Labels never come from `id` directly, even though the values match today —
// always look up `messageKey` in the "categories" messages namespace.
export const CATEGORIES: Record<Category, CategoryDefinition> = {
  transferuri: { id: "transferuri", messageKey: "transferuri", accent: 2 },
  accidentari: { id: "accidentari", messageKey: "accidentari", accent: 1 },
  analiza: { id: "analiza", messageKey: "analiza", accent: 2 },
  antrenori: { id: "antrenori", messageKey: "antrenori", accent: 1 },
  draft: { id: "draft", messageKey: "draft", accent: 2 },
  program: { id: "program", messageKey: "program", accent: 1 },
  regulament: { id: "regulament", messageKey: "regulament", accent: 2 },
  meciuri: { id: "meciuri", messageKey: "meciuri", accent: 1 },
  media: { id: "media", messageKey: "media", accent: 2 },
};
