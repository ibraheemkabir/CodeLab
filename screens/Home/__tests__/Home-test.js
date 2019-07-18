import React from 'react';
import renderer from 'react-test-renderer';
import { mount,shallow } from 'enzyme';
import Home from '../HomeScreen';
import { MockedProvider } from 'react-apollo/test-utils';
import { FEED_QUERY } from '../../../navigation/authScreen';

jest.mock('expo', () => ({
  AuthSession: {
    getRedirectUrl: jest.fn(),
  },
}));

const wait = require('waait');

it(`renders correctly`, async () => {
  let props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
    AuthSession: jest.fn()
  }
  const mocks = [
    {
      request: {
        query: FEED_QUERY,
      },
      result: {
        data: {
          viewer: {
            avatarUrl: '',
          }
        },
      },
    },
  ];
  const home = shallow(
    <MockedProvider
      mocks={mocks}
      removeTypename
      addTypename={false}
      >
      <Home {...props} />
    </MockedProvider>
  );
  await wait(0);
  expect(home).toMatchSnapshot()
});

it(`renders correctly`, async () => {
  let props = {
    navigation: {
      navigate: jest.fn(),
      setParams: jest.fn()
    },
    AuthSession: jest.fn()
  }
  const mocks = [
    {
      request: {
        query: FEED_QUERY,
      },
      result: {
        data: {
          viewer: {
            avatarUrl: '',
          }
        },
      },
    },
  ];
  const home = mount(
    <MockedProvider
      mocks={mocks}
      removeTypename
      addTypename={false}
    >
      <Home {...props} />
    </MockedProvider>
  );
  await wait(0);
  home.update()
  home.find('Button').props().onPress()
  console.log(home.instance())
});
