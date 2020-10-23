import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  TextField,
  Typography,
} from "@material-ui/core";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.val.title,
      desc: this.props.val.desc,
      edit: false,
    };
  }

  render() {
    const editmode = this.state.edit !== true ? "none" : "";
    const noteditmode = this.state.edit === true ? "none" : "";
    return (
      <>
        <Card key={this.props.val.id}>
          <Checkbox
            checked={this.props.val.done === true ? true : false}
            onChange={(event) => {
              this.props.check(event.target.checked, this.props.val.id);
            }}
          />

          <TextField
            style={{ display: editmode }}
            disabled={this.props.val.done === true ? true : false}
            variant="outlined"
            value={this.state.title}
            onChange={(event) => {
              this.setState({ title: event.target.value });
            }}
            color="secondary"
            label="title"
          />
          <TextField
            style={{ display: editmode }}
            disabled={this.props.val.done === true ? true : false}
            variant="outlined"
            value={this.state.desc}
            onChange={(event) => {
              this.setState({ desc: event.target.value });
            }}
            color="secondary"
            label="discription"
          />
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            style={{ display: noteditmode }}
          >
            TITLE:
            <br />
            {this.props.val.title}
          </Typography>
          <Typography
            gutterBottom
            variant="body1"
            component="p"
            style={{ display: noteditmode }}
          >
            Description:
            <br />
            {this.props.val.desc}
          </Typography>
          <ButtonGroup>
            <Button
              style={{ display: editmode }}
              variant="contained"
              color="primary"
              onClick={() => {
                this.props.editTodoDone({
                  ...this.state,
                  id: this.props.val.id,
                });
                this.setState({ edit: false });
              }}
            >
              Done
            </Button>
            <Button
              style={{ display: noteditmode }}
              variant="contained"
              color="primary"
              onClick={() => this.setState({ edit: true })}
            >
              Edit
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => this.props.deleteTodo(this.props.val.id)}
            >
              Delete
            </Button>
          </ButtonGroup>
        </Card>
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
    editTodoDone: (data) => dispach({ type: "EDIT_TODO", payload: data }),
    check: (data, id) => dispach({ type: "CHECKED", check: data, id: id }),
  };
};
export default connect(mapStateToProps, mapDispachToProps)(Main);
