import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { addTodo } from '../../actions/ActionCreators';
import { TodoFormStyle } from './TodoFormStyle';
import { PrimaryBtn } from '../../views/LoginViewStyle';

export class TodoForm extends Component {
  onAddTodo = event => {
    event.preventDefault();
    const aTodoTitle = event.target.title;
    const aTodoTask = event.target.task;
    const aTodoDate = event.target.setDate;

    const frequency = event.target.frequency;

    const newTodo = {
      title: aTodoTitle.value,
      task: aTodoTask.value,
      setDate: aTodoDate.value,
      notes: frequency.value
    };

    if (aTodoTitle.value && aTodoTask.value && aTodoDate.value) {
      this.props.addTodo(newTodo).then(() => {
        this.props.history.push('/');
      });
    }

    aTodoTitle.value = '';
    aTodoTask.value = '';
    aTodoDate.value = '';
    frequency.value = '';
  };

  render() {
    return (
      <TodoFormStyle>
        <div className="todo-form">
        <div className="centering">
          <h2>Todo Form</h2>
          <form onSubmit={this.onAddTodo}>
            <div>
              {' '}
              <input
                type="text"
                onChange={this.onChange}
                name="title"
                required=""
                placeholder="Title"
              />
            </div>

            <div>
              <input
                type="text"
                onChange={this.onChange}
                name="task"
                placeholder="To-Do"
              />
            </div>
            <div>
              {' '}
              <input
                type="date"
                onChange={this.onChange}
                name="setDate"
                placeholder="Set Date"
              />
              <label>Set the date</label>
            </div>
            <select name="frequency" onChange={this.onAddTodo}>
              <option value="No Repeat">No Repeat</option>
              <option value="days">Daily</option>
              <option value="weeks">Weekly</option>
              <option value="months">Monthly</option>
              <option value="years">Yearly</option>
            </select>
            <PrimaryBtn>Add To-Do</PrimaryBtn>
          </form>
          </div>
        </div>

        {/* FIRST STEP: create field to capture the TIMESTAMP
              SECOND STEP: PUT or POST request to store the information to field updatedAt
              THIRD STEP: Give the user ability to complete a task
              FORTH STEP : Once a user completes the task and sent the put request to set the date
                 */}
      </TodoFormStyle>
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
  { addTodo }
)(TodoForm);
