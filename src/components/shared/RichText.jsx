import { normalizeRichText } from '@/lib/richText'
import { sanitizeRichText } from '@/lib/sanitizeHtml'

/**
 * Renders stored rich text. Server component: normalises legacy payloads and
 * sanitises the HTML before it is injected, so the allowlist lives in one place.
 */
export default function RichText({ html, className = '' }) {
  const markup = sanitizeRichText(normalizeRichText(html))
  if (!markup) return null

  return (
    <div
      className={`rich-text ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  )
}
