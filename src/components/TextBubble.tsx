import cn from "@/utils/cn";

import { userName } from "@/stores/userNameStores";
import { useStore } from "@nanostores/react";

const TextBubble = ({
  name,
  text,
  className,
}: {
  name: string;
  text: string;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-fit w-80 select-none rounded-xl border-4 border-white",
        className,
      )}
    >
      <div className="mb-2.5 ml-2.5 mt-2.5 break-words text-left text-sm">
        <p>
          <span className="font-semibold">{makeText(name)}</span> :{" "}
          {makeText(text)}
        </p>
      </div>
    </div>
  );
};

const makeText = (text: string) => {
  const username = useStore(userName);
  return text.replace(/%USERNAME%/g, username);
};

export default TextBubble;
