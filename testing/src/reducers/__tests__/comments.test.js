import commentsReducer from 'reducers/commentsReducer';
import { SAVE_COMMENT } from 'actions/types';

it('handles actions of type SAVE_COMMENT', () => {
  const action = {
    type: SAVE_COMMENT,
    payload: 'New dummy comment',
  };

  const newState = commentsReducer([], action);
  expect(newState).toEqual(['New dummy comment']);
});

it('handles actions of unknown types', () => {
  const newState = commentsReducer([], {});
  expect(newState).toEqual([]);
});
