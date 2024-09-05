import { persistentMap } from "@nanostores/persistent";

import { type ISettings } from "@/types/settings";

export const settings = persistentMap<ISettings>("settings:", {
  mute: "false",
});
