import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices";

/**
 * You can probably ignore this page. It renders the Slice simulator
 * that appear in Slice Machine.
 */
export default function SliceSimulatorPage() {
  return (
    <SliceSimulator
      // The "sliceZone" prop should be a function receiving Slices and
      // rendering them using your "SliceZone" component.
      // @ts-ignore
      sliceZone={(props) => <SliceZone {...props} components={components} />}
      state={{}}
    />
  );
}