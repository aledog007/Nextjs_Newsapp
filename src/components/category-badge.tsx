import { Category } from '@/lib/types';
import Link from 'next/link';

const categoryColors: Record<Category, string> = {
  AI: 'bg-purple-900/60 text-purple-300 border-purple-700/50',
  Web: 'bg-blue-900/60 text-blue-300 border-blue-700/50',
  Mobile: 'bg-green-900/60 text-green-300 border-green-700/50',
  Security: 'bg-red-900/60 text-red-300 border-red-700/50',
  'Open Source': 'bg-orange-900/60 text-orange-300 border-orange-700/50',
};

interface CategoryBadgeProps {
  category: Category;
  asLink?: boolean;
}

export default function CategoryBadge({ category, asLink = false }: CategoryBadgeProps) {
  const className = `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${categoryColors[category]}`;
  const href = `/category/${category.toLowerCase().replace(' ', '-')}`;

  if (asLink) {
    return (
      <Link href={href} className={`${className} hover:opacity-80 transition-opacity`}>
        {category}
      </Link>
    );
  }

  return <span className={className}>{category}</span>;
}
