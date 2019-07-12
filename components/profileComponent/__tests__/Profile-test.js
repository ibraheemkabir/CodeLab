import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../Profile';

it(`renders correctly`, () => {
  const profile = renderer.create(<Profile/>);

  expect(profile).toMatchSnapshot();
});
