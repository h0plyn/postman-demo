import React from 'react';
import { expect } from 'chai';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Home from '../../client/components/Home';
import GoogleLogin from '../../client/components/GoogleLogin';

configure({ adapter: new Adapter() });

describe('Home', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it('renders a div', () => {
    expect(wrapper.find('div')).to.have.length(2);
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

  describe('Increment', () => {
    it('renders an increment button', () => {
      expect(wrapper.find('button').text()).to.equal('Increment');
    });

    it('increments the count on click', () => {
      expect(wrapper.find('.count').text()).to.equal('0');
      wrapper.find('button').simulate('click');
      expect(wrapper.find('.count').text()).to.equal('1');
    });
  });
});
