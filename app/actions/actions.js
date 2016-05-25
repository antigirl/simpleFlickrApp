import * as flickrAPI from '../utils/flickrAPI.js';
import * as storageAPI from '../utils/storageAPI.js';

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

export function showLargeImage(id, largeImage, title, author) {
    return {
        type: 'SHOW_LARGE_IMAGE',
        id,
        largeImage,
        title,
        author
    }
}

export function fetchImages() {
    return dispatch => {
        dispatch(loading());
        flickrAPI.fetchImages()
        .then((result) => {
            dispatch(gotImages(result))
        }).catch((err)=> {
            console.log('handle error ', err);
        })
    }
}

export function favImage(id) {
    return dispatch => {
        storageAPI.saveToStorage(id);
        dispatch(saveFavImage());
        dispatch(getFavImages());
    }
}

export function saveFavImage() {
    return {
        type: 'SAVE_IMAGE'
    }
}

export function getFavImages() {
    return {
        type: 'GET_IMAGES',
        savedImages: storageAPI.getStorageData()
    }
}
