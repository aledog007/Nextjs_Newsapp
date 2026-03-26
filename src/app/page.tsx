// Ch. 7 - Fetching data in Server Components
// Ch. 8 - Static Rendering with revalidation
import { Suspense } from 'react';
import type { Metadata } from 'next';
import { articles, searchArticles } from '@/lib/mock-data';
import NewsCard from '@/components/news-card';
import Search from '@/components/search';
import { FeaturedCardSkeleton, NewsGridSkeleton } from '@/components/news-card-skeleton';

// Ch. 15 - Metadata
export const metadata: Metadata = {
  title: 'TechPulse — Latest Tech News',
  description: 'Stay current with the latest in AI, Web, Mobile, Security, and Open Source.',
};

// Ch. 8 - Static rendering with ISR revalidation
export const revalidate = 3600;

interface HomePageProps {
  searchParams: Promise<{ q?: string }>;
}

export default async function HomePage({ searchParams }: HomePageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? '';

  // Server-side data fetch (simulated)
  const allArticles = query ? searchArticles(query) : articles;
  const featured = allArticles[0];
  const rest = allArticles.slice(1);

  return (
    <div className="space-y-10">
      {/* Hero section */}
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">
              {query ? `Results for "${query}"` : 'Latest Tech News'}
            </h1>
            <p className="text-[var(--muted)] text-sm mt-1">
              {allArticles.length} article{allArticles.length !== 1 ? 's' : ''}
            </p>
          </div>
          {/* Ch. 10 - Search wrapped in Suspense for useSearchParams */}
          <Suspense fallback={<div className="h-10 w-64 bg-white/5 rounded-xl animate-pulse" />}>
            <Search placeholder="Search articles..." />
          </Suspense>
        </div>

        {/* Featured article */}
        {featured ? (
          <Suspense fallback={<FeaturedCardSkeleton />}>
            <NewsCard article={featured} featured />
          </Suspense>
        ) : (
          <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-12 text-center">
            <p className="text-[var(--muted)] text-lg">No articles found for &quot;{query}&quot;</p>
            <p className="text-[var(--muted)] text-sm mt-2">Try a different search term.</p>
          </div>
        )}
      </section>

      {/* News grid */}
      {rest.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-5">More Stories</h2>
          <Suspense fallback={<NewsGridSkeleton count={rest.length} />}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {rest.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          </Suspense>
        </section>
      )}
    </div>
  );
}
