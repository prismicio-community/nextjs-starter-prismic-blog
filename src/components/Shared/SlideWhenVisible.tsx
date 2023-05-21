import { PropsWithChildren } from "react";
import cn from "@/src/lib/utils/cn";

import useOnScreen from "../../hooks/useOnScreen";

const SlideWhenVisible: React.FC<PropsWithChildren> = ({ children }) => {
  const { isIntersecting, ref } = useOnScreen();
  return (
    <div
      ref={ref}
      className={cn(
        `translate-y-6 opacity-0 transition-all duration-700 ease-in`,
        isIntersecting && "translate-y-0 opacity-100"
      )}
    >
      {children}
    </div>
  );
};

export default SlideWhenVisible;
