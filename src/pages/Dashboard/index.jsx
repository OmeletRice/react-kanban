import React from 'react'
import { Layout, Row } from 'antd'
import Header from 'components/global/Header'

const { Content } = Layout

class Dashboard extends React.Component {
  render () {
    return (
      <Layout>
        <Header>
          this is Header
        </Header>
        <Content>
          <Row>
            this is Default Boards Content, Board Component
          </Row>
          <Row>
            this is Group Boards Content, BoardGroup Component
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default Dashboard
