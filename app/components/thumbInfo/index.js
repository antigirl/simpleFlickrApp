import React, {Component, PropTypes} from 'react';
import './assets/thumbInfo.scss';
import ThumbFav from '../thumbFav';

export default class ThumbInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {author, title, actions} = this.props;
        return (
            <div className="thumbnail-info">
                <span className="thumbnail-info__title">{title? title: 'Untitled'}</span>
                <img className="thumbnail-info__author" src={author}/>
                {actions ? <ThumbFav actions={actions}/> : null }
            </div>
        );
    }
}

ThumbInfo.propTypes = {
    actions: PropTypes.object.isRequired,
    author: PropTypes.string,
    title: PropTypes.string
};
