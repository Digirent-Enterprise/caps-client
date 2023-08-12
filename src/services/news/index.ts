import { createAxiosInstance } from "@/axios";
import { NEWS_BASE_URL } from "@/axios/constant";

const api = createAxiosInstance(NEWS_BASE_URL);

export default class NewsService {
  static getNewsBasedOnSymptom = (): Promise<NewsNS.NewsResults> => {
    return api.get(`/news/`);
  };
}
