import React,{Component} from 'react';
import {View} from 'react-native';
import {Icon} from 'native-base';
import Profile from '../../components/profileComponent/Profile'
import Modal from '../../components/modalComponent/modal'
export default class SettingsScreen extends Component {
  state = {
    modalVisible: false,
  };

  static navigationOptions = ({navigation}) => {
    const some = navigation.getParam('setModalVisibles')
    return{
      headerStyle: {
          backgroundColor: 'transparent',
          color: 'white',
          borderStyle: 'dotted',
          padding: 200
        },
        headerBackTitle:'Back to Profile',
        headerRight: (
          <Icon type='MaterialIcons' name="build" style={{ fontSize: 25, paddingRight: 20, color: 'white' }} onPress={() => some(true)} />
        ),
        headerTitleStyle: {
          color: 'white',
        },
        headerBackStyle: {
          color: 'white'
        },
        headerTintColor: 'white'
      }
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentWillMount() {
    this.props.navigation.setParams({ setModalVisibles: this.setModalVisible });
  }

  render(){
    const {navigate} = this.props.navigation
    const data = this.props.navigation.getParam('data');
    return (
      <View style={{ marginTop: -60 }}>
        <Modal setModalVisible={this.setModalVisible} modalVisible={this.state.modalVisible}/>
        <Profile navigate={navigate} data={data}/>
      </View>
    );
  }
}

