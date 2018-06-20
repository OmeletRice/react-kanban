import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import './index.less'

const BoardHeader = (props) => {
  const { title, description } = props

  return (
    <div className="BoardHeader">
      <div className="BoardHeader__detail">
        <div className="BoardHeader__detail-title">
          <h2>{ title }</h2>
        </div>
        <div className="BoardHeader__detail-description">
          <p>{ description } </p>
        </div>
      </div>
      <div className="BoardHeader__operation">
        <div className="BoardHeader__operation-setting">
          <Icon type="edit" />
        </div>
        <div className="BoardHeader__operation-delete">
          <Icon type="delete" />
        </div>
      </div>
    </div>
  )
}

BoardHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

export default BoardHeader
