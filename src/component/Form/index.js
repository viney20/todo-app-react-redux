import React, { Component } from "react";
import { Button, Card, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import "./index.css";

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      id: "",
      done: "",
    };
  }
  render() {
    return (
      <Card className="MuiCard-rootS">
        <TextField
          className="item"
          variant="outlined"
          label="Title"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <TextField
          className="item"
          variant="outlined"
          label="Description"
          rows="5"
          value={this.state.desc}
          onChange={(event) => this.setState({ desc: event.target.value })}
        />
        <Button
          className="item"
          variant="contained"
          color="primary"
          disabled={
            this.state.title.length !== 0 && this.state.desc.length !== 0
              ? false
              : true
          }
          onClick={() => {
            this.props.addTodo({
              ...this.state,
              id: Date.now(),
              done: false,
            });
            this.setState({
              title: "",
              desc: "",
              id: "",
              done: "",
            });
          }}
        >
          ADD TODO
        </Button>
      </Card>
    );
  }
}

const mapDispachToProps = (dispach) => {
  return {
    addTodo: (data) => dispach({ type: "ADD_TODO", payload: data }),
  };
};

export default connect(null, mapDispachToProps)(index);
