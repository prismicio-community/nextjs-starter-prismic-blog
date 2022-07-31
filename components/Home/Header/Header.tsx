import { Container } from "@nextui-org/react";
import { PrismicNextImage } from "@prismicio/next";
import ImageWrapper from "../../../src/layout/ImageWrapper";
import { IHeaderProps } from "./interfaces";
import NavigationBar from "./NavigationBar";

const Header: React.FC<IHeaderProps> = ({ navItems, heroImage, lqipImage }) => {
  return (
    <>
      <ImageWrapper>

        <PrismicNextImage
          field={heroImage}
          placeholder="blur"
          blurDataURL={lqipImage}
          layout="responsive"
        />
      </ImageWrapper>
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
