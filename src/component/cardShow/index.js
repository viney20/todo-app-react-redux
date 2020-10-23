import { Button } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import "./index.css";
import Main from "./main";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }
  render() {
    return (
      <>
        <div className="filter">
          <Button
            variant={this.state.filter === "all" ? "contained" : "outlined"}
            onClick={() => this.setState({ filter: "all" })}
            color="primary"
          >
            All
          </Button>
          <Button
            variant={this.state.filter === "active" ? "contained" : "outlined"}
            onClick={() => this.setState({ filter: "active" })}
            color="primary"
          >
            Active
          </Button>
          <Button
            variant={
              this.state.filter === "complete" ? "contained" : "outlined"
            }
            onClick={() => this.setState({ filter: "complete" })}
            color="primary"
          >
            Complete
          </Button>
        </div>
        <div className="uncomplete">
          <ul>
            {this.props.todo.map((el) => {
              if (this.state.filter === "all") {
                return <Main val={el} />;
              } else {
                if (this.state.filter === "complete") {
                  if (el.done === true) {
                    return <Main val={el} />;
                  }
                } else {
                  if (el.done !== true) {
                    return <Main val={el} />;
                  }
                }
              }
            })}
          </ul>
        </div>
        <hr />
        <div className="complete"></div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    todo: state.FormReducer.todo,
  };
};
const mapDispachToProps = (dispach) => {
  return {
    deleteTodo: (id) => dispach({ type: "DELETE_TODO", delete: id }),
    check: (data, id) => dispach({ type: "CHECKED", check: data, id: id }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(index);
