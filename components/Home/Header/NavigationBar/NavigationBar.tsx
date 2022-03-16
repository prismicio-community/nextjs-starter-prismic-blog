import React from "react";
import { INavigationBarProps } from "./interfaces";
import { Container, Grid } from "@nextui-org/react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const NavigationBar: React.FC<INavigationBarProps> = ({ navItems }) => {
  console.log("bla");
  return (
    <Container md css={{ mt: 45 }}>
      <Grid.Container gap={4}>
        {navItems.map(({ name }) => (
          <Grid key={prismicH.asText(name)} css={{ color: "white", "&>": 15 }}>
            <PrismicRichText field={name} />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default NavigationBar;
