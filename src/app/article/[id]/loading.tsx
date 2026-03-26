// Ch. 9 - Per-route loading skeleton for article pages
export default function Loading() {
  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-pulse">
      {/* Breadcrumb */}
      <div className="flex gap-2">
        <div className="h-4 w-12 bg-white/5 rounded" />
        <div className="h-4 w-16 bg-white/10 rounded" />
        <div className="h-4 w-32 bg-white/5 rounded" />
      </div>

      {/* Header */}
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="h-5 w-16 rounded-full bg-white/10" />
          <div className="h-5 w-20 bg-white/5 rounded" />
        </div>
        <div className="h-10 bg-white/10 rounded w-full" />
        <div className="h-10 bg-white/10 rounded w-4/5" />
        <div className="h-5 bg-white/5 rounded w-full" />
        <div className="h-5 bg-white/5 rounded w-3/4" />
        <div className="h-4 bg-white/5 rounded w-1/2 mt-4" />
      </div>

      {/* Image */}
      <div className="h-96 w-full rounded-2xl bg-white/5" />

      {/* Content */}
      <div className="space-y-3">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className={`h-4 bg-white/5 rounded ${i % 3 === 2 ? 'w-3/4' : 'w-full'}`} />
        ))}
      </div>
    </div>
  );
}
