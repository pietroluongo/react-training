import { SIGN_IN, SIGN_OUT, CREATE_STREAM } from './types';
import streams from '../apis/streams';

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const createStream = (formValues) => async (dispatch) => {
  const res = await streams.post('/streams', formValues);
  dispatch({ type: CREATE_STREAM, payload: res });
};
