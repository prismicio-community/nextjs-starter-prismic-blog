import { Footer } from "../components/Footer";
import css from "styled-jsx/css";

/**
 * The default layout for all pages.
 */
export const Layout = ({ children }) => {
  return (
    <div className="container">
      <main>{children}</main>
      <Footer />
      <style jsx>{styles}</style>
    </div>
  );
};

const styles = css`
  .container {
    padding: 3rem 2rem;
  }
`;
