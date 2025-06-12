"use client"

import * as React from "react"
import { Editor } from "./editor"
import { Label } from "@/components/ui/label"

interface RichTextEditorProps {
  label?: string
  initialValue?: string
  onChange: (content: string) => void
  placeholder?: string
  disabled?: boolean
}

export function RichTextEditor({
  label,
  initialValue = "",
  onChange,
  placeholder = "Write something...",
  disabled = false,
}: RichTextEditorProps) {
  return (
    <div className="space-y-2">
      {label && <Label>{label}</Label>}
      <div className={disabled ? "opacity-50 pointer-events-none" : ""}>
        <Editor 
          value={initialValue} 
          onChange={onChange} 
          placeholder={placeholder} 
        />
      </div>
    </div>
  )
}
