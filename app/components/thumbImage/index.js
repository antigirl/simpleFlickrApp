import React, {Component, PropTypes} from 'react';
import './assets/thumbImage.scss';

export default class ThumbImage extends Component {
    constructor(props) {
        super(props);
    }

    showLargeImage(id, imageURL, title, author) {
        this.props.actions.showLargeImage(id, imageURL, title, author);
    }

    render() {
        const {id, url, title, author} = this.props;
        const thumbnailStyles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
        };
        return (
            <a className="thumbnail-image" onClick={this.showLargeImage.bind(this, id, url, title, author)} style={thumbnailStyles}>
                <img className="img-responsive thumbnail-image__img" src={url} alt={title}/>
            </a>
        );
    }
}

ThumbImage.propTypes = {
    id: PropTypes.string,
    url: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string
};
