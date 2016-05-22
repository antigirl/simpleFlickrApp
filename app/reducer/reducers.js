function appStateReducer(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
        return state + 1;

        default:
        return state;
    }
}

export default function appState(state={}, action) {
    return {
        appState: appStateReducer(state.appState, action)
    }
}
