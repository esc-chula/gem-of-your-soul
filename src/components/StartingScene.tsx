import { useEffect, useState } from "react";

import Tap from "./Tap";

import Image07 from "@/assets/story/scene-0/0-02.gif";
import Image01 from "@/assets/story/scene-0/frame1.webp";
import Image02 from "@/assets/story/scene-0/frame2.webp";
import Image03 from "@/assets/story/scene-0/frame3.webp";
import Image04 from "@/assets/story/scene-0/frame4.webp";
import Image05 from "@/assets/story/scene-0/frame5.webp";
import Image06 from "@/assets/story/scene-0/frame6.webp";


const StartingScene = () => {
  const images = [
    Image01,
    Image02,
    Image03,
    Image04,
    Image05,
    Image06,
    Image07,
  ];
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
      {lastImage && <Tap delay={0.5} redirectUrl="/story/0-02" />}
    </>
  );
};

export default StartingScene;
