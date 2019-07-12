import axios from 'axios';

import {
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_NEW_TODO,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAILURE,
  MARK_COMPLETE,
  MARK_COMPLETE_SUCCESS,
  MARK_COMPLETE_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE
} from './ActionTypes';

export function login(credentials) {
  return dispatch => {
    dispatch({ type: LOGGING_IN });
    return axios
      .post('/api/auth/login', credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.token });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: LOGIN_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function getTodos() {
  return dispatch => {
    dispatch({ type: GET_TODOS });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    axios
      .get('/api/todos/', axiosConfig)
      .then(res => {
        console.log(res);
        dispatch({ type: GET_TODOS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_TODOS_FAILURE, payload: err });
        console.error(err);
      });
  };
}

export function findTodo(data) {
  return dispatch => {
    dispatch({ type: GET_TODOS_SUCCESS, payload: data });
  };
}

export function addTodo(todo) {
  return dispatch => {
    dispatch({ type: ADD_NEW_TODO });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    return axios
      .post('/api/todos/', todo, axiosConfig)
      .then(res => {
        console.log(res);
        dispatch({ type: ADD_NEW_TODO_SUCCESS, payload: res.data });
        dispatch(getTodos());
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: ADD_NEW_TODO_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function markComplete(id) {
  return dispatch => {
    dispatch({ type: MARK_COMPLETE });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    return axios
      .put(
        `/api/todos/${id}`,
        { completed: true },
        axiosConfig
      )
      .then(res => {
        console.log(res.data);
        dispatch({ type: MARK_COMPLETE_SUCCESS, payload: res.data });
        dispatch(getTodos());
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: MARK_COMPLETE_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function deleteTodo(id) {
  return dispatch => {
    dispatch({ type: DEL_TODO });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    return axios
      .delete(`/api/todos/${id}`, axiosConfig)
      .then(res => {
        console.log(res);
        dispatch({ type: DEL_TODO_SUCCESS, payload: res.data });
        dispatch({ type: GET_TODOS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: DEL_TODO_FAILURE, payload: error });
        console.error(error);
      });
  };
}

export function updateTodo(todo, id) {
  return dispatch => {
    dispatch({ type: UPDATE_TODO });

    const token = localStorage.getItem('token');
    const axiosConfig = token ? { headers: { Authorization: token } } : null;

    return axios
      .put(`/api/todos/${id}`, todo, axiosConfig)
      .then(res => {
        console.log(res);
        dispatch({ type: UPDATE_TODO_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = err.response.data.message;
        dispatch({ type: UPDATE_TODO_FAILURE, payload: error });
        console.error(error);
      });
  };
}
