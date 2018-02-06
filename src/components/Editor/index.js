import React from 'react'
import Tools from '../Tools'
import { Editor, EditorState } from 'draft-js';
import { inlineStyleMap } from './config'
import styles from './index.less'
import 'draft-js/dist/Draft.css'

const FreshesDraft = ({ editorState, onChange }) => {
  return (
    <div className={styles.container}>
      <Tools
        editorState={editorState}
        onChange={onChange}
      />
      <div className={styles.content}>
        <Editor
          customStyleMap={inlineStyleMap}
          editorState={editorState}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default FreshesDraft
