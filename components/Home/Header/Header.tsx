import { Container } from "@nextui-org/react";
import Image from "next/image";
import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";

const Header: React.FC<IHeaderProps> = ({ navItems, heroImage }) => {
  return (
    <>
      <Image
        src={heroImage.url ?? ""}
        layout="responsive"
        alt={heroImage.alt ?? ""}
        width={heroImage.dimensions?.width}
        height={heroImage.dimensions?.height}
      />
      <Container
        fluid
        justify="center"
        css={{ height: "100vh", position: "absolute", top: 0 }}
      >
        <NavigationBar navItems={navItems} />
      </Container>
    </>
  );
};

export default Header;
