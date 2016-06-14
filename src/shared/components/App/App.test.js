import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render `App`', () => {
    expect(shallow(<App />).childAt(1).text()).to.equal('App');
  });
});
