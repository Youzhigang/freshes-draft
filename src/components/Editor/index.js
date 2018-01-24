import React, { Component } from 'react'
import Tools from '../Tools'
import { Collapse } from 'antd'
import { Editor, EditorState } from 'draft-js';
import styles from './index.less'
import 'draft-js/dist/Draft.css'

class MainEditor extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { Panel } = Collapse
    return (
      <Collapse defaultActiveKey={['0']}>
        <Panel header="freshes-editor" key="0">
          <div className={styles.container}>
            <Tools
              editorState={this.props.editorState}
              onChange={this.props.onChange}
            />
            <div className={styles.content}>
              <Editor
                editorState={this.props.editorState}
                onChange={this.props.onChange}
              />
            </div>
          </div>
        </Panel>
      </Collapse>
    )
  }
}

export default MainEditor
