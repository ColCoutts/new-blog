import React from 'react';
import { shallow } from 'enzyme';
import Post from './Post';

describe('post snapshot test', () => {
  it('renders Post snapshot', () => {
    const newPost = {
      title: 'hi',
      body: 'test'
    };
    const wrapper = shallow(<Post post={newPost} deletePost={ () => {} } />);
    expect(wrapper).toMatchSnapshot();
  });
});
