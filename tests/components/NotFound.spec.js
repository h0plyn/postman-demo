import React from 'react';
import { expect, assert } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NotFound from '../../client/components/NotFound';

configure({ adapter: new Adapter() });

describe('NotFound', () => {
  const wrapper = shallow(<NotFound />);

  it('should render an h1', () => {
    expect(wrapper.find('h1')).to.have.length(1);
  });

  it('should print Page not found.', () => {
    expect(wrapper.find('h1').text()).to.equal('Page not found.');
  });
});
