module.exports = {
  apiEndpoint: 'https://sample-blog-v2.prismic.io/api/v2',
  
  linkResolver: function(doc) {
    if (doc.type === 'post') {
      return `/blog/${doc.uid}`;
    }
    return '/';
  }
};