import { Footer } from "../components/Footer";

/**
 * The default layout for all pages.
 */
export const Layout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
