import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";
import WelcomeArea from "./WelcomeArea";

const Header: React.FC<IHeaderProps> = ({ navItems, heroImage, lqipImage }) => {
  return (
      <header className="header" id="intro">
        <div className="overlay">
          <NavigationBar />
          <WelcomeArea />
        </div>
      </header>
  );
};

export default Header;
