import React from 'react'
import { Switch, Route } from 'react-router-dom'

import DefaultLayout from 'layout/DefaultLayout'
import Dashboard from 'pages/Dashboard'
import BoardPanel from 'pages/BoardPanel'

const AppBoardWrapper = ({ match }) => {
  console.log(match)
  return (
    <div className="AppBoardWrapper">
      <DefaultLayout>
        <Switch>
          <Route path={ `${match.path}/dashboard` } exact component={ Dashboard } />
          <Route path={ `${match.path}/board/:board_id` } component={ BoardPanel } />
        </Switch>
      </DefaultLayout>  
    </div>
  )
} 

export default AppBoardWrapper
