import React from "react";

import Image from "next/image";

import { ITrendingStoriesProps } from "@/components/news/trending-stories/type";

const Component: React.FC<ITrendingStoriesProps> = ({ stories }) => {
  return (
    <div>
      <h2 className="mb-2 text-2xl font-semibold">Trending Stories</h2>
      <ul>
        {stories.map((story, index) => (
          <li key={index} className="flex items-center py-4">
            <div className="mr-4 shrink-0">
              <Image
                src={story.imageUrl}
                alt={story.title}
                width={200}
                height={200}
              />
            </div>
            <div>
              <a
                href="#"
                className="text-blue transition-colors duration-300 hover:text-blue hover:underline"
              >
                {story.title}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

Component.displayName = "TrendingStories";
export default Component;
