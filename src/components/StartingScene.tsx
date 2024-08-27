import { useEffect, useState } from "react";

import Image01 from "@/assets/story/scene-0/01.webp";
import Image02 from "@/assets/story/scene-0/02.webp";
import Image03 from "@/assets/story/scene-0/03.webp";
import Image04 from "@/assets/story/scene-0/04.webp";
import Image05 from "@/assets/story/scene-0/05.webp";

const StartingScene = () => {
  const images = [Image01, Image02, Image03, Image04, Image05];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev === images.length - 1) {
          clearInterval(interval);
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, 800);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <img
      src={images[currentImageIndex].src}
      alt="scene"
      style={{
        backgroundImage: `url(${images[currentImageIndex].src})`,
      }}
    />
  );
};

export default StartingScene;
