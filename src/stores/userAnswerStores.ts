import { persistentMap } from "@nanostores/persistent";

export const userAnswer = persistentMap<Record<string, string>>(
  "attribute:",
  {},
);
