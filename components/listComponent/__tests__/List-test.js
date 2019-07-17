import React from 'react';
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer';

import List from '../List';

it(`renders correctly`, () => {
  const list = renderer.create(<List/>);

  expect(list).toMatchSnapshot();
});

it(`renders correctly`, () => {
  props={
    data: [
      {
        node: {
          name: '',
          avatarUrl: ''
        }
      }
    ],
    navigation: jest.fn(),
  }
  const list = shallow(<List {...props} />);
  list.findWhere(n=> n.props().id==='listItem').simulate('press')
});
