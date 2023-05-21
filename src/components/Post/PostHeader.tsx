import React from "react";
import Link from "next/link";

const PostHeader = () => (
  <div
    className="relative h-[350px] min-h-[0] overflow-y-hidden bg-cover bg-fixed bg-no-repeat"
    style={{ backgroundPosition: "50% 0px" }}
  >
    <div className="h-full bg-black/95">
      <div className="pt-[120px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-align-right">
            <div className="w-full">
              <div
                className="text-4xl font-bold text-white"
                id="blog-top-header"
              >
                דהדהבום בלוג
              </div>
              <p className="mt-3 text-base text-white">
                הבלוג של צפריר ליכטנשטיין על תופים, חינוך ומה שביניהם
              </p>
            </div>
            <div className="mt-4 w-full text-sm">
              <nav className="w-full rounded-md text-align-right">
                <ol className="flex list-none p-0">
                  <li>
                    <Link
                      href="/"
                      className="text-primary transition duration-150 ease-in-out hover:text-primary focus:text-primary active:text-primary"
                    >
                      בית
                    </Link>
                  </li>
                  <li>
                    <span className="mx-2 text-neutral-500">/</span>
                  </li>
                  <li className="text-white">דהדהבום בלוג</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PostHeader;
