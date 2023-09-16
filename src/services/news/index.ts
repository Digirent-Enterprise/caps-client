import axios from "src/utils/axios";

export default class NewsService {
  static getNewsBasedOnSymptom = (
    symptom: string,
  ): Promise<NewsNS.NewsResults> => {
    return axios.get(`http://0.0.0.0:8000/news`, {
      params: { symptom },
    });
  };
}
