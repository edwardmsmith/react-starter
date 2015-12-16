import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore, compose, combineReducers, applyMiddleware } from 'redux';

import thunkMiddleware from 'redux-thunk';

import { Provider, connect } from 'react-redux';

import testReducer from './reducers/test'

import App from './containers/app';

import './style/style.scss';

// Combine reducers
const reducer = combineReducers({
  testReducer
});

// Apply any middleware
const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware
)(createStore);

// Create the store
const store = createStoreWithMiddleware(reducer);

class Root extends Component {
  render() {
    return (
    <Provider store={store}>
      <App><p>Foo</p></App>
    </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));