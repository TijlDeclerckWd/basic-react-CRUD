import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, GET_STREAM, GET_STREAMS} from "../actions/actionTypes";


export default (state = {}, action) => {
    switch (action.type) {
        case GET_STREAMS:
            const newObject = {};
            action.payload.forEach( (item) => newObject[item.id] = item );
            return { ...state, ...newObject};
        case GET_STREAM:
            console.log('payload', action.payload);
            return { ...state, [action.payload.id]: action.payload };
        case CREATE_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_STREAM:
            delete state[action.payload];
            return Object.assign(state);
        default:
            return state;
    }
}
