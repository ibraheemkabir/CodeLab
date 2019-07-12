import React from 'react';
import renderer from 'react-test-renderer';

import Profile from '../ProfileScreen';

it(`renders correctly`, () => {
  const props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
  }
  const profile = renderer.create(<Profile {...props}/>);

  expect(profile).toMatchSnapshot();
});
