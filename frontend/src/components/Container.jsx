import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { connect } from 'react-redux';
import RestrictedRoute from '../HOCs/RestrictedRoute';
import LoginView from '../views/LoginView';
import TodoList from './TodoComponents/TodoList';
import NavBar from './Navigation/NavBar';
import TodoForm from './TodoComponents/TodoForm';
import UpdateTodo from './TodoComponents/UpdateTodo';

class Container extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="main-container">
        <RestrictedRoute path="/" component={NavBar} />

        <RestrictedRoute exact path="/" component={TodoList} />

        <RestrictedRoute path="/todo-form" component={TodoForm} />

        <RestrictedRoute path="/update-todo/:todoId" component={UpdateTodo} />

        <Route path="/login" component={LoginView} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.something1
  };
};

export default connect(mapStateToProps)(Container);
