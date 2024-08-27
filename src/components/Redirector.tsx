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
      window.location.href = redirectUrl;
    }, redirectInterval * 1000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [redirectUrl, redirectInterval]);

  return null;
};

export default Redirector;