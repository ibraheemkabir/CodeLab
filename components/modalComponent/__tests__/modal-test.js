import React from 'react';
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer';
import Modal from '../modal';

it(`renders correctly`, () => {
  const modal = renderer.create(<Modal/>);

  expect(modal).toMatchSnapshot();
});

it(`renders correctly`, () => {
  const props = {
    setModalVisible: jest.fn()
  }
  const modal = shallow(<Modal {...props} />)
  const simulate = modal.find('TouchableHighlight').simulate('press')
});
