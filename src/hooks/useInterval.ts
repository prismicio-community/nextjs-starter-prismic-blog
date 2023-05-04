import { useEffect, useRef, useState } from "react";

function useInterval(callback: () => void, delay: number) {
  const [restart, setRestart] = useState(false);
  const savedCallback = useRef<() => void>();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (restart) setRestart(false);
  }, [restart]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current?.();
    }
    let id = setInterval(tick, delay);

    if (restart) {
      clearInterval(id);
      id = setInterval(tick, delay);
    }

    return () => clearInterval(id);
  }, [delay, restart]);
  return { setRestart };
}

export default useInterval;
