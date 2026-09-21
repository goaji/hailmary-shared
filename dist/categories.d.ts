export declare const CATEGORY_IDS: readonly ["transferuri", "accidentari", "analiza", "antrenori", "draft", "program", "regulament", "meciuri", "media"];
export type Category = (typeof CATEGORY_IDS)[number];
export type AccentSlot = 1 | 2;
export type CategoryDefinition = {
    id: Category;
    messageKey: string;
    accent: AccentSlot;
};
export declare const CATEGORIES: Record<Category, CategoryDefinition>;
