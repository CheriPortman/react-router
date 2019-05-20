import React from 'react';
import { shallow } from 'enzyme';
import Blue from './Blue';

describe('Blue componenet', () => {
  it('renders blue', () => {
    const wrapper = shallow(<Blue />);
    expect(wrapper).toMatchSnapshot();
  });
});
