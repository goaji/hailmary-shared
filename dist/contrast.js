"use strict";
// WCAG 2.1 contrast ratio, for verifying team accents against a background pragmatically rather than by eyeballing 32 swatches.
Object.defineProperty(exports, "__esModule", { value: true });
exports.contrastRatio = contrastRatio;
exports.meetsContrast = meetsContrast;
function hexToRgb(hex) {
    const normalized = hex.replace("#", "");
    const r = parseInt(normalized.slice(0, 2), 16);
    const g = parseInt(normalized.slice(2, 4), 16);
    const b = parseInt(normalized.slice(4, 6), 16);
    return [r, g, b];
}
function relativeLuminance([r, g, b]) {
    const [rs, gs, bs] = [r, g, b].map((channel) => {
        const c = channel / 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}
function contrastRatio(hexA, hexB) {
    const luminanceA = relativeLuminance(hexToRgb(hexA));
    const luminanceB = relativeLuminance(hexToRgb(hexB));
    const [lighter, darker] = luminanceA > luminanceB ? [luminanceA, luminanceB] : [luminanceB, luminanceA];
    return (lighter + 0.05) / (darker + 0.05);
}
function meetsContrast(hexA, hexB, minRatio) {
    return contrastRatio(hexA, hexB) >= minRatio;
}
