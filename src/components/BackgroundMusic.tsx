import { useStore } from "@nanostores/react";
import { Howl } from "howler";
import { useEffect } from "react";

import { settings } from "@/stores/settingsStores";

import Music from "@/assets/song/scene0.webm";

const sound = new Howl({
  src: Music,
  loop: true,
  autoplay: false,
  html5: true,
  onplayerror: function () {
    sound.once("unlock", function () {
      sound.play();
    });
  },
});

const BackgroundMusic = (): JSX.Element => {
  const playing = sound?.playing();
  const muteState = useStore(settings);

  useEffect(() => {
    if (muteState.mute === "true") {
      sound.pause();
    } else {
      if (!playing) {
        sound.play();
      }
    }
  }, [muteState.mute]);

  return <></>;
};

export default BackgroundMusic;
