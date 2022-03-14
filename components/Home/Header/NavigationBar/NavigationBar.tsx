import React from "react";
import { INavigationBarProps } from "./interfaces";
import { Grid } from "@nextui-org/react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const NavigationBar: React.FC<INavigationBarProps> = ({ navItems }) => {
  console.log("bla");
  return (
    <Grid.Container gap={4}>
      {navItems.map(({ name }) => (
        <Grid key={prismicH.asText(name)} css={{ color: 'white' }}>
          <PrismicRichText field={name} />
        </Grid>
      ))}
    </Grid.Container>
  );
};

export default NavigationBar;
