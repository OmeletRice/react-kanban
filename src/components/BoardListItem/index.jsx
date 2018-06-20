import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import Sortable from 'utils/Sortable'
import './index.less'
import BoardCardItem from 'components/BoardCardItem'

// mock data
import Card from '@/service/mock/cards'

class BoardListItem extends PureComponent {
  static propTypes = {
    listInfo: PropTypes.object.isRequired,
    boardId: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.state = {
      cards: Card
    }
  }

  render () {

    const { listInfo, boardId } = this.props
    const { cards } = this.state

    const SortableOptions = {
      group: 'Conner',
      animation: 200
    }

    const Header = (
      <div className="BoardListItem__header">
        <div className="BoardListItem__header-swap">
          <Icon type="meh-o" />
        </div>
        <div className="BoardListItem__header-title">
          <p> { listInfo.title } </p>
        </div>
        <div className="BoardListItem__header-menu">
          <Icon className="mo-icon" type="ellipsis" />
        </div>
      </div>
    )

    return (
      <div className="BoardListItem">
        <div className="BoardListItem__wrap">
          { Header }
          <div className="BoardListItem__content">
            <Sortable
              className="BoardCard"
              options={SortableOptions}
            >
              { cards.map(item => (
                  <BoardCardItem
                    key={item.id}
                    className="BoardCardItem"
                    boardId={boardId}
                    cardInfo={item}
                  />
                ))
              }
            </Sortable>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardListItem

