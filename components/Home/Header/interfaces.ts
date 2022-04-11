import {Homepage, HomepageNavitems } from "../../../src/generated/graphql";
import * as PrismicT from "@prismicio/types";

export interface IHeaderProps {
  navItems: Homepage['navitems'];
  heroImage: PrismicT.ImageField;
  lqipImage: string;
}
