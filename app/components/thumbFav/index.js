import React, {Component, PropTypes} from 'react';
import './assets/thumbFav.scss';
var fav = require('./assets/fav.svg');

export default class ThumbFav extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {actions} = this.props;
        return (<a className="thumbFav"><img src={fav} className="thumbFav__icon"/></a>);
    }
}

ThumbFav.propTypes = {
    actions: PropTypes.object
};
