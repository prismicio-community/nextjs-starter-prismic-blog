import Prismic from 'prismic-javascript';
import { apiEndpoint } from '../prismic-config';

/*REVIEW Could combine BlogPosts and BlogHome for a single API call when rendering home page*/

const getBlogPostsAPI = async params => {
  try {
    const API = await Prismic.getApi(apiEndpoint);
    const response = await API.query(
      Prismic.Predicates.at('document.type', 'post'),
      {
        orderings: '[my.post.date desc]',
        ...params
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};

const getBlogPostAPI = async (uid, req) => {
  try {
    const API = await Prismic.getApi(apiEndpoint, {req});
    const response = await API.getByUID('post', uid);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getBlogHomeAPI = async () => {
  try {
    const API = await Prismic.getApi(apiEndpoint);
    const response = await API.getSingle('blog_home');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { getBlogPostsAPI, getBlogPostAPI, getBlogHomeAPI };