import React, {Component, PropTypes} from 'react';
import './assets/thumbLarge.scss';

export default class ThumbLarge extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {actions, largeImage} = this.props;
        const largeImageTranslated = largeImage.replace('_m.jpg', '_b.jpg');
        return (
            <div className="thumb-large" onClick={actions.showLargeImage.bind(this, null)}>
                <img className="thumb-large__img" src={largeImageTranslated} />
            </div>);
    }
}

ThumbLarge.propTypes = {
    actions: PropTypes.object,
    largeImage: PropTypes.string
};
