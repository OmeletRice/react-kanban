import React, { PureComponent } from 'react'
import { Col } from 'antd'

class GlobalLayout extends PureComponent {
  render() {
    return (
      <div className="GlobalLayout">
        <Col
          xs={24}
          sm={{ span: 22, offset: 1 }}
          md={{ span: 20, offset: 2 }}
          lg={{ span: 16, offset: 4 }}>
          { this.props.children }
        </Col>
      </div>
    )
  }
}

export default GlobalLayout
