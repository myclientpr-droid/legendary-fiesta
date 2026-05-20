export const calculateReadTime = (text = "") => {
  const wordsPerMinute = 200; // average reading speed

  const wordCount = text.trim().split(/\s+/).length;

  const minutes = Math.ceil(wordCount / wordsPerMinute);

  return minutes < 1 ? "1 min read" : `${minutes} min read`;
};

export const dateFormat = (date) => {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  })
}
