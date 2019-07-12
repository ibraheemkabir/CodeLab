import React,{Component} from 'react';
import { ScrollView, StyleSheet,Text, View,Modal,TouchableHighlight } from 'react-native';
import {Icon} from 'native-base';
import { Container, Button, Content, Item, Input } from 'native-base';

import Lists from '../../components/listComponent/List'

export default class LinksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    const some = navigation.getParam('setModalVisibles')
    return {
      title: 'CodeLab',
      headerStyle: {
        backgroundColor: '#A02C2D',
        color: '#ffffff'
      },
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerTintColor: 'white',
      headerRight: (
        <Icon
          type="FontAwesome"
          name="search"
          style={{ fontSize: 25, paddingRight: 10, color: 'white' }}
          onPress={()=>some(true)}
        />
      ),
    }
  };

  state = {
    modalVisible: false,
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  componentWillMount(){
    this.props.navigation.setParams({ setModalVisibles: this.setModalVisible });

  }

  
  render(){
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>

          <View
            style={{
              flex: 1, marginTop: 22, height: 20, justifyContent: 'center', alignContent: 'center', alignItems: 'center', borderStyle: 'solid', borderColor: 'black'
            }}>
            <View style={{
              backgroundColor: 'white',
              height: 150,
              width: 400,
              alignItems:
                'flex-end',
              borderRadius: 20,
              borderStyle: 'solid',
              borderColor: 'black',
              shadowColor: 'black',
              shadowOffset: { height: -5, },
              shadowColor: 'black',
              shadowOpacity: 1.0,
              paddingLeft: 10,
              paddingTop: 10
            }}
            >
              <View style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                paddingRight: 15,
              }
              }>
                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Icon name='close' />
                </TouchableHighlight>
              </View>
              <Item style={{ marginTop: 10, margin: 30, paddingLeft: 20 }}>
                <Input placeholder="Search" />
                <Icon name="ios-search" />
              </Item>
            </View>
          </View>
        </Modal>
        <View style={styles.title}>
          <Text style={styles.optionsTitleText}>Developers in Lagos, Nigeria</Text>
        </View>
        <ScrollView style={styles.container}>
          <Lists navigation={navigate} setModalVisible={this.setModalVisible} modalVisible={this.state.modalVisible}/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
    optionsTitleText: {
      fontSize: 16,
      marginLeft: 15,
      marginTop: 9,
      textAlign: 'center',
      fontWeight: '600', 
    },
    title: {
      borderStyle: 'solid',
      backgroundColor: '#fdfdfd',
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#EDEDED',
      paddingBottom: 25
    }
});
