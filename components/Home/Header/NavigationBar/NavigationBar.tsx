import React from "react";
import { INavigationBarProps } from "./interfaces";
import { Grid } from "@nextui-org/react";

const NavigationBar: React.FC<INavigationBarProps> = ({ navItems }) => {
  console.log("bla");
  return (
    <Grid.Container gap={4}>
      {
        navItems.map(({ name }) => <Grid key={name}>{name}</Grid>)
      }
    </Grid.Container>
  );
};

export default NavigationBar;
