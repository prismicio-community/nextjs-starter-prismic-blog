module.exports = {
  apiEndpoint: 'https://react-blog-demo.prismic.io/api/v2',
  linkResolver: function(doc) {
    if (doc.type === 'post') {
      return `/blog/${doc.uid}`;
    }
    return '/';
  }
};