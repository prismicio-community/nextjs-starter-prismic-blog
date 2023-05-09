import { HomepageDocumentDataRotatingstringsItem } from "../../../../prismicio-types";
import useOnScroll from "../../../hooks/useOnScroll";
import NavigationBar from "./NavigationBar";
import WelcomeArea from "./WelcomeArea";
import cx from "classnames";

const Header: React.FC<{
  rotatingStrings: HomepageDocumentDataRotatingstringsItem[];
}> = ({ rotatingStrings }) => {
  const onScroll = useOnScroll(100);
  return (
    <header className={cx("header", { ["nav-scroll"]: onScroll })} id="intro">
      <div className="overlay">
        <NavigationBar />
        <WelcomeArea rotatingStrings={rotatingStrings} />
      </div>
    </header>
  );
};

export default Header;
