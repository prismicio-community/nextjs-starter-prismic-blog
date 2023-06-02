import { createClient } from "@/prismicio";

import Contact from "../Shared/Contact/Contact";

const getContactData = async () => {
  const client = createClient();
  const homepageMap = await client.getSingle("homepage", {
    graphQuery: `
    {
      hommepage {
        map_label_link
        map_label_text
        map_lat
        map_lng
      }
    }
  `,
  });
  return homepageMap.data;
};

export default async function ContactSSR() {
  const { map_label_link, map_label_text, map_lat, map_lng } =
    await getContactData();
  return (
    <Contact
      map_label_link={map_label_link}
      map_label_text={map_label_text}
      map_lat={map_lat}
      map_lng={map_lng}
      source="blog"
    />
  );
}
