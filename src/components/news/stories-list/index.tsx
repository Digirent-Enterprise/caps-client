import React, { useEffect, useState } from "react";

import StorySkeleton from "@/components/news/story-skeleton";

import withAuth from "@/hoc/withLogin";
import useDynamicHealth from "@/hooks/dynamic-health";
import useNews from "@/hooks/news/useNews";

const PAGE_SIZE = 10;
const STORIES_OFFSET = 50;

const Component = () => {
  const { getMostUserSymptomRanking, mostUserSymptomRanking } =
    useDynamicHealth();

  useEffect(() => {
    getMostUserSymptomRanking();
  }, []);

  const { getNewsResults, newsResults, newsLoading } = useNews();

  const loadNewsForSymptom = (symptoms: string[]) => {
    getNewsResults(symptoms);
  };

  useEffect(() => {
    if (mostUserSymptomRanking && mostUserSymptomRanking.length) {
      loadNewsForSymptom(mostUserSymptomRanking);
    }
  }, [mostUserSymptomRanking]);

  return (
    <>
      <div className="mt-6 grid gap-16 py-10 lg:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
        {newsLoading ? (
          <>
            <StorySkeleton />
            <StorySkeleton />
            <StorySkeleton />
            <StorySkeleton />
          </>
        ) : (
          <>
            {newsResults.map((news) => (
              <div key={news.id}>{news.url}</div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

Component.displayName = "StoriesList";
export default withAuth(Component);
