import React from 'react';
import renderer from 'react-test-renderer';

import Home from '../HomeScreen';

it(`renders correctly`, () => {
  const home = renderer.create(<Home/>);

  expect(home).toMatchSnapshot();
});
