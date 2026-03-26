export type Category = 'AI' | 'Web' | 'Mobile' | 'Security' | 'Open Source';

export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  category: Category;
  author: string;
  publishedAt: string;
  source: string;
  sourceUrl: string;
  imageUrl: string;
  readingTimeMinutes: number;
}
