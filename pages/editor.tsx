'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { type BlockNoteEditor, type PartialBlock } from '@blocknote/core'

export default function EditorPage (): React.JSX.Element {
  const [blocks, setBlocks] = useState<PartialBlock[]>([])

  const onEditorContentChange = (editor: BlockNoteEditor): void => {
    localStorage.setItem('blocks', JSON.stringify(editor.topLevelBlocks))
  }

  useEffect(() => {
    const blockString = localStorage.getItem('blocks')
    if (blockString == null) return
    const blocks = JSON.parse(blockString)
    setBlocks(blocks)
  }, [])

  const Editor = dynamic(async () => await import('../components/Editor'), { ssr: false })

  return (
    <>
      <Editor onEditorContentChange={onEditorContentChange} initialBlocks={blocks} />
    </>
  )
}
