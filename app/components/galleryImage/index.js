import React, {Component, PropTypes} from 'react';
import './assets/galleryImage.scss';

export default class GalleryImage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {url, title} = this.props;
        const thumbnailStyles = {
            backgroundImage: `url(${url})`,
            backgroundSize: 'cover'
        };        
        return (
            <a className="thumbnail__wrapper" href="#" style={thumbnailStyles}>
                <img className="img-responsive thumbnail__image" src={url} alt={title}/>
            </a>
        );
    }
}

GalleryImage.propTypes = {
    url: PropTypes.string,
    title: PropTypes.string
};
