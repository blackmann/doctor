import { ContentEditable } from '@lexical/react/LexicalContentEditable'
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin'
import { LexicalComposer } from '@lexical/react/LexicalComposer'
import React from 'react'
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin'
import ToolbarPlugin from './ToolbarPlugin'
import getEditorConfig from '../lib/editor-config'
import styles from './Editor.module.css'

const config = getEditorConfig()

function Editor() {
  return (
    <LexicalComposer initialConfig={config}>
      <ToolbarPlugin />
      <div className={styles.editorWrapper}>
        <RichTextPlugin
          contentEditable={
            <div className={styles.editor}>
              <ContentEditable />
            </div>
          }
          placeholder={
            <p className={styles.placeholder}>Start typing something</p>
          }
        />
        <HistoryPlugin />
      </div>
    </LexicalComposer>
  )
}

export default Editor
