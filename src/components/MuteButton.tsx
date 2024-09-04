import { useState } from "react";

const MuteButton = () => {
  const [mute, setMute] = useState<boolean>(false);
  const handleClick = () => {
    setMute((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className="absolute right-5 top-5 z-50 cursor-pointer select-none"
    >
      <img
        className="h-10 w-10"
        src={
          mute ? "src/assets/ui/unmuteIcon.png" : "src/assets/ui/muteIcon.png"
        }
        alt={mute ? "unmute button" : "mute button"}
      />
    </div>
  );
};

export default MuteButton;
