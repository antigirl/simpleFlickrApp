import { combineReducers } from 'redux';
import app from './appReducer';
import storage from './storageReducer';

export default combineReducers({
    app,
    storage
});
