import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Modal, Checkbox, Tag } from 'antd'
import { withRouter } from 'react-router'
import './index.less'

class BoardCardDetail extends Component {
  static propTypes = {
  }

  constructor (props) {
    super(props)
    this.state = {
      visible: true
    }
    this.handleCloseModal = this.handleCloseModal.bind(this)
  }

  handleCloseModal () {
    const that = this
    this.setState({
      visible: false
    })
    if (this.props.match && this.props.history) {
      setTimeout(function () {
        const boardId = that.props.match.params.board_id
        that.props.history.push(`/app/board/${boardId}`)
      }, 300)
    } 
  }

  render() {
    return (
      <Modal
        wrapClassName="BoardCardDetail"
        title="BoardCardDetail"
        width="80%"
        footer={null}
        visible={ this.state.visible }
        onCancel={ this.handleCloseModal }
      >
        <div className="BoardCardDetailBody">
        
          <div className="BoardCardDetailBody__left">

            <div className="BoardCardDetailBody-title-area">
              <Checkbox />
              <span className="BoardCardDetailBody-title is-done">
                BoardCardDetailBody Title
              </span>
            </div>
            <div className="BoardCardDetailBody-tag-group">
              <Tag>Body</Tag>
            </div>
          </div>

          <div className="BoardCardDetailBody__right">
            <div className="BoardCardDetailBody">
              Right
            </div>
          </div>
        
        </div>
        
        <div className="BoardCardDetailFooter">
          <div className="BoardCardDetailFooter">
          </div>
        </div>

      </Modal>
    )
  }
}

export default BoardCardDetail = withRouter(BoardCardDetail) 
