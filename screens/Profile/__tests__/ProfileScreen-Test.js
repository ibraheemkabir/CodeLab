import React from 'react';
import {shallow} from 'enzyme'
import Profile from '../ProfileScreen';

describe('test profile screen component',()=>{
  const node = {
    node:
    {
      avatarUrl: '',
      followers: {
        totalCount: ''
      },
      following: {
        totalCount: ''
      },
      repositories: {
        totalCount: ''
      },
      starredRepositories: {
        totalCount: ''
      },
      login: '',
      name: '',
      bio: ''
    }
  }

  const props = {
    navigation: {
      navigate: jest.fn(),
      getParam: jest.fn().mockReturnValue(node),
      setParams: jest.fn()
    }
  }

  it(`renders correctly`, () => {
    const navigation = { navigate: jest.fn() };
    const profile = shallow(<Profile navigation={navigation} {...props} />);
    expect(profile).toMatchSnapshot();
  });

  it(`renders correctly`, () => {
    const navigation = { navigate: jest.fn() };
    const profile = shallow(<Profile navigation={navigation} {...props} />);
    const you = profile.find('Modal')
    const instance = profile.instance()
    instance.setModalVisible()
  });

  it(`renders correctly`, () => {

    const props = {
      navigation: {
        navigate: jest.fn(),
        getParam: jest.fn().mockReturnValue(cb => true),
        setParams: jest.fn()
      }
    }
    const navigation = { navigate: jest.fn() };

    shallow(<Profile navigation={navigation} {...props} />);
    const navigationOptions = Profile.navigationOptions({ ...props });
    navigationOptions.headerRight.props.onPress()

  });

})


