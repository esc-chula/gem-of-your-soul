import { useEffect, useState } from "react";

const MuteButton = () => {
  const [mute, setMute] = useState<boolean>(false);

  useEffect(() => {
    const muteLocal = localStorage.getItem("mute");
    if (muteLocal === undefined) {
      localStorage.setItem("mute", "false");
      setMute(false);
    } else {
      setMute(muteLocal === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mute", mute ? "true" : "false");
  }, [mute]);

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
          mute ? "src/assets/ui/muteIcon.png" : "src/assets/ui/unmuteIcon.png"
        }
        alt={mute ? "unmute button" : "mute button"}
      />
    </div>
  );
};

export default MuteButton;
