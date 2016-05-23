import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import BUTTON from './components/button';

import './styles/reset.scss';
import './styles/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Walking Skeleton with Redux
                <BUTTON actions={this.props.actions}/>
                {this.props.appState}
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      appState: state.appState
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
