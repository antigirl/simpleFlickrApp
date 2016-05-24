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
        const {actions, largeImage, title, author} = this.props;
        const largeImageTranslated = largeImage.replace('_m.jpg', '_b.jpg');
        return (
            <div className="thumb-large">
                <a className="thumb-large__close" onClick={this.closeModal.bind(this)}>x</a>
                <div className="col-lg-8 col-lg-offset-2 col-lg-offset-2 col-md-8 col-md-offset-2 col-md-offset-2 thumb-large__wrapper">
                    <img className="thumb-large__img" src={largeImageTranslated} />
                    <ThumbInfo title={title} actions={actions} author={author}/>
                </div>
            </div>);
    }
}

ThumbLarge.propTypes = {
    actions: PropTypes.object,
    largeImage: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string
};
