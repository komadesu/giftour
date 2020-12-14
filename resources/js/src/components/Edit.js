import React, { Component } from 'react'

class Edit extends Component {

  appearEditPopup(e) {
    const target = e.target.nextSibling
    if (!target.classList.contains('appear-popup')) {
      target.classList.add('appear-popup')
    } else {
      target.classList.remove('appear-popup')
    }
  }
  handleDelete(giftId) {
  }


  render() {
    const { giftId } = this.props

    return (
      <div className="edit">
        <span className="edit__popup-btn" onClick={this.appearEditPopup}>・・・</span>
        <div className="edit__popup">
          <div className="edit__btn update" onClick={this.toUpdate}>
            <span>編集</span>
            <img src="../storage/images/edit.png" />
          </div>
          <div className="edit__btn delete" onClick={this.handleDelete(giftId)}>
            <span>削除</span>
            <img src="../storage/images/trash.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Edit
