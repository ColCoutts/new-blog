import React from 'react';
import { shallow } from 'enzyme';
import Posts from './Posts';

describe('posts snapshot test', () => {
  it('renders Posts snapshot', () => {
    const newArray = [
      {
        title: 'hi',
        body: 'test'
      },
      {
        title: 'hi2',
        body: 'test2'
      }
    ];
    const wrapper = shallow(<Posts posts={newArray} deletePost={ () => {} } />);
    expect(wrapper).toMatchSnapshot();
  });
});
