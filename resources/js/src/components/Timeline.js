import React from "react";
import _ from "lodash";
import { connect } from "react-redux";

import Search from "./Search";
import Gift from "./Gift";
import Footer from "./Footer";
import { readGifts } from "../actions/gifts";
import { readBookmarks } from "../actions/bookmarks";

class Timeline extends React.Component {
  componentDidMount() {
    const { userId, accessToken } = this.props

    const searchParams = new URLSearchParams(this.props.history.location.search)
    const opponentGender = searchParams.get('opponentGender')
    const opponentAge = searchParams.get('opponentAge')
    const price = searchParams.get('price')
    const relationship = searchParams.get('relationship')
    const situation = searchParams.get('situation')


    this.props.readGifts(opponentGender, opponentAge, price, relationship, situation);
    if (userId && accessToken) {
      this.props.readBookmarks(userId, accessToken);
    }
  }

  async searchGifts(opponentGender, opponentAge, price, relationship, situation) {
    const { userId, accessToken, readGifts, readBookmarks } = this.props

    if (userId && accessToken) {
      await Promise.all([
        readGifts(opponentGender, opponentAge, price, relationship, situation),
        readBookmarks(userId, accessToken)
      ])

    } else {
      await readGifts(opponentGender, opponentAge, price, relationship, situation)
    }
  }

  render() {
    const { userId, accessToken, readGifts, readBookmarks } = this.props

    return (
      <div className="timeline">

        <Search searchGifts={this.searchGifts.bind(this)} />

        <div className="gifts">
          {_.map(this.props.gifts, gift => (
            <Gift gift={gift} bookmarks={this.props.bookmarks} key={gift.id} />
          ))}
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.access_token,
  userId: state.user.id,
  gifts: state.gifts,
  bookmarks: state.bookmarks
});
const mapDispatchToProps = { readGifts, readBookmarks };
export default connect(mapStateToProps, mapDispatchToProps)(Timeline);
