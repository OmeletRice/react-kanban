import React from 'react'
import PropTypes from 'prop-types'
import './index.less'
import { Col } from 'antd'

import { Link } from 'react-router-dom'

const BoardItem = (props) => {

  const handleItemClick = () => {
    console.log('click board id', props.id)
  }

  return (
    <Col xs={24} sm={12} md={8} lg={6}
      className="BoardItem">
      <div className="BoardItem__wrap">
        <Link to={`/app/board/${props.id}`}>
          <div className="BoardItem__content"
          onClick={ handleItemClick }
          >
            <h2 className="BoardItem__content-title">{ props.title }</h2>
            { props.description &&
              <p className="BoardItem__content-description"> {props.description} </p>
            }
          </div>
        </Link>
      </div>
    </Col>
  )
}

BoardItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default BoardItem
