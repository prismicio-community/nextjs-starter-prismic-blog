import cn from "@/src/lib/utils/cn";

import { HomepageDocumentDataRotatingstringsItem } from "../../../../prismicio-types";
import useOnScroll from "../../../hooks/useOnScroll";
import NavigationBar from "./NavigationBar";
import WelcomeArea from "./WelcomeArea";

const Header: React.FC<{
  rotatingStrings: HomepageDocumentDataRotatingstringsItem[];
}> = ({ rotatingStrings }) => {
  const onScroll = useOnScroll(100);
  return (
    <header
      className={cn(
        "relative h-screen min-h-[750px] overflow-y-hidden bg-cover bg-fixed bg-no-repeat",
        { ["on-scroll group"]: onScroll }
      )}
      id="intro"
      style={{
        backgroundPosition: "50% 0px",
        backgroundImage:
          "url(https://res.cloudinary.com/dadaboom/image/upload/q_auto/v1521616799/Cover/zafrir-b_w_20_950KB_Flip.jpg)",
      }}
    >
      <div className="h-full bg-black/60">
        <NavigationBar />
        <WelcomeArea rotatingStrings={rotatingStrings} />
      </div>
    </header>
  );
};

export default Header;
