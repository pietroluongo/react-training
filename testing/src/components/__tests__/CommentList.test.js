import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

let wrapped;
const initialState = {
  comments: ['Dummy comment 1', 'Dummy comment 2'],
};

beforeEach(() => {
  wrapped = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>,
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('creates one list item per comment', () => {
  expect(wrapped.find('li')).toHaveLength(initialState.comments.length);
});

it('has visible comment text elements', () => {
  initialState.comments.map((comment) => expect(wrapped.render().text()).toContain(comment));
});
