import React from 'react';
import { exepct, assert, expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../client/components/Home';
import GoogleLogin from '../../client/components/GoogleLogin';

configure({ adapter: new Adapter() });

describe('Home', () => {
  const wrapper = shallow(<Home />);

  it('renders a div', () => {
    expect(wrapper.find('div')).to.have.length(1);
  });

  it('renders an h1', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('does not render an input', () => {
    expect(wrapper.find('input')).to.have.length(0);
  });

  it('renders a GoogleLogin component', () => {
    expect(wrapper.find(GoogleLogin)).to.have.length(1);
  });
});
