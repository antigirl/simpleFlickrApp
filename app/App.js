import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Button from './components/button';

import './styles/bootstrap.css';
import './styles/bootstrap-theme.css';
import './styles/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Flickr App</h1>
                    </div>

                    {Array.from(Array(12).keys()).map((x,i) => {
                        return <div className="col-lg-3 col-md-4 col-xs-6 thumb" key={i}>
                            <a className="thumbnail" href="#">
                                <img className="img-responsive" src="http://placehold.it/400x300" alt=""/>
                            </a>
                        </div>
                    })}
                </div>
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
