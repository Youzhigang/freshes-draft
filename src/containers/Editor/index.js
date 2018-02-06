import Editor from '../../components/Editor'
import { connect } from 'dva'

function mapStateToProps ({ draft }) {
  return { draft }
}

const EditorContainer = ({ draft, dispatch }) => {
  const onChange = editorState => {
    dispatch({
      type: 'draft/onChange',
      editorState
    })
  }
  return (
    <Editor
      editorState={draft.editorState}
      onChange={onChange}
    />
  )
}

export default connect(mapStateToProps)(EditorContainer)
