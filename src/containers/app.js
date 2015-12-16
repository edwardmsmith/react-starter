import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>
        <h1>App Container stuff</h1>
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {};
}

export default connect(mapStateToProps)(App);