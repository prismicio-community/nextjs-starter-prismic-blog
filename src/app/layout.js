import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
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