import { navigate } from "astro:transitions/client";
import { useEffect } from "react";

const Redirector = ({
  redirectUrl,
  redirectInterval,
}: {
  redirectUrl: string;
  redirectInterval: number;
}) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate(redirectUrl);
    }, redirectInterval * 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [redirectUrl, redirectInterval]);

  return null;
};

export default Redirector;
