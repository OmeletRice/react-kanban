import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './index.less'

class Header extends React.Component {
  constructor (props) {
    super()
    this.props = props
  }

  render () {
    const {
      icon,
      title,
      description
    } = this.props
    return (
      <div className="BoardsHeading">
        <div className="BoardsHeading__logo">
          <Icon type={ icon || 'book' } />
        </div>
        <div className="BoardsHeading__detail">
          {
            title &&
            <h1 className="BoardsHeading__title"> { title } </h1>
          }
          {
            description &&
            <p className="BoardsHeading__description"> { description } </p>
          }
          { this.props.children }
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
}

export default Header
