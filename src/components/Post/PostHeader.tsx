"use client";
import React from "react";
import { Breadcrum, BreadcrumActiveItem } from "./postHeaderStyle";
import Link from "next/link";

const PostHeader = () => (
  <div
    tw="bg-cover bg-no-repeat bg-fixed relative h-[350px] min-h-[0] overflow-y-hidden"
    style={{ backgroundPosition: "50% 0px" }}
  >
    <div tw="h-full bg-black/95">
      <div tw="pt-[120px]">
        <div tw="container mx-auto px-4">
          <div tw="flex flex-wrap" className="text-align-right">
            <div tw="w-full">
              <div tw="text-white text-4xl font-hebrew" id="blog-top-header">
                דהדהבום בלוג
              </div>
              <p tw="text-white text-lg font-hebrew mt-2">
                הבלוג של צפריר ליכטנשטיין על תופים, חינוך ומה שביניהם
              </p>
            </div>
            <div className="w-full mt-2">
              <nav tw="w-full rounded-md" className="text-align-right">
                <ol tw="list-none p-0 flex">
                  <li>
                    <Link
                      href="/"
                      tw="text-primary transition duration-150 ease-in-out hover:text-primary focus:text-primary active:text-primary"
                    >
                      בית
                    </Link>
                  </li>
                  <li>
                    <span tw="mx-2 text-neutral-500">/</span>
                  </li>
                  <li tw="font-hebrew text-white">דהדהבום בלוג</li>
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
