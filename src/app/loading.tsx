// Ch. 9 - Streaming with loading.tsx
import { FeaturedCardSkeleton, NewsGridSkeleton } from '@/components/news-card-skeleton';

export default function Loading() {
  return (
    <div className="space-y-10">
      <section>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div className="space-y-2">
            <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse" />
            <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="h-10 w-64 bg-white/5 rounded-xl animate-pulse" />
        </div>
        <FeaturedCardSkeleton />
      </section>
      <section>
        <div className="h-6 w-32 bg-white/10 rounded animate-pulse mb-5" />
        <NewsGridSkeleton count={6} />
      </section>
    </div>
  );
}
