import React, { Component } from 'react'
import InlineStyleBtn from './InlineStyleBtn'
import { INLINE_STYLES } from './enum'
import styles from './index.less'

class Tools extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <div className={styles.tools}>
        {INLINE_STYLES.map((data, index) => {
          return (
            <InlineStyleBtn
              editorState={this.props.editorState}
              onChange={this.props.onChange}
              data={data}
              key={index}
            />
          )
        })}
      </div>
    )
  }
}

export default Tools
