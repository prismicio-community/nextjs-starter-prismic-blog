import { useState, useEffect, useRef, RefObject } from "react";

interface IOnScreenResponse {
  isIntersecting: boolean;
  ref: RefObject<HTMLDivElement>;
}

export default function useOnScreen(rootMargin = "0px"): IOnScreenResponse {
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires
        setIntersecting(entry.isIntersecting);
        if (entry.isIntersecting && ref.current) {
          observer.unobserve(ref.current);
        }
      },
      {
        rootMargin,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, isIntersecting };
}
