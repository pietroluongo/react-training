import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

let wrapped;

beforeEach(() => {
  wrapped = mount(<CommentBox />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has a text area and a button', () => {
  expect(wrapped.find('textarea')).toHaveLength(1);
  expect(wrapped.find('button')).toHaveLength(1);
});

it('has a text area that users can type in', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('clears the text area on submit', () => {
  wrapped.find('textarea').simulate('change', {
    target: { value: 'new comment' },
  });
  wrapped.update();
  wrapped.find('form').simulate('submit');
  wrapped.update();

  expect(wrapped.find('textarea').prop('value')).toEqual('');
});
