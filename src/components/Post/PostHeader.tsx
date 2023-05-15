import React from "react";
import Link from "next/link";

const PostHeader = () => (
  <div
    className="bg-cover bg-no-repeat bg-fixed relative h-[350px] min-h-[0] overflow-y-hidden"
    style={{ backgroundPosition: "50% 0px" }}
  >
    <div className="h-full bg-black/95">
      <div className="pt-[120px]">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-align-right">
            <div className="w-full">
              <div
                className="text-white text-4xl font-bold"
                id="blog-top-header"
              >
                דהדהבום בלוג
              </div>
              <p className="text-white text-base mt-3">
                הבלוג של צפריר ליכטנשטיין על תופים, חינוך ומה שביניהם
              </p>
            </div>
            <div className="w-full mt-4 text-sm">
              <nav className="w-full rounded-md text-align-right">
                <ol className="list-none p-0 flex">
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
