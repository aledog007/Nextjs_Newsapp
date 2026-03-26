'use client';

// Ch. 12 - Handling Errors with error.tsx
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center space-y-6">
      <div className="text-6xl">⚠️</div>
      <div>
        <h2 className="text-2xl font-bold text-[var(--foreground)] mb-2">Something went wrong!</h2>
        <p className="text-[var(--muted)] max-w-md">
          {error.message || 'An unexpected error occurred. Please try again.'}
        </p>
      </div>
      <button
        onClick={() => reset()}
        className="px-6 py-2.5 rounded-xl bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
