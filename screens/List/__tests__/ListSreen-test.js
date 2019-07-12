import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {shallow} from 'enzyme'

import List from '../ListScreen';

it(`renders correctly`, () => {
  let props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
  }
  const list = shallow(<List {...props}/>);

  expect(list).toMatchSnapshot();
});
