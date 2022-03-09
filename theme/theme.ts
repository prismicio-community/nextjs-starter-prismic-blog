import { createTheme } from "@nextui-org/react";
import { gray, red, purple, yellow, gold } from "./colors";

const theme = createTheme({
	type: "light",
  theme: {
    colors: {
      ...gray,
      ...red,
      ...purple,
      ...yellow,
      ...gold,
      primary: "#d6b161",
			dope: 'green',
    },
  },
});

export default theme;