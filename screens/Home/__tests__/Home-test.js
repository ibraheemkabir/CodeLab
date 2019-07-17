import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Home from '../HomeScreen';
import { MockedProvider } from 'react-apollo/test-utils';
import { FEED_QUERY } from '../../../navigation/authScreen';
jest.mock('expo', () => ({
  AuthSession: {
    getRedirectUrl: jest.fn(),
  },
}));
it(`renders correctly`, () => {
  let props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
    AuthSession: jest.fn()
  }

  const home = renderer.create(
    <MockedProvider addTypename={false}>
      <Home {...props} />
    </MockedProvider>
  );

  expect(home).toMatchSnapshot();
});


