import React from 'react'
import ReactDOM from 'react-dom'

import Router from './router'

import './index.css'

import App from './App'

ReactDOM.render(
  (
    <App>
      { Router }
    </App>
  ),
  document.getElementById('root')
)

// import registerServiceWorker from './registerServiceWorker';
// registerServiceWorker();
