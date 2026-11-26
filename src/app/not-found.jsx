import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="glass w-full max-w-lg p-8 text-center sm:p-12">
        <span className="badge">404 error</span>

        <h1 className="mt-6 mb-4 text-3xl text-slate-900 md:text-4xl">
          Page not found
        </h1>

        <p className="mb-8 text-slate-600">
          Sorry, the page you’re looking for doesn’t exist or may have been moved.
        </p>

        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className="btn-primary w-full sm:w-auto">
            Go home
          </Link>
          <Link href="/contact" className="btn-secondary w-full sm:w-auto">
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}