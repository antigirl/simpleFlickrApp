import React, {Component, PropTypes} from 'react';
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
                    const thumbnailStyles = {
                        backgroundImage: `url(${item.url})`,
                        backgroundSize: 'cover'
                    }
                    return <div className="col-lg-3 col-md-4 col-xs-6 thumbnail" key={i}>
                        <a className="thumbnail__wrapper" href="#" style={thumbnailStyles}>
                            <img className="img-responsive thumbnail__image" src={item.url} alt={item.title}/>
                        </a>
                    </div>
                })}
            </div>
        );
    }
}

Gallery.propTypes = {
  photos: PropTypes.array
};
