import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <header>
        <div className="overlay" />
        <div className="container">
          <nav>
            <div className="brand">
                <img src="https://img.icons8.com/cute-clipart/128/000000/task.png" />
            </div>
            <ul>
              <li>
                <NavLink exact to="/">
                  Todos
                </NavLink>
              </li>
              <li>
                <NavLink exact to="/todo-form">
                  Create
                </NavLink>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    todo: state.something1
  };
};

export default connect(mapStateToProps)(NavBar);
