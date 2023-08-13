import React, { useEffect, useState } from "react";

import { useTranslation } from "next-i18next";

import NewsCard from "@/components/news/news-card";
import { ITEMS_PER_PAGE } from "@/components/news/news-list/constant";
import NewsPagination from "@/components/news/news-pagination";
import NewsSkeleton from "@/components/news/news-skeleton";
import withAuth from "@/hoc/withLogin";
import useDynamicHealth from "@/hooks/dynamic-health";
import useNews from "@/hooks/news/useNews";

const Component = () => {
  const { t } = useTranslation("news");
  const [currentPage, setCurrentPage] = useState(0);
  const [totalNewsCount, setTotalNewsCount] = useState(0);

  const { getMostUserSymptomRanking, mostUserSymptomRanking } =
    useDynamicHealth();

  useEffect(() => {
    getMostUserSymptomRanking();
  }, []);

  const { getNewsResults, newsResults, newsLoading } = useNews();

  const convertToSlug = (symptom: string) => {
    return symptom
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  };

  const loadNewsForSymptom = async (symptoms: string[]) => {
    const formattedSymptoms = symptoms.map((symptom: string) =>
      convertToSlug(symptom)
    );

    console.log(formattedSymptoms, "formatted symptom");

    getNewsResults(formattedSymptoms);

    console.log(newsResults.length, "length");

    setTotalNewsCount(newsResults.length);
  };

  useEffect(() => {
    if (mostUserSymptomRanking && mostUserSymptomRanking.length) {
      loadNewsForSymptom(mostUserSymptomRanking);
    }
  }, [mostUserSymptomRanking]);

  return (
    <>
      <div className="bg-light-button-blue px-4 py-8">
        <h1 className="mb-4 text-4xl font-bold text-white">
          {t("latest_news")}
        </h1>
        <p className="text-lg text-white">{t("news_description")}</p>
      </div>
      <div className="mt-6">
        {newsLoading ? (
          <>
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
          </>
        ) : (
          <>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {newsResults
                .slice(
                  currentPage * ITEMS_PER_PAGE,
                  (currentPage + 1) * ITEMS_PER_PAGE
                )
                .map((news) => (
                  <NewsCard key={news.title} news={news} />
                ))}
            </div>
            <NewsPagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              pagesCount={Math.ceil(totalNewsCount / ITEMS_PER_PAGE)}
            />
          </>
        )}
      </div>
    </>
  );
};

Component.displayName = "NewsList";
export default withAuth(Component);
