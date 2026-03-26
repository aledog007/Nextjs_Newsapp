// Ch. 6 - API Routes (Route Handlers)
// Acts as a proxy layer — in production this would call an external API
// keeping API keys server-side and adding caching/rate-limiting
import { NextRequest, NextResponse } from 'next/server';
import { articles, getArticlesByCategory, searchArticles } from '@/lib/mock-data';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q');
  const id = searchParams.get('id');

  // Simulate network delay to demonstrate loading states
  await new Promise((resolve) => setTimeout(resolve, 100));

  if (id) {
    const article = articles.find((a) => a.id === id);
    if (!article) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }
    return NextResponse.json(article, {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    });
  }

  if (q) {
    const results = searchArticles(q);
    return NextResponse.json({ articles: results, total: results.length });
  }

  if (category) {
    const results = getArticlesByCategory(category);
    return NextResponse.json({ articles: results, total: results.length });
  }

  return NextResponse.json(
    { articles, total: articles.length },
    {
      headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
    }
  );
}
