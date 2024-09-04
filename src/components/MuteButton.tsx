import { useEffect, useState } from "react";

import { settings } from "@/stores/settingsStores";

import MuteImage from "@/assets/ui/muteIcon.png";
import UnmuteImage from "@/assets/ui/unmuteIcon.png";

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
        <img className="h-10 w-10" src={UnmuteImage.src} alt="unmute" />
      ) : (
        <img className="h-10 w-10" src={MuteImage.src} alt="mute" />
      )}
    </div>
  );
};

export default MuteButton;
