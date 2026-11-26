// Shared between the Tiptap editor (client) and the RichText renderer (server).
// No dependencies here on purpose: the same string helpers must run in both bundles.

const ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;' }

const escapeHtml = (value) => String(value).replace(/[&<>]/g, (char) => ESCAPES[char])

/** Rich text is stored as HTML; anything without a tag is legacy plain text. */
export const containsHtml = (value = '') => /<\/?[a-z][\s\S]*>/i.test(String(value))

/**
 * Older posts were pasted as whole HTML documents (`<!doctype html>…<style>…`).
 * Keep only the body markup so the editor and the reader both see real content.
 */
const stripDocumentChrome = (html) =>
  html
    .replace(/<!doctype[^>]*>/gi, '')
    .replace(/<head[\s\S]*?<\/head>/gi, '')
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<\/?html[^>]*>/gi, '')
    .replace(/<\/?body[^>]*>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    // The post title is the page's only <h1>; body headings start at <h2>
    .replace(/<h1(\s[^>]*)?>/gi, '<h2>')
    .replace(/<\/h1>/gi, '</h2>')
    .trim()

/** `###highlight###` was the old inline bold marker. */
const inlineMarkup = (line) => escapeHtml(line).replace(/###([^#]+)###/g, '<strong>$1</strong>')

const plainTextToHtml = (text) => {
  const blocks = []
  let listItems = null

  const closeList = () => {
    if (listItems) {
      blocks.push(`<ul>${listItems.join('')}</ul>`)
      listItems = null
    }
  }

  String(text)
    .split(/\r?\n/)
    .forEach((rawLine) => {
      const line = rawLine.trim()
      if (!line) {
        closeList()
        return
      }

      if (line.startsWith('- ')) {
        listItems = listItems || []
        listItems.push(`<li>${inlineMarkup(line.slice(2))}</li>`)
        return
      }

      closeList()

      const strong = line.match(/^###(.+)###$/)
      const subheading = line.match(/^##\s*(.+?)\s*##$/)
      const heading = line.match(/^#\s*(.+?)\s*#$/)

      if (strong) blocks.push(`<p>${inlineMarkup(line)}</p>`)
      else if (subheading) blocks.push(`<h3>${inlineMarkup(subheading[1])}</h3>`)
      else if (heading) blocks.push(`<h2>${inlineMarkup(heading[1])}</h2>`)
      else blocks.push(`<p>${inlineMarkup(line)}</p>`)
    })

  closeList()
  return blocks.join('')
}

/**
 * Turns any stored value into editor-friendly HTML: strips document chrome from
 * pasted pages, converts legacy plain text/markup, and leaves HTML untouched.
 */
export function normalizeRichText(value) {
  const source = String(value ?? '')
  if (!source.trim()) return ''
  return containsHtml(source) ? stripDocumentChrome(source) : plainTextToHtml(source)
}
