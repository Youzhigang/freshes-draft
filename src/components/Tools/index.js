import React, { Component } from 'react'
import InlineStyleBtn from './InlineStyleBtn'
import ColorBtn from './ColorBtn'
import INLINE_STYLE_BTNS from './InlineStyleBtn/config'
import styles from './index.less'

const Tools = ({ editorState, onChange }) => {
  return (
    <div className={styles.tools}>
      {INLINE_STYLE_BTNS.map((data, index) => {
        return (
          <InlineStyleBtn
            editorState={editorState}
            onChange={onChange}
            data={data}
            key={index}
          />
        )
      })}
      <ColorBtn
        editorState={editorState}
        onChange={onChange}
      />
    </div>
  )
}

export default Tools
