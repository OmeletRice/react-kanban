import React from 'react'
import { Layout, Row } from 'antd'
import BoardsContent from 'components/BoardsContent'
import BoardAddit from 'components/BoardAddit'
import './index.less'
import GlobalLayout from 'layout/GlobalLayout'
// mock
import DashboardData from '@/service/mock/dashboard'

const { Content } = Layout

class Dashboard extends React.Component {
  constructor (props) {
    super()
    this.props = props
    this.state = {
      groups: DashboardData.groups,
      boards: DashboardData.boards
    }
  }

  render () {

    let boards = this.props.boards || this.state.boards
    let groups = this.props.groups || this.state.groups

    const defaultItem = boards.filter(board => {
      return board.group === null
    })

    return (
      <GlobalLayout>
        <Content>
          <Row className="Dashboard__default-boards">
            {defaultItem.length !== 0 ?
              <BoardsContent
                name="Default board"
                type="Board"
                description="This is default boards"
                boards={defaultItem}
              /> : <BoardAddit />}
          </Row>

          { groups.length !== 0 && groups.map(group => {
              return (
                <Row className="Dashboard__group"
                  key={group.id}
                >
                  <BoardsContent
                    name={group.name}
                    type={group.type}
                    description={group.description}
                    boards={boards}
                  />
                </Row>
              )
            })
          }
        </Content>
      </GlobalLayout>
    )
  }
}

export default Dashboard
