import { Homepage } from "../../../src/generated/graphql";
import { DeepNonNullRequired } from "../../../types";

export interface IHeaderProps {
  navItems: DeepNonNullRequired<Homepage>["navitems"];
}
