import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";

const Header: React.FC<IHeaderProps> = ({ navItems }) => {
  console.log('inside: ', navItems);
  return (
    <div>
      <NavigationBar navItems={navItems} />
    </div>
  );
};

export default Header;
