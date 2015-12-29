import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

import { Provider } from 'react-redux';

import rootReducer from './reducers'

import App from './containers/app';

import './style/style.scss';

// Create the store
const store = createStore(rootReducer);

class Root extends Component {
  render() {
    return (
    <Provider store={store}>
      <App />
    </Provider>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));