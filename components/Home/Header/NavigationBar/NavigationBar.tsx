import React from "react";
import { INavigationBarProps } from "./interfaces";
import { Container, Grid, Text } from "@nextui-org/react";
import { PrismicRichText } from "@prismicio/react";
import * as prismicH from "@prismicio/helpers";

const NavigationBar: React.FC<INavigationBarProps> = ({ navItems }) => {
  return (
    <Container md css={{ mt: 45 }}>
      <Grid.Container gap={4}>
        {navItems.map(({ name }) => (
          <Grid key={prismicH.asText(name)}>
            <PrismicRichText
              field={name}
              components={{
                paragraph: ({ children }) => (
                  <Text color="white" size={15} css={{ fontFamily: 'Open Sans Hebrew', letterSpacing: '0.5pt' }}>{children}</Text>
                ),
              }}
            />
          </Grid>
        ))}
      </Grid.Container>
    </Container>
  );
};

export default NavigationBar;
