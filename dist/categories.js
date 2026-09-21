"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CATEGORIES = exports.CATEGORY_IDS = void 0;
exports.CATEGORY_IDS = [
    "transferuri",
    "accidentari",
    "analiza",
    "antrenori",
    "draft",
    "program",
    "regulament",
    "meciuri",
    "media",
];
// Labels never come from `id` directly, even though the values match today —
// always look up `messageKey` in the "categories" messages namespace.
exports.CATEGORIES = {
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
