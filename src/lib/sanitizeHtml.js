import sanitizeHtml from 'sanitize-html'

// Server-side allowlist for stored rich text. Editors are admin-only, but every
// rendered post goes through this before it reaches dangerouslySetInnerHTML.
const OPTIONS = {
  allowedTags: [
    'p', 'br', 'hr',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
    'strong', 'b', 'em', 'i', 'u', 's', 'strike', 'sub', 'sup',
    'blockquote', 'ul', 'ol', 'li',
    'a', 'code', 'pre', 'span',
    'img', 'figure', 'figcaption',
    'table', 'thead', 'tbody', 'tfoot', 'tr', 'th', 'td',
    'dl', 'dt', 'dd',
    // Legacy posts were pasted as whole pages; keep their block containers so text
    // does not run together. Attributes are stripped, so these stay inert.
    'div', 'section', 'article', 'header', 'footer', 'nav', 'main',
  ],
  allowedAttributes: {
    a: ['href', 'title', 'target', 'rel'],
    img: ['src', 'alt', 'title', 'width', 'height', 'loading'],
    th: ['colspan', 'rowspan'],
    td: ['colspan', 'rowspan'],
  },
  allowedSchemes: ['http', 'https', 'mailto', 'tel'],
  allowedSchemesByTag: { img: ['http', 'https'] },
  transformTags: {
    a: sanitizeHtml.simpleTransform('a', { rel: 'noopener noreferrer' }),
    img: sanitizeHtml.simpleTransform('img', { loading: 'lazy' }),
  },
}

export const sanitizeRichText = (html = '') => sanitizeHtml(html, OPTIONS)
