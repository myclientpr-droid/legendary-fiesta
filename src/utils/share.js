
export const handleShare = async ({ title, text, slug, path }) => {
  const url = `${window.location.origin}/${path}/${slug}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title,
        text,
        url,
      });
    } catch (err) {
      console.log("Share cancelled or error:", err);
    }
  } else {
    try {
      await navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
    } catch (err) {
      console.log("Clipboard error:", err);
    }
  }
};