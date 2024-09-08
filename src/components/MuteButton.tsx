import { useEffect, useState } from "react";

import { settings } from "@/stores/settingsStores";

import MuteImage from "@/assets/ui/muteIcon.svg";
import UnmuteImage from "@/assets/ui/unmuteIcon.svg";

const MuteButton = () => {
  const [mute, setMute] = useState<string>("false");

  useEffect(() => {
    setMute(settings.get().mute);
  }, []);

  const handleClick = () => {
    settings.setKey("mute", settings.get().mute === "true" ? "false" : "true");
    setMute(settings.get().mute);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-5 top-5 z-[999] cursor-pointer select-none"
    >
      {mute === "true" ? (
        <img className="h-10 w-10" src={MuteImage.src} alt="mute" />
      ) : (
        <img className="h-10 w-10" src={UnmuteImage.src} alt="unmute" />
      )}
    </div>
  );
};

export default MuteButton;
