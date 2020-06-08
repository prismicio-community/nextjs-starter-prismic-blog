import { apiEndpoint } from 'prismic-configuration'

const PrismicScript = () => {
  const [, repoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);
  return (
      <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
  )
}

export default PrismicScript
