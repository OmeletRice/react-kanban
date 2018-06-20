import React from 'react'
import { NavLink } from 'react-router-dom'
import './index.less'

const GlobalHeader = () => {
  return (
    <header className="GlobalHeader">
        <div className="GlobalHeader__logo">
        </div>

        <nav className="GlobalHeader__nav">
          <NavLink to="/app/dashboard"
            className="GlobalHeader__nav-item"
            activeClassName="is-active">Dashboard</NavLink>
          <NavLink to="/app/boards"
            className="GlobalHeader__nav-item"
            activeClassName="is-active">All Boards</NavLink>
          <NavLink to="/app/settings/general"
            className="GlobalHeader__nav-item"
            activeClassName="is-active">Settings</NavLink>
          <NavLink to="/app/auth/logout"
            className="GlobalHeader__nav-item"
            activeClassName="is-active">Logout</NavLink>
        </nav>
      </header>
  )
}

export default GlobalHeader
