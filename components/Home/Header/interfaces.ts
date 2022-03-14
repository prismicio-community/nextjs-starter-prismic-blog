import { Homepage } from "../../../src/generated/graphql";
import { DeepNonNullRequired } from "../../../types";
import * as PrismicT from '@prismicio/types';

export interface IHeaderProps {
  navItems: DeepNonNullRequired<Homepage>["navitems"];
  heroImage: PrismicT.ImageField;
}
