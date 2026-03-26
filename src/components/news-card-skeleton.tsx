// Ch. 9 - Streaming with Loading Skeletons
export function NewsCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] animate-pulse">
      <div className="h-48 bg-white/5" />
      <div className="p-4 space-y-3">
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-white/10" />
          <div className="h-5 w-10 rounded-full bg-white/5 ml-auto" />
        </div>
        <div className="h-4 bg-white/10 rounded w-full" />
        <div className="h-4 bg-white/10 rounded w-4/5" />
        <div className="h-3 bg-white/5 rounded w-full" />
        <div className="h-3 bg-white/5 rounded w-3/4" />
        <div className="h-3 bg-white/5 rounded w-2/3" />
        <div className="flex gap-2 pt-2">
          <div className="h-3 w-20 bg-white/5 rounded" />
          <div className="h-3 w-16 bg-white/5 rounded" />
        </div>
      </div>
    </div>
  );
}

export function FeaturedCardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] animate-pulse">
      <div className="h-80 bg-white/5" />
      <div className="p-6 space-y-4">
        <div className="flex gap-3">
          <div className="h-5 w-16 rounded-full bg-white/10" />
          <div className="h-5 w-24 bg-white/5 rounded" />
        </div>
        <div className="h-7 bg-white/10 rounded w-full" />
        <div className="h-7 bg-white/10 rounded w-4/5" />
        <div className="h-4 bg-white/5 rounded w-full" />
        <div className="h-4 bg-white/5 rounded w-3/4" />
      </div>
    </div>
  );
}

export function NewsGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <NewsCardSkeleton key={i} />
      ))}
    </div>
  );
}
