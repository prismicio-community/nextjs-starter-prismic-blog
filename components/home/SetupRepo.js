import { DefaultLayout } from "../../layouts";
import { repositoryName } from "../../prismicio";
import { setupRepoStyles } from "styles";

/**
 * A setup message displayed when the Prismic repository does not contain blog
 * posts.
 */
export const SetupRepo = () => {
  const repositoryURL = `https://${repositoryName}.prismic.io/`;

  return (
    <DefaultLayout>
      <div className="setup-repo">
        <h1>Good job!</h1>
        <h2>You're halfway done with setting up your Prismic website</h2>
        <h4>
          Just visit your <a href={repositoryURL}>Prismic dashboard</a> and add
          some content there
        </h4>
      </div>
      <style jsx global>
        {setupRepoStyles}
      </style>
    </DefaultLayout>
  );
};
