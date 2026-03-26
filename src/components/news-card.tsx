// Ch. 3 - next/image for optimized images
// Ch. 5 - next/link for navigation
import Image from 'next/image';
import Link from 'next/link';
import { Article } from '@/lib/types';
import CategoryBadge from './category-badge';

interface NewsCardProps {
  article: Article;
  featured?: boolean;
}

export default function NewsCard({ article, featured = false }: NewsCardProps) {
  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

  if (featured) {
    return (
      <Link href={`/article/${article.id}`} className="group block">
        <article className="relative rounded-2xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent)]/50 transition-all duration-300">
          <div className="relative h-64 sm:h-80 w-full">
            <Image
              src={article.imageUrl}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 1200px"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)] via-[var(--card)]/40 to-transparent" />
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <CategoryBadge category={article.category} asLink />
              <span className="text-xs text-[var(--muted)]">{date}</span>
              <span className="text-xs text-[var(--muted)]">{article.readingTimeMinutes} min read</span>
            </div>
            <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-hover)] transition-colors line-clamp-2">
              {article.title}
            </h2>
            <p className="text-[var(--muted)] line-clamp-2 text-sm leading-relaxed">{article.summary}</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[var(--muted)]">
              <span>{article.author}</span>
              <span>·</span>
              <span>{article.source}</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/article/${article.id}`} className="group block h-full">
      <article className="h-full rounded-xl overflow-hidden border border-[var(--card-border)] bg-[var(--card)] hover:border-[var(--accent)]/50 transition-all duration-300 flex flex-col">
        <div className="relative h-48 w-full flex-shrink-0">
          <Image
            src={article.imageUrl}
            alt={article.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--card)]/80 to-transparent" />
        </div>
        <div className="p-4 flex flex-col flex-1">
          <div className="flex items-center gap-2 mb-2">
            <CategoryBadge category={article.category} asLink />
            <span className="text-xs text-[var(--muted)] ml-auto">{article.readingTimeMinutes} min</span>
          </div>
          <h3 className="text-base font-semibold text-[var(--foreground)] mb-2 group-hover:text-[var(--accent-hover)] transition-colors line-clamp-2 flex-1">
            {article.title}
          </h3>
          <p className="text-xs text-[var(--muted)] line-clamp-3 mb-3 leading-relaxed">{article.summary}</p>
          <div className="flex items-center gap-2 text-xs text-[var(--muted)] mt-auto">
            <span>{article.author}</span>
            <span>·</span>
            <span>{date}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
