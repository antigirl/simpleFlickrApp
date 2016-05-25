import React, {Component, PropTypes} from 'react';
import ThumbInfo from '../thumbInfo';
import './assets/thumbLarge.scss';

export default class ThumbLarge extends Component {
    constructor(props) {
        super(props);
    }

    closeModal() {
        this.props.actions.showLargeImage(null);
    }

    render() {
        const {actions, savedImages, id, largeImage, title, author} = this.props;
        const largeImageTranslated = largeImage.replace('_m.jpg', '_b.jpg');
        return (
            <div className="thumb-large">
                <a className="thumb-large__close" onClick={this.closeModal.bind(this)}>x</a>
                <div className="thumb-large__wrapper">
                    <img className="thumb-large__img" src={largeImageTranslated} />
                    <ThumbInfo savedImages={savedImages} id={id} actions={actions} url={largeImage} title={title} author={author}/>
                </div>
            </div>);
    }
}

ThumbLarge.propTypes = {
    actions: PropTypes.object,
    id: PropTypes.string,
    largeImage: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    savedImages: PropTypes.array
};
