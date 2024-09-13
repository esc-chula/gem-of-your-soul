const calculateResult = (scores: Record<string, string>) => {
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

  try {
    const sortedScores = Object.entries(scores)
      .filter(([key]) => url.hasOwnProperty(key))
      .sort(([, scoreA], [, scoreB]) => Number(scoreB) - Number(scoreA));

    let result = sortedScores[0][0];

    // Only one maximum score (dominant function)
    const dominantApproach =
      Number(scores["P"]) > Number(scores["J"]) ? approach.P : approach.J;
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

    if (!result) throw new Error("No result");
    return url[result];
  } catch (err) {
    console.error(err);
    return url["Se"];
  }
};

export default calculateResult;
