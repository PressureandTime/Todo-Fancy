import {
  ADD_NEW_TODO,
  ADD_NEW_TODO_SUCCESS,
  ADD_NEW_TODO_FAILURE,
  MARK_COMPLETE,
  MARK_COMPLETE_SUCCESS,
  MARK_COMPLETE_FAILURE,
  LOGGING_IN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  GET_TODOS_FAILURE,
  DEL_TODO,
  DEL_TODO_SUCCESS,
  DEL_TODO_FAILURE,
  UPDATE_TODO,
  UPDATE_TODO_SUCCESS,
  UPDATE_TODO_FAILURE
} from '../actions/ActionTypes';

const initialState = {
  todos: [],
  completed: false,
  loggingIn: false,
  gettingTodos: false,
  addingTodos: false,
  newTodos: [],
  deletingTodos: false,
  updatingTodo: false,
  searchingTodo: false
};

export const requestPendingReducer = (sliceOfState = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return {
        ...sliceOfState
      };

    case LOGIN_SUCCESS:
      return {
        ...sliceOfState,
        loggingIn: true
      };

    case LOGIN_FAILURE:
      return {
        ...sliceOfState,
        loggingIn: false
      };

    case GET_TODOS:
      return {
        ...sliceOfState,
        gettingTodos: true
      };

    case GET_TODOS_SUCCESS:
      return {
        ...sliceOfState,
        gettingTodos: false,
        todos: action.payload
      };

    case GET_TODOS_FAILURE:
      return {
        ...sliceOfState,
        gettingTodos: true
      };

    case ADD_NEW_TODO:
      return {
        ...sliceOfState,
        addingTodos: true
      };

    case ADD_NEW_TODO_SUCCESS:
      return {
        ...sliceOfState,
        addingTodos: false,
        newTodos: action.payload
      };

    case ADD_NEW_TODO_FAILURE:
      return {
        ...sliceOfState,
        addingTodos: false
      };

    default:
      return sliceOfState;
  }
};

export const deleteContent = (sliceOfState = initialState, action) => {
  switch (action.type) {
    case DEL_TODO:
      return {
        ...sliceOfState,
        deletingTodos: true
      };

    case DEL_TODO_SUCCESS:
      return {
        ...sliceOfState,
        deletingTodos: false,
        todos: action.payload
      };

    case DEL_TODO_FAILURE:
      return {
        ...sliceOfState,
        deletingTodos: false
      };

    default:
      return sliceOfState;
  }
};

export const updateContent = (sliceOfState = initialState, action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return {
        ...sliceOfState,
        updatingTodo: true
      };

    case UPDATE_TODO_SUCCESS:
      return {
        ...sliceOfState,
        updatingTodo: false,
        todos: action.payload
      };

    case UPDATE_TODO_FAILURE:
      return {
        ...sliceOfState,
        updatingTodo: false
      };

    case MARK_COMPLETE:
      return {
        ...sliceOfState,
        completed: true
      };

    case MARK_COMPLETE_SUCCESS:
      return {
        ...sliceOfState,
        completed: false,
        todos: action.payload
      };

    case MARK_COMPLETE_FAILURE:
      return {
        ...sliceOfState,
        completed: false
      };

    default:
      return sliceOfState;
  }
};
