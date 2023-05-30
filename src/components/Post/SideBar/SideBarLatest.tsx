import React from "react";
import Link from "next/link";
import { createClient } from "@/prismicio";
import { PostDocument } from "@/prismicio-types";
import dayjs from "@/src/lib/dayjs";
import { PrismicNextImage } from "@prismicio/next";

import SideBarItemWrapper from "./Shared/SideBarItem";
import SideBarTitle from "./Shared/SideBarTitle";

const getLatestPosts = async () => {
  const client = createClient();
  return client.getAllByType("post", {
    orderings: [{ field: "my.post.publish_date", direction: "desc" }],
  });
};

const SideBarLatestItem = ({ id, data, url }: PostDocument<string>) => (
  <div className="">
    <Link key={id} href={url ?? ""}>
      <div
        key={id}
        className="group flex cursor-pointer py-3 transition-all text-align-right"
      >
        <PrismicNextImage
          field={data.header_image}
          width={70}
          height={83}
          imgixParams={{ fit: "crop", ar: "70:83" }}
        />
        <div className="mr-3 flex flex-col gap-2">
          <h4 className="text-[13px] text-gray-800 transition-all group-hover:text-primary">
            {data.title}
          </h4>
          <p className="text-xs text-gray-600">
            {dayjs(new Date(data.publish_date ?? new Date())).format(
              "MMMM D, YYYY"
            )}
          </p>
        </div>
      </div>
    </Link>
  </div>
);

const SideBarLatest = async () => {
  const latestPosts = await getLatestPosts();
  return (
    <SideBarItemWrapper>
      <SideBarTitle title="פוסטים אחרונים" />
      <div className="divide-y divide-gray-200">
        {latestPosts.map((post) => (
          <SideBarLatestItem {...post} />
        ))}
      </div>
    </SideBarItemWrapper>
  );
};

export default SideBarLatest;
