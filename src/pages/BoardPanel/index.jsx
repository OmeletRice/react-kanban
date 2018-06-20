import React, { PureComponent } from 'react'
import BoardHeader from 'components/BoardHeader'
import Sortable from 'utils/Sortable'
import BoardListItem from 'components/BoardListItem'
import './index.less'
// import PropTypes from 'prop-types'

import { Route } from 'react-router-dom'
import BoardCardDetail from 'components/BoardCardDetail'

// mock data
import Board from '@/service/mock/board'
import List from '@/service/mock/lists'

class BoardPanel extends PureComponent {
  static propTypes = {}

  constructor (props) {
    super(props)
    this.state = {
      board: Board,
      list: List
    }
  }

  render () {
    const { title, description } = this.state.board

    const { board, list } = this.state

    const sortableOptions = {
      animation: 150,
      handle: '.BoardListItem__header-swap'
    }

    const path = this.props.match.path || null
    
    return (
      <div className="BoardPanel">
        <BoardHeader title={title} description={description} />
        <div className="BoardPanel__boardList">
          { !!list && !!Array.isArray(list) &&
            <Sortable
              className="BoardPanel__Sortable"
              options={sortableOptions}
            >
              {
                list.map(item => (
                  <BoardListItem
                    key={item.id}
                    boardId={board.id}
                    listInfo={item}
                  />
                ))
              }
            </Sortable>
          }
        </div>
        { !!path && <Route path={ `${path}/card/:cardId` } component={ BoardCardDetail } /> }
    </div>
    )
  }
}

export default BoardPanel
