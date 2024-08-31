import { useEffect, useState } from "react";

const Tap = ({
  delay,
  redirectUrl,
}: {
  delay: number;
  redirectUrl: string;
}) => {
  const [showTap, setShowTap] = useState<boolean>(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowTap(true);
    }, delay * 1000);

    return () => clearInterval(interval);
  });

  return (
    <>
      {showTap && (
        <a
          href={redirectUrl}
          className="animate-fade-in absolute bottom-1/4 right-8 z-50 select-none rounded-full bg-yellow-100 bg-opacity-70 p-12 text-black hover:cursor-pointer"
        >
          Tap
        </a>
      )}
    </>
  );
};

export default Tap;