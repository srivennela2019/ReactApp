import React, { Component } from "react";
import Panel from "./Panel";
import { Prompt } from "react-router-dom";
import serializeForm from "form-serialize";
import {add_user} from "../actions/user";
import { connect } from "react-redux";
class Create extends Component {
  state = {
    user: "",
    location: "",
    valid: true
  };
  onChange = event => {
    //console.log(event.target.value);
    event.persist();
    this.setState(state => {
      return {
        [event.target.name]: [event.target.value],
        valid: false
      };
    });
  };
  saveUser = event => {
    event.preventDefault();
    this.props.dispatch(add_user(serializeForm(event.target, { hash: true })));
    this.setState(
      {
        valid: true
      },
      () => {
        this.props.history.push("/users");
      }
    );
  };
  render() {
    const elem = (
      <div>
        <Prompt when={!this.state.valid} message="you will lose your data" />
        <form onSubmit={this.saveUser}>
          <div className="form-group">
            <label className="control-label">User</label>
            <input
              type="text"
              className="form-control"
              placeholder="username"
              name="user"
            />
          </div>
          <div className="form-group">
            <label className="control-label">Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="location"
              name="location"
            />
          </div>
          <button className="btn btn-primary">Save</button>
        </form>
      </div>
    );
    return <Panel head={"create"} body={elem} />;
  }
}
function mapStateToProps() {
  return {};
}
export default Create;
