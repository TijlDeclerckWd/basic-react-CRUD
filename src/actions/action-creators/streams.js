import streams from '../../apis/streams';
import {CREATE_STREAM, DELETE_STREAM, EDIT_STREAM, GET_STREAM, GET_STREAMS} from "../actionTypes";
import history from '../../history';

export const createStream = (formValues) => async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await streams.post('/streams', { ...formValues, userId });

    dispatch({type: CREATE_STREAM, payload: response.data});

    history.push('/');
};

export const getAllStreams = () => async (dispatch) => {
  const response = await streams.get('/streams');
  dispatch({ type: GET_STREAMS, payload:response.data });
};

export const getStream = (streamId) => async (dispatch) => {
    console.log('entered');
    const response = await streams.get(`/streams/${streamId}`);
    console.log('response: ', response);

    dispatch({ type: GET_STREAM, payload: response.data });
};

export const editStream = (streamId, formValues) => async (dispatch) => {
    const response = await streams.patch(`/streams/${streamId}`, formValues);
    dispatch({ type: EDIT_STREAM, payload: response.data });
    history.push('/');
};

export const deleteStream = (streamId) => async (dispatch) => {
    await streams.delete(`/streams/${streamId}`);
    dispatch({ type: DELETE_STREAM, payload: streamId });
    history.push('/');
};




