import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'

import 'normalize.css'
import './index.css'
import 'antd/dist/antd.css'

import AppBoardWrapper from 'pages/AppBoardWrapper'
import App from './App'

ReactDOM.render(
  (
    <App>
      <HashRouter>  
        <Switch>
          <Route path="/app" component={ AppBoardWrapper } />
          <Redirect to="/auth" />
        </Switch>
      </HashRouter>
    </App>
  ),
  document.getElementById('root')
)

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
