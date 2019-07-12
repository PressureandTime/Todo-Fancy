import React, { Component } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  deleteTodo,
  getTodos,
  markComplete
} from '../../actions/ActionCreators';

export class Todo extends Component {
  markComplete = id => {
    this.props.markComplete(id).then(() => this.props.getTodos());
  };

  deleteTodo = id => {
    this.props.deleteTodo(id).then(() => this.props.getTodos());
  };

  render() {
    return (
      <div className="todo-container">
        <div>
          <p
            className={`${this.props.completed == 1 ? 'completed' : ''}`}
            onClick={() => this.markComplete(this.props.id)}
          >
            Title: {this.props.todo}
          </p>
          <p
            className={`${this.props.completed == 1 ? 'completed' : ''}`}
            onClick={() => this.markComplete(this.props.id)}
          >
            Task: {this.props.todoTask}
          </p>
          <p
            className={`${this.props.completed == 1 ? 'completed' : ''}`}
            onClick={() => this.markComplete(this.props.id)}
          >
            Date: {this.props.setDate}
          </p>

          <button
            className="update-button"
            onClick={() => this.deleteTodo(this.props.id)}
          >
            Delete
          </button>

          <NavLink to={`/update-todo/${this.props.id}`}>
            <button className="update-button">Update</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    update: state.updateContent
  };
};

export default connect(
  mapStateToProps,
  { deleteTodo, getTodos, markComplete }
)(Todo);
