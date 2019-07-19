import React,{Component} from 'react';
import { View, Image, TouchableHighlight, Share} from 'react-native';
import Profile from '../../components/profileComponent/Profile'
import Modal from '../../components/modalComponent/modal'

export default class SettingsScreen extends Component {
  state = {
    modalVisible: false,
  };

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  static navigationOptions = ({navigation}) => {
    const some = navigation.getParam('setModalVisibles')
    const share= navigation.getParam('share')

    return{
      headerStyle: {
          backgroundColor: 'transparent',
          color: 'white',
          borderStyle: 'dotted',
        },
        headerBackTitle:'Back to Profile',
        headerRight: (
          <TouchableHighlight onPress={() => share()}>
            <Image source={require('../../assets/images/share.png')} style={{ marginRight: 30 }}  />
          </TouchableHighlight>
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
    this.props.navigation.setParams({ setModalVisibles: this.setModalVisible,share: this.onShare });
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

