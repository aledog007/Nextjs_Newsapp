// Ch. 4 + 5 - Layouts and Navigation with <Link>
import Link from 'next/link';
import { categories } from '@/lib/mock-data';
import MobileMenu from './mobile-menu';

export default function Header() {
  return (
    <header className="border-b border-[var(--card-border)] bg-[var(--card)] sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <span className="text-[var(--accent)] text-2xl">⚡</span>
            <span className="text-[var(--foreground)]">TechPulse</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
            >
              All
            </Link>
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
                className="px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
              >
                {cat}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
