export default function storageReducer(state = {savedNotification: false, savedImages:[]}, action) {
    switch (action.type) {
        case 'SAVE_IMAGE':
        return Object.assign({}, state, {
            savedNotification: true
        });

        case 'GET_IMAGES':
        return Object.assign({}, state, {
            savedImages: action.savedImages
        });

        default:
        return state;        
    }
}
