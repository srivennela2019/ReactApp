import React, { Component } from "react";
import { Route,Redirect } from "react-router-dom";
class PrivateRoute extends Component {
  render() {
    const content =this.props.isLoggedIn?<Route {...this.props} />:<Redirect to="/"/>;
    return content;
  }
}
export default PrivateRoute;
