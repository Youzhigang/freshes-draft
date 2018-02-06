import dva from 'dva'
import { Router, Route, Switch } from 'dva/router'
import draft from './models/draft'
import Example from './Example'
import 'antd/dist/antd.css'

// 1. Initialize
const app = dva()

// 2. Model
// Remove the comment and define your model.
app.model(draft)

// 3. Router
app.router(({ history }) =>
  <Router history={history}>
    <Switch>
      <Route path="/" exact component={Example} />
    </Switch>
  </Router>
);

// 4. Start
app.start('#root')
