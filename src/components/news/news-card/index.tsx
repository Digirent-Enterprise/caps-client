import React from "react";

import Image from "next/image";
import Link from "next/link";

import { INews } from "@/types/context/with-auth-context";

const Component = ({ news }: { news: INews }) => {
  return (
    <div className="flex p-4">
      <Link href={news.url} target="_blank" rel="noopener noreferrer">
        <div className="flex cursor-pointer flex-col rounded-lg bg-white shadow-md transition duration-300 ease-in-out hover:-translate-y-1 hover:shadow-lg">
          <div className="relative h-40 sm:h-52 md:h-64 lg:h-52 xl:h-64">
            <Image
              src={news.img_url}
              alt={news.title}
              width={500}
              height={500}
              className="rounded-t-lg"
            />
          </div>
          <div className="grow p-4">
            <div className="mb-2">
              <span className="rounded-full bg-blue-500 px-2 py-1 text-xs text-white">
                {news.category}
              </span>
            </div>
            <div className="mb-2 text-xl font-bold">{news.title}</div>
            <div className="overflow-hidden text-ellipsis whitespace-normal text-sm text-gray-700 sm:max-h-16 md:max-h-20 lg:max-h-24 xl:max-h-20">
              {news.description}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

Component.displayName = "NewsCard";
export default Component;
