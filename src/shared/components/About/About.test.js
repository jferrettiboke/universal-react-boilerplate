import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import About from './About';

describe('<About />', () => {
  it('should render `About`', () => {
    expect(shallow(<About />).childAt(1).text()).to.equal('About');
  });
});
