// Ch. 9 - Per-route loading.tsx
import { NewsGridSkeleton } from '@/components/news-card-skeleton';

export default function Loading() {
  return (
    <div className="space-y-8">
      <div className="h-4 w-40 bg-white/5 rounded animate-pulse" />
      <div className="space-y-2">
        <div className="h-8 w-48 bg-white/10 rounded-lg animate-pulse" />
        <div className="h-4 w-20 bg-white/5 rounded animate-pulse" />
      </div>
      <NewsGridSkeleton count={3} />
    </div>
  );
}
