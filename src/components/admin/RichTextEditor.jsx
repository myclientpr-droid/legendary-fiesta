'use client'

import { useEffect, useReducer, useRef } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import {
  Bold, Italic, Underline, Strikethrough,
  Heading2, Heading3, List, ListOrdered,
  Quote, Code2, Minus, Link2, Unlink, Undo2, Redo2,
} from 'lucide-react'
import { normalizeRichText } from '@/lib/richText'

const ToolbarButton = ({ label, active, disabled, onClick, children }) => (
  <button
    type="button"
    title={label}
    aria-label={label}
    aria-pressed={active || undefined}
    disabled={disabled}
    // Keep the editor selection when clicking a toolbar control
    onMouseDown={(e) => e.preventDefault()}
    onClick={onClick}
    className={`flex h-8 w-8 items-center justify-center rounded-lg transition disabled:cursor-not-allowed disabled:opacity-35 ${
      active
        ? 'bg-primary-600 text-white shadow-sm'
        : 'text-slate-600 hover:bg-white hover:text-slate-900'
    }`}
  >
    {children}
  </button>
)

const Divider = () => <span className="mx-1 h-5 w-px bg-slate-200" aria-hidden="true" />

export default function RichTextEditor({
  value = '',
  onChange,
  placeholder = 'Start writing…',
  minHeight = 220,
}) {
  const lastEmitted = useRef(value)
  // Tiptap does not re-render on every transaction, so nudge the toolbar ourselves
  const [, bump] = useReducer((n) => n + 1, 0)

  const editor = useEditor(
    {
      // Required under the App Router: the editor must not render during SSR
      immediatelyRender: false,
      extensions: [
        StarterKit.configure({
          heading: { levels: [2, 3] },
          link: {
            openOnClick: false,
            autolink: true,
            HTMLAttributes: { rel: 'noopener noreferrer', target: '_blank' },
          },
        }),
        Placeholder.configure({ placeholder }),
      ],
      content: normalizeRichText(value),
      editorProps: {
        attributes: {
          class: 'tiptap rich-text focus:outline-none',
          'aria-label': 'Rich text editor',
        },
      },
      onUpdate: ({ editor: instance }) => {
        const html = instance.getHTML()
        lastEmitted.current = html
        onChange?.(html)
      },
    },
    [],
  )

  useEffect(() => {
    if (!editor) return
    const refresh = () => bump()
    editor.on('transaction', refresh)
    return () => editor.off('transaction', refresh)
  }, [editor, bump])

  // Reset the document only when the value comes from outside (record switch, form reset)
  useEffect(() => {
    if (!editor || value === lastEmitted.current) return
    lastEmitted.current = value
    editor.commands.setContent(normalizeRichText(value))
  }, [value, editor])

  if (!editor) {
    return (
      <div className="min-h-[3rem] animate-pulse rounded-xl border border-slate-200 bg-white/60" />
    )
  }

  const chain = () => editor.chain().focus()
  const can = editor.can()
  const isActive = (name, attrs) => editor.isActive(name, attrs)

  const setLink = () => {
    const previous = editor.getAttributes('link').href || ''
    const url = window.prompt('Link URL (leave empty to remove)', previous || 'https://')
    if (url === null) return
    if (!url.trim()) {
      chain().extendMarkRange('link').unsetLink().run()
      return
    }
    chain().extendMarkRange('link').setLink({ href: url.trim() }).run()
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm transition focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-500/25">
      <div className="flex flex-wrap items-center gap-0.5 border-b border-slate-200 bg-slate-50/80 px-2 py-1.5">
        <ToolbarButton label="Bold" active={isActive('bold')} onClick={() => chain().toggleBold().run()}>
          <Bold className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Italic" active={isActive('italic')} onClick={() => chain().toggleItalic().run()}>
          <Italic className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Underline" active={isActive('underline')} onClick={() => chain().toggleUnderline().run()}>
          <Underline className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Strikethrough" active={isActive('strike')} onClick={() => chain().toggleStrike().run()}>
          <Strikethrough className="h-4 w-4" />
        </ToolbarButton>

        <Divider />

        <ToolbarButton label="Heading 2" active={isActive('heading', { level: 2 })} onClick={() => chain().toggleHeading({ level: 2 }).run()}>
          <Heading2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Heading 3" active={isActive('heading', { level: 3 })} onClick={() => chain().toggleHeading({ level: 3 }).run()}>
          <Heading3 className="h-4 w-4" />
        </ToolbarButton>

        <Divider />

        <ToolbarButton label="Bullet list" active={isActive('bulletList')} onClick={() => chain().toggleBulletList().run()}>
          <List className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Numbered list" active={isActive('orderedList')} onClick={() => chain().toggleOrderedList().run()}>
          <ListOrdered className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Quote" active={isActive('blockquote')} onClick={() => chain().toggleBlockquote().run()}>
          <Quote className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Code block" active={isActive('codeBlock')} onClick={() => chain().toggleCodeBlock().run()}>
          <Code2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Divider" onClick={() => chain().setHorizontalRule().run()}>
          <Minus className="h-4 w-4" />
        </ToolbarButton>

        <Divider />

        <ToolbarButton label="Add link" active={isActive('link')} onClick={setLink}>
          <Link2 className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Remove link"
          disabled={!isActive('link')}
          onClick={() => chain().extendMarkRange('link').unsetLink().run()}
        >
          <Unlink className="h-4 w-4" />
        </ToolbarButton>

        <span className="ml-auto flex items-center gap-0.5">
          <ToolbarButton label="Undo" disabled={!can.undo()} onClick={() => chain().undo().run()}>
            <Undo2 className="h-4 w-4" />
          </ToolbarButton>
          <ToolbarButton label="Redo" disabled={!can.redo()} onClick={() => chain().redo().run()}>
            <Redo2 className="h-4 w-4" />
          </ToolbarButton>
        </span>
      </div>

      <div className="max-h-[28rem] overflow-y-auto">
        <EditorContent editor={editor} style={{ ['--editor-min-height']: `${minHeight}px` }} />
      </div>
    </div>
  )
}
