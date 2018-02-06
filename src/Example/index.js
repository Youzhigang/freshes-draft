import React, { Component } from 'react'
import { Collapse } from 'antd'
import Editor from '../containers/Editor'

class Example extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const { Panel } = Collapse
    return (
      <Collapse defaultActiveKey={['0']}>
        <Panel header="freshes-editor" key="0">
          <Editor />
        </Panel>
      </Collapse>
    )
  }
}

export default Example
