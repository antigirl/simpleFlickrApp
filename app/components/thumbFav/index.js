import React, {Component, PropTypes} from 'react';
import './assets/thumbFav.scss';
var fav = require('./assets/fav.svg');

export default class ThumbFav extends Component {
    constructor(props) {
        super(props);
    }

    favouriteImage(id) {
        this.props.actions.favImage(id);
    }

    render() {
        const {id, savedImages} = this.props;
        let thumbFavClass = 'thumbFav__icon';
        if ((savedImages || []).indexOf(id) > -1) {
            thumbFavClass += ' fav';
        }
        return (
            <a className="thumbFav" onClick={this.favouriteImage.bind(this, id)}>
                <img src={fav} className={thumbFavClass}/>
            </a>);
    }
}

ThumbFav.propTypes = {
    actions: PropTypes.object.isRequired,
    id: PropTypes.string,
    savedImages: PropTypes.array
};
