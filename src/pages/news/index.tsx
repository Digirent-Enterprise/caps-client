import React from "react";

import BreakingNewsHeadline from "@/components/news/breaking-news-headline";
import FeatureNews from "@/components/news/feature-news";
import TrendingStories from "@/components/news/trending-stories";

export const trendingStories = [
  {
    title: "Story 1",
    imageUrl: "/theme/dark.png",
  },
  {
    title: "Story 2",
    imageUrl: "/theme/dark.png",
  },
  {
    title: "Story 3",
    imageUrl: "/theme/dark.png",
  },
];

const Component: React.FC = () => {
  const handleHeadlineClick = () => {
    console.log("Headline clicked!");
  };

  return (
    <div className="container mx-auto mt-4">
      <BreakingNewsHeadline
        headline="Breaking News: Example Headline"
        onClick={handleHeadlineClick}
      />
      <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-2">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of another big image news"
                newsTitle="Yet Another News Title"
                url={""}
              />
            </div>
            <div className="md:col-span-1">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of another big image news"
                newsTitle="Yet Another News Title"
                url={""}
              />
            </div>
            <div className="md:col-span-1">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of a small image news"
                newsTitle="Small Image News Title"
                url={""}
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="md:col-span-1">
              <TrendingStories stories={trendingStories} />
            </div>
            <div className="md:col-span-2">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of another small image news"
                newsTitle="Another Small Image News Title"
                url={""}
              />
            </div>
            <div className="md:col-span-1">
              <TrendingStories stories={trendingStories} />
            </div>
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="md:col-span-1">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of a third row image news"
                newsTitle="Third Row Image News Title"
                url={""}
              />
            </div>
            <div className="md:col-span-1">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of another third row image news"
                newsTitle="Another Third Row Image News Title"
                url={""}
              />
            </div>
            <div className="md:col-span-1">
              <FeatureNews
                image="/theme/dark.png"
                imageAlt="Big Image"
                description="Description of a third third row image news"
                newsTitle="Third Third Row Image News Title"
                url={""}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.displayName = "News";

export default Component;
