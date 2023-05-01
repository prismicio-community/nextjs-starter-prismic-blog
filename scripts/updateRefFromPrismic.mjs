import * as prismic from "@prismicio/client";
import fetch from "node-fetch";

const repoName = "dadaboom";
const endpoint = prismic.getEndpoint(repoName);
const client = prismic.createClient(endpoint, { fetch });

const init = async () => {
  const { ref } = await client.getMasterRef();
  console.log(ref);
};

init();
