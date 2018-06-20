import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './index.less'

export class BoardCardItem extends Component {
  static propTypes = {
    cardInfo: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }),
    boardId: PropTypes.string.isRequired
  }

  render () {
    const { id, title } = this.props.cardInfo

    const { boardId } = this.props

    const linkAdd = `/app/board/${boardId}/card/${id}`

    return (
      <div
        className="BoardCardItem"
      >
        <Link to={linkAdd} className="BoardCardItem__wrap">
          <div className="BoardCardItem__title">
            <p> { title } </p> 
          </div>
        </Link>
      </div>
    )
  }
}

export default BoardCardItem
