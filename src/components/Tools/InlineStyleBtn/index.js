import React, { Component } from 'react'
import { RichUtils } from 'draft-js'
import { Button } from 'antd'
import styles from './index.less'

class InlineStyleBtn extends Component {
  constructor (props) {
    super(props)
    this.setInlineStyle = this.setInlineStyle.bind(this)
  }
  setInlineStyle (event) {
    event.preventDefault()
    this.props.onChange(
      RichUtils.toggleInlineStyle(
        this.props.editorState,
        this.props.data.style
      )
    )
  }
  render () {
    const { label, className } = this.props.data
    return (
      <div className={styles.button} onMouseDown={this.setInlineStyle}>
        <Button>
          <div className={styles[className]}>
            {label}
          </div>
        </Button>
      </div>
    )
  }
}

export default InlineStyleBtn
