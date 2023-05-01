import * as PrismicT from "@prismicio/types";
import { HomepageDocument } from "../../../types.generated";

export interface IHeaderProps {
  navItems: HomepageDocument['data']['navigationItems'];
  heroImage: PrismicT.ImageField;
  lqipImage: string;
}
