import { useStore } from "@nanostores/react";
import { Howl } from "howler";
import { useEffect } from "react";

import { settings } from "@/stores/settingsStores";

import Music0 from "@/assets/song/scene0-TwoOfUs.webm";
import Music1 from "@/assets/song/scene1-CaipirinhaInHawaii.webm";
import Music2_1 from "@/assets/song/scene2-1-DontYaBiteNow.webm";
import Music2_2 from "@/assets/song/scene2-2-Intelligentsia.webm";
import Music3_1 from "@/assets/song/scene3-1-RobotsAndAliens.webm";
import Music3_2 from "@/assets/song/scene3-2-TheWorldFair.webm";
import Music4 from "@/assets/song/scene4-SunriseInParis.webm";

const initializeSound = (playlist: string[]) => {
  return playlist.map(
    (music: string) =>
      new Howl({
        src: [music],
        loop: true,
        autoplay: false,
        html5: true,
      }),
  );
};

const sounds = initializeSound([
  Music0,
  Music1,
  Music2_1,
  Music2_2,
  Music3_1,
  Music3_2,
  Music4,
]);

const regexs: string[] = [
  /^\/story\/0-.*/,
  /^\/story\/1-.*/,
  /^\/story\/2-(0[1-9]|10|11).*/,
  /^\/story\/2-(1[2-9]|2[0-9]).*/,
  /^\/story\/3-(0[1-9]|1[0-3]).*/,
  /^\/story\/3-(1[4-9]|2[0-9]).*/,
  /^\/story\/4-.*/,
];

const updatePlayer = (mute: boolean, path: string) => {
  for (let i = 0; i < regexs.length; i++) {
    console.log(`Regex test ${regexs[i]}: ${regexs[i].test(path)}`);
    if (regexs[i].test(path) && !mute) {
      if (!sounds[i]?.playing()) {
        sounds[i].play();
      }
    } else {
      console.log("Sound stop");
      sounds[i].stop();
    }
  }
};

const BackgroundMusic = (): JSX.Element => {
  const muteState = useStore(settings);

  useEffect(() => {
    console.log("Run use effect");
    updatePlayer(muteState.mute === "true", window.location.pathname);
  }, [muteState.mute, window.location.pathname]);

  return <></>;
};

export default BackgroundMusic;
