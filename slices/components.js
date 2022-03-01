import dynamic from "next/dynamic";

export const components = {
  image_with_caption: dynamic(() => import("./ImageWithCaption")),
  quote: dynamic(() => import("./Quote")),
  text: dynamic(() => import("./Text")),
};
