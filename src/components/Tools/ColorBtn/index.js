import React, { Component } from 'react'
import { Dropdown, Menu } from 'antd'
import { Modifier, EditorState } from 'draft-js'
import styles from './index.less'
import colorStyleMap from './config'

class ColorBtn extends Component {
  constructor (props) {
    super(props)
    this.state = {
      color: undefined
    }
    this.handleColorSelect = this.handleColorSelect.bind(this)
    this.setSelectedColor = this.setSelectedColor.bind(this)
    this.clearColorStyle = this.clearColorStyle.bind(this)
    this.applyColorStyle = this.applyColorStyle.bind(this)
  }
  clearColorStyle (editorState) {
    const selectionState = editorState.getSelection()
    const nextContentState = Object.keys(colorStyleMap).reduce(
      (contentState, color) => {
        return Modifier.removeInlineStyle(contentState, selectionState, color)
      },
      editorState.getCurrentContent()
    )
    const nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )
    return nextEditorState
  }
  applyColorStyle (editorState) {
    const selectionState = editorState.getSelection()
    const contentState = editorState.getCurrentContent()
    const nextContentState = Modifier.applyInlineStyle(
      contentState,
      selectionState,
      this.state.color
    )
    const nextEditorState = EditorState.push(
      editorState,
      nextContentState,
      'change-inline-style'
    )
    return nextEditorState
  }
  setSelectedColor (event) {
    event.preventDefault()
    if (this.state.color !== undefined) {
      [
        this.clearColorStyle,
        this.applyColorStyle,
        this.props.onChange
      ]
        .reduce(
        (editorState, handle) => handle(editorState),
        this.props.editorState
        )
    }
  }
  handleColorSelect ({ item }) {
    this.setState({
      color: item.props.value
    })
  }
  render () {
    const menu = (
      <Menu onClick={this.handleColorSelect}>
        {
          Object.keys(colorStyleMap).map((key, index) => {
            const { color } = colorStyleMap[key]
            const style = {
              backgroundColor: color,
              width: '4rem',
              height: '1.2rem',
              border: '1px solid #ccc'
            }
            return (
              <Menu.Item key={index} value={key}>
                <div style={style}></div>
              </Menu.Item>
            )
          })
        }
      </Menu>
    )
    let btnStyle = {}
    if (this.state.color !== undefined) {
      btnStyle = colorStyleMap[this.state.color]
    }
    return (
      <div className={styles.button}>
        <Dropdown.Button overlay={menu} onMouseDown={this.setSelectedColor}>
          <span style={btnStyle}>A</span>
        </Dropdown.Button>
      </div>
    )
  }
}

export default ColorBtn
