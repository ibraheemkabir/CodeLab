import React from 'react';
import { shallow} from 'enzyme'
import Profile from '../Profile';

it(`renders correctly`, () => {

  const props = {
    data:{
      node: {
        navigation: {
          navigate: jest.fn(),
          setParams: jest.fn()
        },
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
  }
  const profile = shallow(<Profile {...props}/>);

  expect(profile).toMatchSnapshot();
});

it('',()=> {
  const props = {
    data: {
      node: {
        navigation: {
          navigate: jest.fn(),
          setParams: jest.fn()
        },
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
    },
    navigate: jest.fn(),
  }
  const profile = shallow(<Profile {...props} />);
  profile.findWhere(n => n.props().id == 'goToWeb').simulate('press')

})