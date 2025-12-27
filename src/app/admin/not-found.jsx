import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <p className="text-4xl font-semibold text-blue-600 mb-2">
          404 ERROR <span>😭</span>
        </p>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Page not found
        </h1>

        <p className="text-gray-600 mb-6">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition"
          >
            Go home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center rounded-md border border-gray-300 px-5 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}