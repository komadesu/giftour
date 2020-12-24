import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Auth extends React.Component {
  render() {
    const { id } = this.props;

    return id ? this.props.children : <Redirect to="/login" />;
  }
}

const mapStateToProps = state => ({
  id: state.user.id
});
export default connect(mapStateToProps, null)(Auth);
