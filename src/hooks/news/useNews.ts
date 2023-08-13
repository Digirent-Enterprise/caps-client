import { useContext, useState } from "react";
import { LoadingContext } from "@/contexts/loading-context";
import NewsService from "@/services/news";
import { INews } from "@/types/context/with-auth-context";

export type NewsResult = {
  getNewsResults: (symptom: string) => Promise<INews[]>;
  newsLoading: boolean;
  newsResults: INews[];
};

const useNews = (): NewsResult => {
  const { setLoading } = useContext(LoadingContext);
  const [newsLoading, setNewsLoading] = useState<boolean>(false);
  const [newsResults, setNewsResults] = useState<INews[]>([]);

  const getNewsResults = async (symptom: string) => {
    try {
      setLoading(true);
      const response = await NewsService.getNewsBasedOnSymptom(symptom);
      if (response) {
        const allNews = response as INews[];
        setNewsResults(allNews);
        return allNews;
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
