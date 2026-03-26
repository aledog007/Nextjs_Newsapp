'use client';

import { useSearchParams } from 'next/navigation';
import { Article } from '@/lib/types';
import NewsCard from '@/components/news-card';
import { searchArticles } from '@/lib/mock-data';

export default function ClientSearchFilter({ allArticles }: { allArticles: Article[] }) {
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';

  const filtered = query ? searchArticles(query) : allArticles;
  const featured = filtered[0];
  const rest = filtered.slice(1);

  if (filtered.length === 0) {
    return (
      <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-12 text-center">
        <p className="text-[var(--muted)] text-lg">No articles found for &quot;{query}&quot;</p>
        <p className="text-[var(--muted)] text-sm mt-2">Try a different search term.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      <NewsCard article={featured} featured />

      {rest.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold text-[var(--foreground)] mb-5">More Stories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
