import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';
import {
  requestPendingReducer,
  deleteContent,
  updateContent
} from './reducers/reducers';
import './css/index.css';

const combinedReducer = combineReducers({
  requestPending: requestPendingReducer,
  delete: deleteContent,
  update: updateContent
});

const store = createStore(
  combinedReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

const AppWithRouter = withRouter(Container, logger);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <AppWithRouter />
    </Router>
  </Provider>,
  document.getElementById('target')
);
