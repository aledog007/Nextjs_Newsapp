'use client';

// Ch. 7 - Client Component for interactive state
import { useState } from 'react';
import Link from 'next/link';
import { categories } from '@/lib/mock-data';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-[var(--card)] border-b border-[var(--card-border)] px-4 py-4 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
          >
            All News
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/category/${cat.toLowerCase().replace(' ', '-')}`}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2 rounded-lg text-sm text-[var(--muted)] hover:text-[var(--foreground)] hover:bg-white/5 transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
