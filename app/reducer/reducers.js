function appStateReducer(state = {loading: false, photos:[]}, action) {
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

        default:
        return state;
    }
}

export default function appState(state={}, action) {
    return {
        appState: appStateReducer(state.appState, action)
    }
}
