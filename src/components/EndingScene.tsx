import { useEffect, useState } from "react";

import Image01 from "@/assets/story/scene-4/4-10/frame1.webp";
import Image02 from "@/assets/story/scene-4/4-10/frame2.webp";
import Image03 from "@/assets/story/scene-4/4-10/frame3.webp";
import Image04 from "@/assets/story/scene-4/4-10/frame4.webp";
import Image05 from "@/assets/story/scene-4/4-10/frame5.webp";
import Image06 from "@/assets/story/scene-4/4-10/frame6.webp";

import Calculation from "./Calculation";

const StartingScene = () => {
  const images = [Image01, Image02, Image03, Image04, Image05, Image06];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [lastImage, setLastImage] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        if (prev === images.length - 1) {
          clearInterval(interval);
          setLastImage(true);
          return prev;
        } else {
          return prev + 1;
        }
      });
    }, 750);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <>
      <img
        src={images[currentImageIndex].src}
        alt="scene"
        style={{
          backgroundImage: `url(${images[currentImageIndex].src})`,
        }}
        className="absolute z-0"
      />
      {lastImage && <Calculation />}
    </>
  );
};

export default StartingScene;
