import React from "react"
import { connect } from "react-redux";

import Search from "./Search"
import { readGifts } from "../actions"

class Timeline extends React.Component {
  componentDidMount() {
    this.props.readGifts();
  }

  render() {
    return (
      <div className="post">
        <Search />
      </div>
    );
  }
}

const mapDispatchToProps = { readGifts };
export default connect(null, mapDispatchToProps)(Timeline);