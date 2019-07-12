import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos, findTodo } from '../../actions/ActionCreators';
import Todo from './Todo';

export class TodoList extends Component {
  getTodos = () => {
    this.props.getTodos();
  };

  componentDidMount() {
    this.props.getTodos();
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  findTodo = event => {
    const TodoTitle = event.target.query;
    event.preventDefault();

    const TodoByTitleValue = TodoTitle.value;
    const result = this.props.todos.find(todo =>
      todo.title.includes(TodoByTitleValue)
    );

    let finalResult = [];
    finalResult = finalResult.concat(result);
    this.props.findTodo(finalResult);
  };

  goBack = () => {
    this.props.getTodos();
  };

  render() {
    return (
      <div className="list-of-todos">
        <div className="outside-of-form">
          <div className="input-wrapper">
            <input
              onChange={this.onChangeHandler}
              name="query"
              placeholder="Search Todo by Title"
            />
            <div className="frequent-button-wrapper2">
              <button className="frequent-button" type="submit">
                Search
              </button>
            </div>
          </div>
          <form className="form-with-buttons" onSubmit={this.findTodo}>
            <div className="frequent-button-wrapper3">
              <button
                className="frequent-button"
                onClick={this.goBack}
                type="submit"
              >
                Home
              </button>
            </div>
            <button className="frequent-button" onClick={this.getTodos}>
              Get Todos
            </button>
          </form>
        </div>
        {this.props.todos &&
          this.props.todos.map(todo => {
            return (
              <Todo
                id={todo.id}
                key={todo.id}
                todo={todo.title}
                todoTask={todo.task}
                setDate={todo.setDate}
                completed={todo.completed}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.requestPending.todos
  };
};

export default connect(
  mapStateToProps,
  { getTodos, findTodo }
)(TodoList);
