// Ch. 4 + 8 - Dynamic Routes + Static/Dynamic Rendering
// Ch. 15 - Dynamic Metadata
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getArticlesByCategory, categories } from '@/lib/mock-data';
import NewsCard from '@/components/news-card';
import CategoryBadge from '@/components/category-badge';
import { Category } from '@/lib/types';
import Link from 'next/link';

interface CategoryPageProps {
  params: Promise<{ name: string }>;
}

// Ch. 8 - generateStaticParams for static generation of all category pages
export async function generateStaticParams() {
  return categories.map((cat) => ({
    name: cat.toLowerCase().replace(' ', '-'),
  }));
}

// Ch. 15 - Dynamic metadata per category
export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { name } = await params;
  const displayName = name.replace('-', ' ');
  const capitalised = displayName.charAt(0).toUpperCase() + displayName.slice(1);
  return {
    title: `${capitalised} News`,
    description: `Latest ${capitalised} articles on TechPulse.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = await params;
  const displayName = name.replace('-', ' ');
  const categoryArticles = getArticlesByCategory(displayName);

  // Ch. 12 - notFound() for invalid categories
  const isValidCategory = categories.some(
    (c) => c.toLowerCase().replace(' ', '-') === name
  );
  if (!isValidCategory) notFound();

  const category = displayName.charAt(0).toUpperCase() + displayName.slice(1) as Category;

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="text-[var(--muted)] hover:text-[var(--foreground)] transition-colors text-sm"
        >
          ← All News
        </Link>
        <span className="text-[var(--card-border)]">/</span>
        <CategoryBadge category={category} />
      </div>

      <div>
        <h1 className="text-3xl font-bold text-[var(--foreground)] mb-1">{category} News</h1>
        <p className="text-[var(--muted)] text-sm">
          {categoryArticles.length} article{categoryArticles.length !== 1 ? 's' : ''}
        </p>
      </div>

      {categoryArticles.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categoryArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[var(--card-border)] bg-[var(--card)] p-16 text-center">
          <p className="text-[var(--muted)] text-lg">No articles in this category yet.</p>
        </div>
      )}
    </div>
  );
}
