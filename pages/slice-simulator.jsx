import { SliceSimulator } from "@prismicio/slice-simulator-react";
import { SliceZone } from "@prismicio/react";

import { components } from "../slices/components";
import state from "../.slicemachine/libraries-state.json";

const SliceSimulatorPage = () => {
  return (
    <SliceSimulator
      sliceZone={({ slices }) => (
        <SliceZone slices={slices} components={components} />
      )}
      state={state}
    />
  );
};

export default SliceSimulatorPage;
