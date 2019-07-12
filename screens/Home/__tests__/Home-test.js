import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../HomeScreen';


it(`renders correctly`, () => {
  let props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
  }
  const home = renderer.create(<Home {...props}/>);

  expect(home).toMatchSnapshot();
});
