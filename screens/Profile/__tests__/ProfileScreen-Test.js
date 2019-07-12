import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../ProfileScreen';

it(`renders correctly`, () => {
  const profile = renderer.create(<Profile/>);

  expect(profile).toMatchSnapshot();
});
