import React, {Component, PropTypes} from 'react';
import GalleryImage from '../galleryImage';
import './assets/gallery.scss';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {photos} = this.props;
        return (
            <div className="row">
                {photos.map((item, i) => {
                    return <div className="col-lg-3 col-md-4 col-xs-6 thumbnail" key={i}>
                        <GalleryImage url={item.url} src={item.src}/>
                    </div>
                })}
            </div>
        );
    }
}

Gallery.propTypes = {
    photos: PropTypes.array
};
