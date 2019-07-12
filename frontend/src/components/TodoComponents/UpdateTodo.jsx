import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateTodo, getTodos } from '../../actions/ActionCreators';

export class UpdateTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      task: '',
      setDate: '',
      id: ''
    };
  }

  changeHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    const id = this.props.match.params.todoId;
    if (id) {
      const todo = this.props.todos.find(todo => todo.id === parseInt(id, 10));

      this.setState({ ...todo });
    }
  }

  goBack = () => {
    this.props.history.goBack();
  };

  updateTodo = event => {
    const aTodoTitle = event.target['title'];
    const aTodoTask = event.target['task'];
    const aTodoDate = event.target['setDate'];
    event.preventDefault();

    const newTodo = {
      title: aTodoTitle.value,
      task: aTodoTask.value,
      setDate: aTodoDate.value
    };

    if (aTodoTitle.value && aTodoTask.value && aTodoDate.value) {
      this.props.updateTodo(newTodo, this.state.id).then(() => {
        this.props.history.push('/');
      });
    }

    aTodoTitle.value = '';
    aTodoTask.value = '';
    aTodoDate.value = '';
  };

  render() {
    return (
      <div className="update-todo">
        <h2>Todo Update</h2>
        <form onSubmit={this.updateTodo}>
          <input
            type="text"
            onChange={this.changeHandler}
            name="title"
            placeholder="Title"
            value={this.state.title}
          />
          <input
            type="text"
            onChange={this.changeHandler}
            name="task"
            placeholder="To-Do"
            value={this.state.task}
          />
          <input
            type="date"
            onChange={this.changeHandler}
            name="setDate"
            placeholder="Set Date"
            value={this.state.setDate}
          />

          <button className="update-button" type="submit">
            Update To-Do
          </button>
        </form>
        <button className="goBack-button" onClick={this.goBack} type="submit">
          Home
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: state.requestPending.todos
  };
};

export default connect(
  mapStateToProps,
  { updateTodo, getTodos }
)(UpdateTodo);
