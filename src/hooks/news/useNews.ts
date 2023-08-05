import { useContext, useState } from "react";

import { useImmer } from "use-immer";

import { LoadingContext } from "@/contexts/loading-context";
import NewsService from "@/services/news";

export type NewsResult = {
  getNewsResults: () => void;
  newsLoading: boolean;
  newsResults: NewsNS.NewsResults;
};

const useNews = (): NewsResult => {
  const { setLoading } = useContext(LoadingContext);
  const [newsLoading, setNewsLoading] = useState<boolean>(false);
  const [newsResults, setNewsResults] = useImmer<NewsNS.NewsResults>([]);

  const getNewsResults = async () => {
    try {
      setLoading(true);
      const response = await NewsService.getNewsBasedOnSymptom();
      if (response) {
        setNewsResults(response);
      }
      setNewsLoading(false);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return {
    getNewsResults,
    newsLoading,
    newsResults,
  } as NewsResult;
};

export default useNews;
