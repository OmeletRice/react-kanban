import React from 'react'
import { Icon } from 'antd'

class Header extends React.Component {
  constructor (props) {
    super()
    this.props = props
  }

  render () {
    return (
      <div className="om-header">
        <div className="om-header__logo">
          <Icon type={ this.props.icon || 'book' } />
        </div>
        <div className="om-header__title">
          {
            this.props.title && <h1> { this.props.title } </h1>
          }
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default Header
