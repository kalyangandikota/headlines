import React from 'react';
import * as actions from './redux/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './App.css';

class Main extends React.Component {
  render() {
    console.log(this.props)
    return (
      <button onClick={this.onClick}>Button</button>
    )
  }

  onClick = () => {
    this.props.getHeadlines()
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch =>  bindActionCreators({
  getHeadlines: actions.getHeadlinesAction
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main)