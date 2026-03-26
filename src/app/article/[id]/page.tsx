// Ch. 4 - Dynamic Routes [id]
// Ch. 7 - Data Fetching in Server Components
// Ch. 8 - generateStaticParams for static generation
// Ch. 12 - notFound()
// Ch. 15 - Dynamic Metadata
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { getArticleById, articles } from '@/lib/mock-data';
import CategoryBadge from '@/components/category-badge';
import { renderMarkdownLite } from '@/lib/markdown';

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

// Ch. 8 - Pre-generate all article pages at build time
export async function generateStaticParams() {
  return articles.map((a) => ({ id: a.id }));
}

// Ch. 15 - Dynamic metadata per article
export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getArticleById(id);
  if (!article) return { title: 'Article Not Found' };

  return {
    title: article.title,
    description: article.summary,
    openGraph: {
      title: article.title,
      description: article.summary,
      images: [{ url: article.imageUrl }],
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = getArticleById(id);

  // Ch. 12 - notFound() for invalid article IDs
  if (!article) notFound();

  const date = new Date(article.publishedAt).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const htmlContent = renderMarkdownLite(article.content);

  return (
    <article className="max-w-3xl mx-auto space-y-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[var(--muted)]">
        <Link href="/" className="hover:text-[var(--foreground)] transition-colors">Home</Link>
        <span>/</span>
        <CategoryBadge category={article.category} asLink />
        <span>/</span>
        <span className="text-[var(--foreground)] truncate max-w-xs">{article.title}</span>
      </nav>

      {/* Header */}
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <CategoryBadge category={article.category} asLink />
          <span className="text-xs text-[var(--muted)]">{article.readingTimeMinutes} min read</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-[var(--foreground)] leading-tight">
          {article.title}
        </h1>
        <p className="text-lg text-[var(--muted)] leading-relaxed">{article.summary}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--muted)] pt-2 border-t border-[var(--card-border)]">
          <span className="font-medium text-[var(--foreground)]">{article.author}</span>
          <span>·</span>
          <time dateTime={article.publishedAt}>{date}</time>
          <span>·</span>
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent)] hover:text-[var(--accent-hover)] transition-colors"
          >
            {article.source} ↗
          </a>
        </div>
      </header>

      {/* Hero Image - Ch. 3: next/image */}
      <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden">
        <Image
          src={article.imageUrl}
          alt={article.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 800px"
          priority
        />
      </div>

      {/* Content */}
      <div
        className="prose-custom"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Footer */}
      <footer className="pt-8 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <a
          href={article.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white transition-all font-medium text-sm"
        >
          Read on {article.source} ↗
        </a>
        <Link
          href="/"
          className="text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors"
        >
          ← Back to all news
        </Link>
      </footer>
    </article>
  );
}
