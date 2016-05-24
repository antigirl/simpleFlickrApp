import React, {Component, PropTypes} from 'react';
import './assets/thumbInfo.scss';

export default class ThumbInfo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {author, title} = this.props;
        return (
            <div className="thumbnail-info">
                <span className="thumbnail-info__title">{title}</span>
                <img className="thumbnail-info__author" src={author}/>
            </div>
        );
    }
}

ThumbInfo.propTypes = {
    author: PropTypes.string,
    title: PropTypes.string
};
