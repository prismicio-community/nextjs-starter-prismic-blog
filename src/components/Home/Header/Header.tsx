import useOnScroll from "../../../hooks/useOnScroll";
import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";
import WelcomeArea from "./WelcomeArea";
import cx from "classnames";

const Header: React.FC<IHeaderProps> = ({ navItems, heroImage, lqipImage }) => {
  const onScroll = useOnScroll(100);
  return (
    <header className={cx("header", { ["nav-scroll"]: onScroll })} id="intro">
      <div className="overlay">
        <NavigationBar />
        <WelcomeArea />
      </div>
    </header>
  );
};

export default Header;
