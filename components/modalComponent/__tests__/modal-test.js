import React from 'react';
import renderer from 'react-test-renderer';

import Modal from '../modal';

it(`renders correctly`, () => {
  const modal = renderer.create(<Modal/>);

  expect(modal).toMatchSnapshot();
});
