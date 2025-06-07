"use client"

import * as React from "react"
import { useEditor, EditorContent, BubbleMenu } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Heading from "@tiptap/extension-heading"
import Link from "@tiptap/extension-link"
import Image from "@tiptap/extension-image"
import Placeholder from "@tiptap/extension-placeholder"
import TextAlign from "@tiptap/extension-text-align"
import Underline from "@tiptap/extension-underline"
import TextStyle from "@tiptap/extension-text-style"
import Color from "@tiptap/extension-color"
import Highlight from "@tiptap/extension-highlight"
import Table from "@tiptap/extension-table"
import TableRow from "@tiptap/extension-table-row"
import TableCell from "@tiptap/extension-table-cell"
import TableHeader from "@tiptap/extension-table-header"
import CodeBlock from "@tiptap/extension-code-block"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"
import { Toggle } from "@/components/ui/toggle"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Bold, Italic, UnderlineIcon, Strikethrough, Code, Quote, List, ListOrdered, AlignLeft, AlignCenter, AlignRight, AlignJustify, Heading1, Heading2, Heading3, LinkIcon, Undo, Redo, TableIcon, CheckSquare, Highlighter, Palette } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ImageUploadDialog } from "./image-upload-dialog"

interface EditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

const headingLevels = [
  { label: "Heading 1", value: "1", icon: Heading1 },
  { label: "Heading 2", value: "2", icon: Heading2 },
  { label: "Heading 3", value: "3", icon: Heading3 },
]

const alignmentOptions = [
  { label: "Left", value: "left", icon: AlignLeft },
  { label: "Center", value: "center", icon: AlignCenter },
  { label: "Right", value: "right", icon: AlignRight },
  { label: "Justify", value: "justify", icon: AlignJustify },
]

const colors = [
  { label: "Default", value: "inherit" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Red", value: "red" },
  { label: "Green", value: "green" },
  { label: "Blue", value: "blue" },
]

export function Editor({ value, onChange, placeholder = "Write something..." }: EditorProps) {
  const [linkUrl, setLinkUrl] = React.useState("")
  const [imageUrl, setImageUrl] = React.useState("")

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        heading: false,
        paragraph: {
          HTMLAttributes: {
            class: "whitespace-pre-wrap my-4",
          },
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-primary underline underline-offset-4 hover:text-primary/80",
        },
      }),
      Image.configure({
        HTMLAttributes: {
          class: "rounded-lg border border-border",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Underline,
      TextStyle,
      Color,
      Highlight.configure({
        multicolor: true,
      }),
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      CodeBlock.configure({
        HTMLAttributes: {
          class: "rounded-md bg-muted p-4 font-mono whitespace-pre-wrap my-4",
        },
      }),
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
    ],
    content: value,
    onUpdate: ({ editor }) => {
      const processedHtml = editor
        .getHTML()
        .replace(
          /<p class="whitespace-pre-wrap my-4">(.*?)<\/p>/g,
          (match, content) => `<p class="whitespace-pre-wrap my-2">${content.trim()}</p>\n\n`,
        )
      onChange(processedHtml)
    },
    parseOptions: {
      preserveWhitespace: true,
    },
  })

  // Add this useEffect to update editor content when value changes
  React.useEffect(() => {
    if (editor && value) {
      // Only update if the content is different to avoid cursor jumping
      if (editor.getHTML() !== value) {
        editor.commands.setContent(value)
      }
    }
  }, [editor, value])

  if (!editor) {
    return null
  }

  const addTable = () => {
    editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div className="rounded-lg border border-input bg-background">
        <div className="flex flex-wrap gap-1 border-b border-border p-1">
          <div className="flex items-center gap-1 pr-2 border-r border-border">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().undo().run()}
                  disabled={!editor.can().undo()}
                >
                  <Undo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Undo</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => editor.chain().focus().redo().run()}
                  disabled={!editor.can().redo()}
                >
                  <Redo className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Redo</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-1 pr-2 border-r border-border">
            <Select
              value={editor.isActive("heading") ? editor.getAttributes("heading").level : ""}
              onValueChange={(value) => {
                if (value) {
                  editor
                    .chain()
                    .focus()
                    .toggleHeading({ level: Number.parseInt(value) as 1 | 2 | 3 })
                    .run()
                }
              }}
            >
              <SelectTrigger className="h-8 w-[120px]">
                <SelectValue placeholder="Text style" />
              </SelectTrigger>
              <SelectContent>
                {headingLevels.map(({ label, value, icon: Icon }) => (
                  <SelectItem key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-1 pr-2 border-r border-border">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("bold")}
                  onPressedChange={() => editor.chain().focus().toggleBold().run()}
                >
                  <Bold className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Bold</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("italic")}
                  onPressedChange={() => editor.chain().focus().toggleItalic().run()}
                >
                  <Italic className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Italic</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("underline")}
                  onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
                >
                  <UnderlineIcon className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Underline</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("strike")}
                  onPressedChange={() => editor.chain().focus().toggleStrike().run()}
                >
                  <Strikethrough className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Strikethrough</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-1 pr-2 border-r border-border">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("bulletList")}
                  onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
                >
                  <List className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Bullet List</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("orderedList")}
                  onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
                >
                  <ListOrdered className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Numbered List</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("taskList")}
                  onPressedChange={() => editor.chain().focus().toggleTaskList().run()}
                >
                  <CheckSquare className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Task List</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-1 pr-2 border-r border-border">
            {alignmentOptions.map(({ label, value, icon: Icon }) => (
              <Tooltip key={value}>
                <TooltipTrigger asChild>
                  <Toggle
                    size="sm"
                    pressed={editor.isActive({ textAlign: value })}
                    onPressedChange={() => editor.chain().focus().setTextAlign(value).run()}
                  >
                    <Icon className="h-4 w-4" />
                  </Toggle>
                </TooltipTrigger>
                <TooltipContent>Align {label}</TooltipContent>
              </Tooltip>
            ))}
          </div>

          <div className="flex items-center gap-1 pr-2 border-r border-border">
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("blockquote")}
                  onPressedChange={() => editor.chain().focus().toggleBlockquote().run()}
                >
                  <Quote className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Quote</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Toggle
                  size="sm"
                  pressed={editor.isActive("codeBlock")}
                  onPressedChange={() => editor.chain().focus().toggleCodeBlock().run()}
                >
                  <Code className="h-4 w-4" />
                </Toggle>
              </TooltipTrigger>
              <TooltipContent>Code Block</TooltipContent>
            </Tooltip>
          </div>

          <div className="flex items-center gap-1">
            <Popover>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <Toggle size="sm" pressed={editor.isActive("link")}>
                        <LinkIcon className="h-4 w-4" />
                      </Toggle>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Link</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <PopoverContent className="w-80" align="start">
                <div className="flex space-x-2">
                  <Input placeholder="Paste link" value={linkUrl} onChange={(e) => setLinkUrl(e.target.value)} />
                  <Button
                    size="sm"
                    onClick={() => {
                      if (linkUrl) {
                        editor.chain().focus().setLink({ href: linkUrl }).run()
                      }
                      setLinkUrl("")
                    }}
                  >
                    Add
                  </Button>
                </div>
              </PopoverContent>
            </Popover>

            <ImageUploadDialog
              onImageUploaded={(url) => {
                editor.chain().focus().setImage({ src: url }).run()
              }}
            />

            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="sm" onClick={addTable}>
                  <TableIcon className="h-4 w-4" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Insert Table</TooltipContent>
            </Tooltip>

            <Popover>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <Toggle size="sm">
                        <Palette className="h-4 w-4" />
                      </Toggle>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Text Color</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <PopoverContent className="w-40" align="start">
                <div className="grid gap-1">
                  {colors.map(({ label, value }) => (
                    <Button
                      key={value}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => editor.chain().focus().setColor(value).run()}
                    >
                      <div
                        className="mr-2 h-4 w-4 rounded-full border"
                        style={{ backgroundColor: value === "inherit" ? "currentColor" : value }}
                      />
                      {label}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>

            <Popover>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <PopoverTrigger asChild>
                      <Toggle size="sm">
                        <Highlighter className="h-4 w-4" />
                      </Toggle>
                    </PopoverTrigger>
                  </TooltipTrigger>
                  <TooltipContent>Highlight</TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <PopoverContent className="w-40" align="start">
                <div className="grid gap-1">
                  {colors.map(({ label, value }) => (
                    <Button
                      key={value}
                      variant="ghost"
                      className="justify-start"
                      onClick={() => editor.chain().focus().toggleHighlight({ color: value }).run()}
                    >
                      <div
                        className="mr-2 h-4 w-4 rounded-full border"
                        style={{ backgroundColor: value === "inherit" ? "transparent" : value }}
                      />
                      {label}
                    </Button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <BubbleMenu editor={editor} tippyOptions={{ duration: 100 }}>
          <div className="flex items-center gap-1 rounded-md border bg-background p-1 shadow-md">
            <Toggle
              size="sm"
              pressed={editor.isActive("bold")}
              onPressedChange={() => editor.chain().focus().toggleBold().run()}
            >
              <Bold className="h-4 w-4" />
            </Toggle>
            <Toggle
              size="sm"
              pressed={editor.isActive("italic")}
              onPressedChange={() => editor.chain().focus().toggleItalic().run()}
            >
              <Italic className="h-4 w-4" />
            </Toggle>
            <Toggle
              size="sm"
              pressed={editor.isActive("strike")}
              onPressedChange={() => editor.chain().focus().toggleStrike().run()}
            >
              <Strikethrough className="h-4 w-4" />
            </Toggle>
          </div>
        </BubbleMenu>

        <EditorContent
          editor={editor}
          className={cn(
            "min-h-[300px] w-full overflow-hidden rounded-b-lg px-3 py-2",
            "prose prose-stone dark:prose-invert max-w-none",
            "prose-p:my-4 prose-p:whitespace-pre-wrap",
            "prose-pre:whitespace-pre-wrap prose-pre:my-4 prose-pre:p-4",
            "prose-blockquote:pl-4 prose-blockquote:border-l-2 prose-blockquote:my-4",
            "prose-ul:pl-8 prose-ul:my-4 prose-ol:pl-8 prose-ol:my-4",
            "prose-li:my-2",
            "prose-headings:font-bold prose-headings:tracking-tight prose-headings:my-2",
          )}
        />
      </div>
    </TooltipProvider>
  )
}
