import qafiyah from "./qafiyah.json";
import awesomeMuslims from "./awesome-muslims.json";

// In the future, auto-import all *.json via Vite glob if enabled:
export const evaluations = [qafiyah, awesomeMuslims];

export type Evaluation = typeof qafiyah;

export const getBySlug = (slug: string) => evaluations.find(e => e.slug === slug);

