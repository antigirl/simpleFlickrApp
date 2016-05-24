import React, {Component, PropTypes} from 'react';
import ThumbImage from '../thumbImage';
import ThumbInfo from '../thumbInfo';
import ThumbFav from '../thumbFav';
import ThumbLarge from '../thumbLarge';
import './assets/gallery.scss';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {photos, actions, largeImage} = this.props;

        return (
            <div className="row">
                {photos.map((item, i) => {
                    return <div className="col-lg-3 col-md-4 col-xs-6 thumbnail-wrapper" key={i}>
                        <ThumbFav actions={actions}/>
                        <ThumbImage actions={actions} url={item.url} src={item.src}/>
                        <ThumbInfo title={item.title} author={item.authorIcon}/>
                    </div>
                })}
                {largeImage? <ThumbLarge largeImage={largeImage} actions={actions}/>: null}
            </div>
        );
    }
}

Gallery.propTypes = {
    photos: PropTypes.array
};
