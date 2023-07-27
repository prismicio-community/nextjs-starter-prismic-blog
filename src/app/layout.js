import "../styles/globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <body className="overflow-x-hidden antialiased">
        <main>
          {process.env.NODE_ENV === "development" && (
            <div
              style={{
                background: "#5163ba",
                padding: "1rem",
                textAlign: "center",
                fontSize: "0.85rem",
                color: "#fff",
              }}
            >
              <p>
                <strong>👋 Welcome to your new website!</strong> To customize
                the code and content of this site,{" "}
                <a
                  href="https://github.com/prismicio-community/nextjs-starter-prismic-blog/tree/master/docs"
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: "underline" }}
                >
                  see the documentation
                </a>
                . Remove this bar in <code>app/layout.js</code>.
              </p>
            </div>
          )}
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
