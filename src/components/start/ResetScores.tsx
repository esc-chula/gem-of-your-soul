import { settings } from "@/stores/settingsStores";

const ResetScores = () => {
  settings.setKey("mute", "false");
  // TODO: RESET SCORES
  return null;
};

export default ResetScores;
