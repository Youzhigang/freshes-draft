import Editor from '../../components/Editor'
import { connect } from 'dva'

function mapStateToProps (state) {
  return { draft: state.draft }
}

const Example = ({ draft, dispatch }) => {
  const onChange = editorState => {
    dispatch({
      type: 'draft/onChange',
      editorState
    })
  }
  return (
    <div>
      <Editor
        editorState={draft.editorState}
        onChange={onChange}
      />
    </div>
  );
}

const ExamplePage = connect(mapStateToProps)(Example);

export default ExamplePage
