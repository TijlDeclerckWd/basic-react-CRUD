import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './reducers/auth';
import streams from './reducers/stream';


export default combineReducers({
    auth,
    form: formReducer,
    streams
});
