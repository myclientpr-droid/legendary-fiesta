export default function FormatedText({ text }) {
  if (!text) return null;

  return (
    <>
      {text.split(/\r\n|\n/gi).map((line, idx) => {
        line = line.trim();
        if (!line) return null;

        // INLINE HIGHLIGHT (###content###) — must come first
        if (line.startsWith("###") && line.endsWith("###")) {
          const content = line.replace(/^###|###$/g, "").trim();
          return (
            <span
              key={idx}
              className="inline rounded-sm bg-zinc-700 px-2 py-0.5 text-md md:text-lg font-semibold text-zinc-50"
            >
              {content}
            </span>
          );
        }

        // Heading
        if (line.startsWith("#") && line.endsWith("#") && !line.startsWith("##")) {
          const content = line.replace(/^#|#$/g, "").trim();
          return (
            <h1
              key={idx}
              className="mt-3 mb-2 text-xl md:text-3xl font-bold text-zinc-700"
            >
              {content}
            </h1>
          );
        }

        // Subheading
        if (line.startsWith("##") && line.endsWith("##")) {
          const content = line.replace(/^##|##$/g, "").trim();
          return (
            <h2
              key={idx}
              className="mt-3 mb-2 text-lg md:text-xl font-semibold text-zinc-600"
            >
              {content}
            </h2>
          );
        }

        // Bullet list
        if (line.startsWith("-")) {
          return (
            <li key={idx} className="ml-6 list-disc">
              {line.slice(1).trim()}
            </li>
          );
        }

        // Normal paragraph
        return (
          <p
            key={idx}
            className="my-2 indent-5 text-justify leading-relaxed"
          >
            {line}
          </p>
        );
      })}
    </>
  );
}