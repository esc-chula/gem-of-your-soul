import { userAnswer } from "@/stores/userAnswerStores";
import { useStore } from "@nanostores/react";
import { useEffect } from "react";

const Calculation = () => {
  const $scores = useStore(userAnswer);

  useEffect(() => {
    const url: Record<string, string> = {
      Se: "carnelian",
      Si: "obsidian",
      Ne: "citrine",
      Ni: "amethyst",
      Te: "lapislazuli",
      Ti: "amazonite",
      Fe: "morganite",
      Fi: "moonstone",
    };

    const approach = {
      P: ["Ne", "Ni", "Se", "Si"],
      J: ["Te", "Ti", "Fe", "Fi"],
    };

    const sortedScores = Object.entries($scores)
      .filter(([key]) => key !== "P" && key !== "J")
      .sort(([, scoreA], [, scoreB]) => Number(scoreB) - Number(scoreA));

    let result = sortedScores[0][0];
    // Only one maximum score (dominant function)
    const dominantApproach =
      Number($scores["P"]) > Number($scores["J"]) ? approach.P : approach.J;
    if (sortedScores[0][1] === sortedScores[1][1]) {
      const maxScores = sortedScores.filter(
        ([key, value]) =>
          value === sortedScores[0][1] && dominantApproach.includes(key),
      );
      result = maxScores[0][0];

      if (maxScores.length > 1) {
        // Two or more maximum scores, randomize
        result = maxScores[Math.floor(Math.random() * maxScores.length)][0];
      }
    }

    if (window) window.location.href = `/result/${url[result]}`;
  }, []);
};

export default Calculation;
