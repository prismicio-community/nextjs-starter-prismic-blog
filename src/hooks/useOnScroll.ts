import { useEffect, useState } from "react";

const useOnScroll = (yOffset: number): boolean => {
  const [isOffset, setIsOffset] = useState(false);

  useEffect(() => {
    setIsOffset(window?.pageYOffset > yOffset);
  }, [yOffset]);

  useEffect(() => {
    const onScroll = () => {
      setIsOffset(window?.pageYOffset > yOffset);
    };

    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  });

  return isOffset;
};

export default useOnScroll;
