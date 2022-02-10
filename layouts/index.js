import { Footer } from "../components/Footer";

/**
 * The default layout for all pages.
 */
export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
      <Footer />
    </div>
  );
};
