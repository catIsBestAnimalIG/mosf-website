import qafiyah from "./qafiyah.json";

// In the future, auto-import all *.json via Vite glob if enabled:
export const evaluations = [qafiyah];

export type Evaluation = typeof qafiyah;

export const getBySlug = (slug: string) => evaluations.find(e => e.slug === slug);

