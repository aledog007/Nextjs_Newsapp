import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--card)] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[var(--muted)] text-sm">
          <span className="text-[var(--accent)]">⚡</span>
          <span>TechPulse — Built with Next.js 15 · App Router · Tailwind CSS</span>
        </div>
        <div className="flex gap-4 text-sm text-[var(--muted)]">
          <Link href="/" className="hover:text-[var(--foreground)] transition-colors">Home</Link>
          <a
            href="https://nextjs.org/learn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--foreground)] transition-colors"
          >
            Next.js Learn
          </a>
        </div>
      </div>
    </footer>
  );
}
