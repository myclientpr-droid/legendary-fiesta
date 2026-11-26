const PageHeader = ({ eyebrow, title, description, logo, children }) => {
  return (
    <section className="relative overflow-hidden border-b border-white/60">
      {/* Aurora wash so the frosted cards below sit on a gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(99,102,241,0.2),transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-56 w-56 rounded-full bg-rose-400/10 blur-3xl"
      />

      <div className="container-custom relative py-14 text-center md:py-20">
        {/* Optional crest centred above the heading */}
        {logo && <div className="mb-6 flex justify-center">{logo}</div>}
        {eyebrow && <span className="badge">{eyebrow}</span>}
        <h1 className="mt-5 text-slate-900">{title}</h1>
        {description && (
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  )
}

export default PageHeader
