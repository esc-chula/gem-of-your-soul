import { useEffect, useState } from "react";

import Image01 from "@/assets/story/scene-0/01.webp";
import Image02 from "@/assets/story/scene-0/02.webp";
import Image03 from "@/assets/story/scene-0/03.webp";
import Image04 from "@/assets/story/scene-0/04.webp";
import Image05 from "@/assets/story/scene-0/05.webp";
import Image06 from "@/assets/story/scene-0/06.webp";

const StartingScene = () => {
  const images = [Image01, Image02, Image03, Image04, Image05, Image06];
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [lastImage, setLastImage] = useState<boolean>(false);
  const [showTap, setShowTap] = useState<boolean>(false);

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

  useEffect(() => {
    if (!lastImage) {
      return;
    }
    const interval = setInterval(() => {
      setShowTap(true);
    }, 1000);
  }, [lastImage]);

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

      {showTap && (
        <a
          href="/story/0-03"
          className="absolute bottom-1/4 right-8 z-50 rounded-full bg-yellow-100 bg-opacity-70 p-12 text-black hover:cursor-pointer"
        >
          Tap
        </a>
      )}
    </>
  );
};

export default StartingScene;
