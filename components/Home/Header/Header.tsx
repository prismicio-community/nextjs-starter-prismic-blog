import { Container, StyledContainer } from "@nextui-org/react";
import Image from "next/image";
import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";

const Header: React.FC<IHeaderProps> = ({ navItems, heroImage, lqipImage }) => {
  return (
    <>
      <StyledContainer css={{ img: { transition: "0.3s ease" } }}>
        <Image
          src={heroImage.url ?? ""}
          layout="responsive"
          alt={heroImage.alt ?? ""}
          width={heroImage.dimensions?.width}
          height={heroImage.dimensions?.height}
          blurDataURL={lqipImage}
          placeholder="blur"
        />
      </StyledContainer>
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
