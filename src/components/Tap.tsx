import { useEffect, useState } from "react";

import cn from "@/utils/cn";

const Tap = ({
  delay,
  redirectUrl,
  color,
}: {
  delay: number;
  redirectUrl: string;
  color?: string;
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
          className="cursor-pointere absolute inset-0 z-50 bg-opacity-70"
        >
          <span
            className={cn(
              "absolute bottom-[20%] right-10 text-xl font-semibold",
              color === undefined ? "text-white" : color,
            )}
          >
            กดเพื่อไปต่อ
          </span>
        </a>
      )}
    </>
  );
};

export default Tap;
