import React, {Component, PropTypes} from 'react';
import './assets/thumbInfo.scss';
import ThumbFav from '../thumbFav';

export default class ThumbInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {id, author, title, savedImages, actions} = this.props;
        let thumbInfoClass = 'thumbnail-info';
        if ((savedImages || []).indexOf(id) > -1) {
            thumbInfoClass += ' thumbnail-info--fav';
        }
        return (
            <div className={thumbInfoClass}>
                <span className="thumbnail-info__title">{title? title: 'Untitled'}</span>
                <img className="thumbnail-info__author" src={author}/>
                {actions ? <ThumbFav id={id} savedImages={savedImages} actions={actions}/> : null }
            </div>
        );
    }
}

ThumbInfo.propTypes = {
    actions: PropTypes.object,
    id: PropTypes.string,
    url: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    savedImages: PropTypes.array
};
