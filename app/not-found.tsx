import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 text-center">
      <h1 className="text-4xl font-bold text-primary mb-4">
        Page not found
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-md mb-8">
        This page is still under construction.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-white font-medium hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </main>
  );
}
