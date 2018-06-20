import React from 'react'
import PropTypes from 'prop-types'
import { Col, Icon } from 'antd'

import './index.less'

const BoardAddit = (props) => {

  const handleAddit = () => {
    const groupName = props.name
    console.log('addit click to', groupName)
  }

  return (
    <Col xs={24} sm={12} md={8} lg={6}
      className="BoardItem BoardAddit">
      <div className="BoardItem__wrap">
        <div className="BoardItem__content"
        onClick={ handleAddit }
        >
          <Icon type="plus" />
        </div>
      </div>
    </Col>
  )
}

BoardAddit.propTypes = {
  name: PropTypes.string
}

export default BoardAddit
