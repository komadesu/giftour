import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { deleteGift } from '../actions/gifts'
import { deleteArchive } from '../actions/archives'

class Edit extends Component {

  appearEditPopup(e) {
    const target = e.target.nextSibling
    if (!target.classList.contains('appear-popup')) {
      target.classList.add('appear-popup')
    } else {
      target.classList.remove('appear-popup')
    }
  }
  async handleDelete(giftId) {
    const result = confirm(`ID${giftId}この投稿を本当に削除してもよろしいですか？`)
    if (result) {
      const { deleteGift, deleteArchive, accessToken } = this.props
      await deleteGift(giftId, accessToken);
      await deleteArchive(giftId);
      // this.props.history.push("/mypage")
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

const mapStateToProps = state => ({
  accessToken: state.auth.access_token
});
const mapDispatchToProps = { deleteGift, deleteArchive };
export default connect(mapStateToProps, mapDispatchToProps)(Edit);