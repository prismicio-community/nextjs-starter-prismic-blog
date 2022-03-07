import { PrismicLink } from "@prismicio/react";

import { repositoryName } from "../prismicio";
import { Layout } from "./Layout";

/**
 * A setup message displayed when the Prismic repository does not contain blog
 * posts.
 */
export const SetupRepo = () => {
  const repositoryURL = `https://${repositoryName}.prismic.io/`;

  return (
    <Layout>
      <div className="grid gap-6 py-10 text-center text-xl">
        <h1 className="text-center text-4xl font-black md:text-5xl">
          Good job!
        </h1>
        <p>You're halfway done with setting up your Prismic website</p>
        <p>
          Just visit your{" "}
          <PrismicLink
            href={repositoryURL}
            target="_blank"
            className="underline"
          >
            Prismic dashboard
          </PrismicLink>{" "}
          and add some content there
        </p>
      </div>
    </Layout>
  );
};
