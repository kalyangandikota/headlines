import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers';
import thunk from 'redux-thunk';
import  Headlines from './components/Headlines'


class App extends Component {
  constructor() {
    super()
    this.store = createStore(rootReducer, applyMiddleware(thunk));
  }
  render() {
    return (
      <Provider store={this.store}>
        <Headlines/>
      </Provider>
    );
  }
}

export default App;