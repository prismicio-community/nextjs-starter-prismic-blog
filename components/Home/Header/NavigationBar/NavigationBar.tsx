import React from "react";
import { INavigationBarProps } from "./interfaces";
import { Container } from "@nextui-org/react";

const NavigationBar: React.FC<INavigationBarProps> = () => {
  console.log("bla");
  return (
    <div>
      <Container css={{ color: "$primary" }}>COOL</Container>
    </div>
  );
};

export default NavigationBar;
