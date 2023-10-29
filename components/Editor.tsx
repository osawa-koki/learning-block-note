'use client'
import React from 'react'
import { type PartialBlock, type BlockNoteEditor } from '@blocknote/core'
import { BlockNoteView, useBlockNote } from '@blocknote/react'
import '@blocknote/core/style.css'

interface Props {
  onEditorContentChange: (editor: BlockNoteEditor) => void
  initialBlocks: PartialBlock[]
}

export default function Editor (props: Props): React.JSX.Element {
  const { onEditorContentChange, initialBlocks } = props

  // Creates a new editor instance.
  const editor: BlockNoteEditor | null = useBlockNote({
    onEditorContentChange,
    initialContent: initialBlocks
  })

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />
}
