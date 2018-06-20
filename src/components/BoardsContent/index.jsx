import React, { Component } from 'react'
import PropTypes from 'prop-types'

import BoardsHeading from 'components/BoardsHeading'
import BoardItem from 'components/BoardItem'
import BoardAddit from 'components/BoardAddit'

export class BoardsContent extends Component {
  static propTypes = {
    name: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    type: PropTypes.oneOf([
      'Board',
      'Group'
    ]).isRequired,
    description: PropTypes.string,
    boards: PropTypes.array.isRequired,
  }

  render () {
    const { name, type, description, boards } = this.props

    var showBoards = []
    if (type === 'Board') {
      showBoards = boards.filter(item => {
        return item.group === null
      })
    } else {
      showBoards = boards.filter(item => {
        return item.group !== null && item.group === name
      })
    }

    return (
      <div className="BoardContent">
        <BoardsHeading
          title={name}
          type={type}
          description={description}
        />
        { showBoards && showBoards.map(board => {
            return (
              <BoardItem
                key={board.id}
                title={board.name}
                id={board.id}
                description={board.description}
              />
            )
          }) 
        }
        <BoardAddit name={name}/>
      </div>
    )
  }
}

export default BoardsContent
