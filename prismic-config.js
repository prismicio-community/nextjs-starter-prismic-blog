module.exports = {
  apiEndpoint: 'https://bambi-blog.prismic.io/api/v2',

  //accessToken: '########',
  
  linkResolver: function(doc) {
    if (doc.type === 'post') {
      return `/blog/${doc.uid}`;
    }
    return '/';
  }
};