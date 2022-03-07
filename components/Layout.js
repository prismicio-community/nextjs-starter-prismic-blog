import { Footer } from "../components/Footer";

/**
 * The default layout for all pages.
 */
export const Layout = ({ children }) => {
  return (
    <div className="px-6 pt-12 pb-10 text-neutral-700 antialiased md:pt-20">
      <div className="mx-auto w-full max-w-3xl">
        <main>{children}</main>
        <Footer />
      </div>
    </div>
  );
};
