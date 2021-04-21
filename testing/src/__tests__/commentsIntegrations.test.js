import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

const dummyResponse = [
  {
    name: 'Dummy comment body #1',
  },
  {
    name: 'Dummy comment body #2',
  },
];

beforeEach(() => {
  moxios.install();
  moxios.stubRequest(
    'https://jsonplaceholder.typicode.com/comments',
    {
      status: 200,
      response: dummyResponse,
    },
  );
});

afterEach(() => {
  moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
  const wrapped = mount(
    <Root>
      <App />
    </Root>,
  );

  wrapped.find('.fetch-comments').simulate('click');
  moxios.wait(() => {
    wrapped.update();
    expect(wrapped.find('li')).toHaveLength(dummyResponse.length);
    done();
    wrapped.unmount();
  });
});
