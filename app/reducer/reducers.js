function appStateReducer(state = {loading: false, largeImage:null, title: null, author:null, photos:[]}, action) {
    switch (action.type) {
        case 'LOADING':
        return Object.assign({}, state, {
            loading: true
        });

        case 'GOT_IMAGES':
        return Object.assign({}, state, {
            loading: false,
            photos: action.photos
        });

        case 'SHOW_LARGE_IMAGE':
        return Object.assign({}, state, {
            loading: false,
            largeImage: action.largeImage,
            title: action.title,
            author: action.author
        });

        default:
        return state;
    }
}

export default function appState(state={}, action) {
    return {
        appState: appStateReducer(state.appState, action)
    }
}
