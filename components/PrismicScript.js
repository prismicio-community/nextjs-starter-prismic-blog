import { apiEndpoint } from 'prismic-configuration'

const PrismicScript = () => {
  const [, repoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/)
  return (
    <script async defer src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${repoName}`} />
  )
}

export default PrismicScript
