import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as actionCreators from './actions/actions';
import Gallery from './components/gallery';
import Loader from './components/loader';

import './styles/bootstrap.css';
import './styles/bootstrap-theme.css';
import './styles/main.scss';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchImages();
    }

    render() {
        const {appState:{loading, photos, largeImage, title, author}, actions} = this.props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Flickr App</h1>
                    </div>
                </div>
                {loading ? <Loader /> :
                <Gallery actions={actions} largeImage={largeImage} title={title} author={author} photos={photos}/>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {appState: state.appState};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
