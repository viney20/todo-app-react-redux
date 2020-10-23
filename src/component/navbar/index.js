import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";

class index extends Component {
  render() {
    return (
      <div className="navbar" style={{}}>
        <h2 className="logo">TODO'S</h2>
        <h2 className="login">
          {this.props.login === "true" ? "login" : "logout"}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    login: state.FormReducer.login,
  };
};
export default connect(mapStateToProps)(index);
