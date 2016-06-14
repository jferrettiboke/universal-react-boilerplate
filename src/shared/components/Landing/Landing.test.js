import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import Landing from './Landing';

describe('<Landing />', () => {
  it('should render `Landing`', () => {
    expect(shallow(<Landing />).childAt(1).text()).to.equal('Landing');
  });
});
