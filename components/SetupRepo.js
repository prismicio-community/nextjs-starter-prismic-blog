import { PrismicLink } from "@prismicio/react";
import css from "styled-jsx/css";

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
      <div className="setup-repo">
        <h1>Good job!</h1>
        <h2>You're halfway done with setting up your Prismic website</h2>
        <h4>
          Just visit your{" "}
          <PrismicLink href={repositoryURL}>Prismic dashboard</PrismicLink> and
          add some content there
        </h4>
        <style jsx>{styles}</style>
      </div>
    </Layout>
  );
};

const styles = css`
  .setup-repo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vw;
    align-items: center;
  }

  a {
    color: purple;
    font-weight: 700;
  }
`;
