import Footer from "components/Footer";

/**
 * Default layout component
 */
const DefaultLayout = ({ children }) => (
  <div>
    <main>{children}</main>
    <Footer />
  </div>
);

export default DefaultLayout;
