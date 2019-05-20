import React from 'react';
import { shallow } from 'enzyme';
import Red from './Red';

describe('Red componenet', () => {
  it('renders red', () => {
    const wrapper = shallow(<Red />);
    expect(wrapper).toMatchSnapshot();
  });
});
