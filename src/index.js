import dva from 'dva';
import { Router, Route, Switch } from 'dva/router';
import { EditorState } from 'draft-js'
import Example from './containers/Example'
import 'antd/dist/antd.css';

// 1. Initialize
const app = dva();

// 2. Model
// Remove the comment and define your model.
app.model({
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
});

// 3. Router
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Example} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root');
