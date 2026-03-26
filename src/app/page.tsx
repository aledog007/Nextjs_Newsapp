import { Suspense } from 'react';
import type { Metadata } from 'next';
import { articles } from '@/lib/mock-data';
import Search from '@/components/search';
import ClientSearchFilter from '@/components/client-search-filter';
import { FeaturedCardSkeleton, NewsGridSkeleton } from '@/components/news-card-skeleton';

export const metadata: Metadata = {
  title: 'TechPulse — Latest Tech News',
  description: 'Stay current with the latest in AI, Web, Mobile, Security, and Open Source.',
};

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-[var(--foreground)]">Latest Tech News</h1>
            <p className="text-[var(--muted)] text-sm mt-1">
              {articles.length} article{articles.length !== 1 ? 's' : ''}
            </p>
          </div>
          <Suspense fallback={<div className="h-10 w-64 bg-white/5 rounded-xl animate-pulse" />}>
            <Search placeholder="Search articles..." />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <div className="space-y-10">
              <FeaturedCardSkeleton />
              <NewsGridSkeleton count={6} />
            </div>
          }
        >
          <ClientSearchFilter allArticles={articles} />
        </Suspense>
      </section>
    </div>
  );
}
