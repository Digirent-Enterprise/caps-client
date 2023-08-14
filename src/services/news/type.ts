namespace NewsNS {
  export type News = {
    id: string;
    url: string;
    img_url: string;
    title: string;
    description: string;
    category: string;
  };

  export type NewsResults = News[];
}