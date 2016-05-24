import React, {Component, PropTypes} from 'react';
import './assets/thumbImage.scss';

export default class ThumbImage extends Component {
    constructor(props) {
        super(props);
    }

    showLargeImage(imageURL, title, author) {
        this.props.actions.showLargeImage(imageURL, title, author);
    }

    render() {
        const {url, title, author} = this.props;
        const thumbnailStyles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
        };
        return (
            <a className="thumbnail-image" onClick={this.showLargeImage.bind(this, url, title, author)} style={thumbnailStyles}>
                <img className="img-responsive thumbnail-image__img" src={url} alt={title}/>
            </a>
        );
    }
}

ThumbImage.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string
};
