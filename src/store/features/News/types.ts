export interface News {
  articles: Article[];
  status: string;
  totalResults: number;
}

export interface Article {
  author?: string;
  content?: string;
  description?: string;
  publishedAt?: Date;
  source?: Source;
  title?: string;
  url?: string;
  urlToImage?: string;
}

export interface Source {}
