import { persistentAtom } from "@nanostores/persistent";

export const userName = persistentAtom<string>("name", "");
