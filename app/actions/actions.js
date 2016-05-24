import * as flickrAPI from '../utils/flickrAPI.js';

export function loading() {
    return {
        type: 'LOADING'
    }
}

export function gotImages(photos) {
    return {
        type: 'GOT_IMAGES',
        photos
    }
}

export function fetchImages() {
    return dispatch => {
        dispatch(loading());
        flickrAPI.fetchImages()
        .then((result) => {
            console.log('got result');
            dispatch(gotImages(result))
        }).catch((err)=> {
            console.log('handle error ', err);
        })
    }
}
