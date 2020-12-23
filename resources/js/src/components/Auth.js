import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { readUser } from "../actions/user";

class Auth extends React.Component {
  componentDidMount() {
    this.props.readUser();
  }

  render() {
    const { user } = this.props;

    return user.isLoggedIn ? this.props.children : <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  user: state.user
});
const mapDispatchToProps = { readUser };
export default connect(mapStateToProps, mapDispatchToProps)(Auth);
