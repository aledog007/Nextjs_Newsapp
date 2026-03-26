// Ch. 12 - not-found.tsx per route segment
import Link from 'next/link';

export default function ArticleNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
      <div className="text-8xl font-black text-[var(--accent)]/20">404</div>
      <div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Article not found</h2>
        <p className="text-[var(--muted)] max-w-md">
          This article doesn&apos;t exist or may have been removed.
        </p>
      </div>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors"
      >
        Browse all articles
      </Link>
    </div>
  );
}
