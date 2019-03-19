module.exports = {
  apiEndpoint: 'https://your-repo-name.prismic.io/api/v2',

  //accessToken: '########',
  
  linkResolver: function(doc) {
    if (doc.type === 'post') {
      return `/blog/${doc.uid}`;
    }
    return '/';
  }
};