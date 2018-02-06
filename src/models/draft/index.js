import { EditorState } from 'draft-js'

export default {
  namespace: 'draft',
  state: {
    editorState: EditorState.createEmpty()
  },
  reducers: {
    onChange (draft, { editorState }) {
      return {
        ...draft,
        editorState
      }
    }
  }
}
