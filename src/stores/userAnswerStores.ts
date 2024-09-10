import { persistentMap } from "@nanostores/persistent";

export const userAnswer = persistentMap<Record>("attribute:", {});
