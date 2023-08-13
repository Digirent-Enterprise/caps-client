import axios from "@/axios";

export default class NewsService {
  static getNewsBasedOnSymptom = (): Promise<NewsNS.NewsResults> => {
    return axios.get(`/news/`);
  };
}
