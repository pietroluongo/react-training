import { SIGN_IN, SIGN_OUT } from './types';
import streams from '../apis/streams';

export const signIn = () => ({
  type: SIGN_IN,
});

export const signOut = () => ({
  type: SIGN_OUT,
});

export const createStream = (formValues) => (dispatch) => {
  streams.post('/streams', formValues);
};
