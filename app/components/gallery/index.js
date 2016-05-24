import React, {Component, PropTypes} from 'react';
import ThumbImage from '../thumbImage';
import ThumbInfo from '../thumbInfo';
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
                    return <div className="col-lg-3 col-md-4 col-xs-6 thumbnail-wrapper" key={i}>
                        <ThumbImage url={item.url} src={item.src}/>
                        <ThumbInfo title={item.title} author={item.authorIcon}/>
                    </div>
                })}
            </div>
        );
    }
}

Gallery.propTypes = {
    photos: PropTypes.array
};
