import { useStore } from "@nanostores/react";

import { userAnswer } from "@/stores/userAnswerStores";

const ResetScores = () => {
  const answers = useStore(userAnswer);
  // TODO: RESET SCORE
  return null;
};

export default ResetScores;
