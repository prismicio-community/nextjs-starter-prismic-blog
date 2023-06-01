import { Montserrat, Open_Sans, Secular_One } from "next/font/google";

export const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const openSans = Open_Sans({
  subsets: ["hebrew"],
  variable: "--font-sans",
});

export const secularOne = Secular_One({
  subsets: ["latin"],
  variable: "--font-secular",
  weight: "400",
});
