import React, { Component } from 'react'
import { Link } from 'react-router-dom'

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
    const result = confirm(`ID${giftId}この投稿を本当に削除してもよろしいですか？`)
    if (result) {
      // appropriate code to delete selected one.
    }
  }


  render() {
    const { giftId } = this.props

    return (
      <div className="edit">
        <span className="edit__popup-btn" onClick={this.appearEditPopup}>・・・</span>
        <div className="edit__popup">
          <Link to={`/update/${giftId}`} className="edit__btn update-btn">
            <span>編集</span>
            <img src="../storage/images/edit.png" />
          </Link>
          <div className="edit__btn delete-btn" onClick={() => this.handleDelete(giftId)}>
            <span>削除</span>
            <img src="../storage/images/trash.png" />
          </div>
        </div>
      </div>
    );
  }
}

export default Edit
