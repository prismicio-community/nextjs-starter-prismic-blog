import * as PrismicT from "@prismicio/types";
import { HomepageDocument } from "../../../../prismicio-types";

export interface IHeaderProps {
  navItems: HomepageDocument["data"]["navigationItems"];
  heroImage: PrismicT.ImageField;
  lqipImage: string;
}
