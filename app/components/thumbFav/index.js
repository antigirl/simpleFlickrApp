import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
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
        let thumbFavClass = classNames({
            'thumbFav__icon': true,
            'thumbFav__icon--fav': savedImages.includes(id)
        });
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
