
const DefaultLayout = ({ children }) => (
  <div>
    <header>
      <h1>Next.js & Prismic.io Blog</h1>
    </header>
    <main>{children}</main>
    <footer><p>
      Proudly published with &nbsp;<a href="https://prismic.io" target="_blank" rel="noopener noreferrer">Prismic</a>
      <br/>
      <a href="https://prismic.io" target="_blank" rel="noopener noreferrer">
        <img className="footer-logo" src="/static/images/logo-prismic.svg" alt="Gray Prismic logo"/>
      </a>
    </p></footer>
  </div>
);

export default DefaultLayout;