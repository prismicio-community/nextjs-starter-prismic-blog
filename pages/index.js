import Link from 'next/link';
import { getBlogPostsAPI, getBlogHomeAPI } from '../api';
import { RichText, Date } from 'prismic-reactjs';
import { linkResolver } from '../components/prismic';
import DefaultLayout from '../layouts';

/*TODO Separate into modules, implement first paragraph preview*/
/*Add styling in Next using CSS-in-JS stuff*/

const Index = ({ posts = [], doc = {} }) => (
  <DefaultLayout>
    <div className="home">
      <div className="blog-avatar" style={{backgroundImage: 'url(' + doc.image.url +')'}}>
      </div>
      <h1 className="blog-title">{RichText.asText(doc.headline)}</h1>
      <p className="blog-description">{RichText.asText(doc.description)}</p>
    </div>

    <h2>Recent Blog Posts</h2>
    {posts.map((post, index) => (
      <div className="blog-post" key={post.id}>
        <Link
          as={linkResolver(post)}
          href={`/post?uid=${post.uid}`}
          passHref
        >
          <a>{RichText.render(post.data.title, linkResolver)}</a>
        </Link>
        <p className="blog-post-meta">
          <time className="created-at">
            {/* Format the date to M d, Y */}
            {new Intl.DateTimeFormat('en-US', {
              month: 'short', 
              day: '2-digit', 
              year: 'numeric'
            }).format(Date(post.data.date))}
          </time>
        </p>
      </div>
    ))}
  </DefaultLayout>
);

Index.getInitialProps = async () => {
  const response = await getBlogPostsAPI();
  const home = await getBlogHomeAPI();
  return {
    doc: home.data,
    posts: response.results
  };
};

export default Index;
