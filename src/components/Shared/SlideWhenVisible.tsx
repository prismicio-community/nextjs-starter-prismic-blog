import { PropsWithChildren } from "react";
import tw from "twin.macro";
import useOnScreen from "../../hooks/useOnScreen";

const SlideWhenVisible: React.FC<PropsWithChildren> = ({ children }) => {
  const { isIntersecting, ref } = useOnScreen();
  return (
    <div
      ref={ref}
      css={[
        tw`transition-all ease-in duration-700 opacity-0 translate-y-6`,
        isIntersecting && tw`opacity-100 translate-y-0`,
      ]}
    >
      {children}
    </div>
  );
};

export default SlideWhenVisible;
