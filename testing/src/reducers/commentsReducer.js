import { SAVE_COMMENT, FETCH_COMMENTS } from 'actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      return [...state, ...action.payload.data.map((data) => data.name)];
    default:
      return state;
  }
};
