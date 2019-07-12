import React from 'react';
import renderer from 'react-test-renderer';

import List from '../List';

it(`renders correctly`, () => {
  const list = renderer.create(<List/>);

  expect(list).toMatchSnapshot();
});
