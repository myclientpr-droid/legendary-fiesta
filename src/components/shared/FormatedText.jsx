export default function FormatedText({ text }) {
  if (!text) return null;

  // Function to process inline highlighting
  const processLineWithHighlighting = (line) => {
    const parts = line.split(/(###[^#]+###)/g);
    
    return parts.map((part, partIndex) => {
      if (part.startsWith("###") && part.endsWith("###")) {
        const content = part.slice(3, -3).trim();
        return (
          <span
            key={partIndex}
            className="inline rounded-sm bg-blue-200 px-0.5 tracking-wider py-0.5 text-sm md:text-md font-bold text-zinc-900"
          >
            {content}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <>
      {text.split(/\r\n|\n/gi).map((line, idx) => {
        line = line.trim();
        if (!line) return null;

        // Heading (single #)
        if (line.startsWith("#") && line.endsWith("#") && !line.startsWith("##")) {
          const content = line.replace(/^#|#$/g, "").trim();
          return (
            <h1
              key={idx}
              className="mt-3 mb-2 text-xl md:text-3xl font-bold text-zinc-700"
            >
              {processLineWithHighlighting(content)}
            </h1>
          );
        }

        // Subheading (double ##)
        if (line.startsWith("##") && line.endsWith("##")) {
          const content = line.replace(/^##|##$/g, "").trim();
          return (
            <h2
              key={idx}
              className="mt-3 mb-2 text-lg md:text-xl font-semibold text-zinc-800">
              {processLineWithHighlighting(content)}
            </h2>
          );
        }

        // Bullet list
        if (line.startsWith("-")) {
          const content = line.slice(1).trim();
          return (
            <li key={idx} className="ml-6 list-disc">
              {processLineWithHighlighting(content)}
            </li>
          );
        }

        // Process inline highlighting for normal paragraphs
        return (
          <p
            key={idx}
            className="my-2 indent-5 text-justify leading-relaxed"
          >
            {processLineWithHighlighting(line)}
          </p>
        );
      })}
    </>
  );
}