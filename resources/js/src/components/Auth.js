import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

// import { readUser } from "../actions/user";

class Auth extends React.Component {
  // componentDidMount() {
  //   this.props.readUser();
  // }

  render() {
    const { id } = this.props;

    return id ? this.props.children : <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  id: state.user.id
});
// const mapDispatchToProps = { readUser };
export default connect(mapStateToProps, null)(Auth);
