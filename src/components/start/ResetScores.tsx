import { settings } from "@/stores/settingsStores";
import { userAnswer } from "@/stores/userAnswerStores";

const ResetScores = () => {
  settings.setKey("mute", "false");
  // TODO: RESET SCORES
  userAnswer.set({
    Fe: "0",
    Ni: "0",
    P: "0",
    Se: "0",
    Te: "0",
    Ti: "0",
  });
  return null;
};

export default ResetScores;
