import { settings } from "@/stores/settingsStores";
import { userAnswer } from "@/stores/userAnswerStores";
import { userName } from "@/stores/userNameStores";

const ResetScores = () => {
  settings.setKey("mute", "false");
  userName.set("");
  userAnswer.set({
    Fi: "0",
    Fe: "0",
    Ni: "0",
    Ne: "0",
    Si: "0",
    Se: "0",
    Ti: "0",
    Te: "0",
    P: "0",
    J: "0",
  });
  return null;
};

export default ResetScores;
