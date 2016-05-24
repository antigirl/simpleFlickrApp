import React, {Component, PropTypes} from 'react';
import './assets/thumbImage.scss';

export default class ThumbImage extends Component {
    constructor(props) {
        super(props);
    }

    showLargeImage(imageURL) {
        this.props.actions.showLargeImage(imageURL);
    }

    render() {
        const {url, title} = this.props;
        const thumbnailStyles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
        };
        return (
            <a className="thumbnail-image" onClick={this.showLargeImage.bind(this, url)} style={thumbnailStyles}>
                <img className="img-responsive thumbnail-image__img" src={url} alt={title}/>
            </a>
        );
    }
}

ThumbImage.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};
