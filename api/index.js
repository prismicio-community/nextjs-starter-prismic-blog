import Prismic from 'prismic-javascript';
import { PRISMIC_API_URL } from '../prismic-config';

/*REVIEW this is probably super inefficient and making multitudes of API calls*/

const getBlogPostsAPI = async params => {
  try {
    const API = await Prismic.getApi(PRISMIC_API_URL);
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
    const API = await Prismic.getApi(PRISMIC_API_URL, {req});
    const response = await API.getByUID('post', uid);
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getBlogHomeAPI = async () => {
  try {
    const API = await Prismic.getApi(PRISMIC_API_URL);
    const response = await API.getSingle('blog_home');
    return response;
  } catch (error) {
    console.error(error);
    return error;
  }
}

export { getBlogPostsAPI, getBlogPostAPI, getBlogHomeAPI };