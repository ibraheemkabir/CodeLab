import React,{Component} from 'react';
import { ScrollView, StyleSheet,Text, View,Modal,TouchableHighlight,Image} from 'react-native';
import { graphql } from 'react-apollo'
import { Item, Input,Icon } from 'native-base';
import gql from 'graphql-tag';
import Lists from '../../components/listComponent/List'

export const FEED_QUERY = gql`
	 query {
    viewer {
      avatarUrl
    }
  }
`;

class LinksScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    let viewer = 'https://facebook.github.io/react/logo-og.png'
    const itemId = navigation.getParam('itemId', 'NO-ID');
    if (itemId !== null) {
      viewer = itemId.avatarUrl
    } 
    const searchVisibility = navigation.getParam('setModalVisibles');
    return {
      title: 'CodeLab',
      headerStyle: {
        backgroundColor: '#A02C2D',
        color: '#ffffff'
      },
      headerBackImage: (
        <Image
          source={{ url: viewer, width: 30, height: 30 }}
          style={{ marginLeft: 15, borderRadius: 15 }}
        />
      ),
      headerTitleStyle: {
        color: '#ffffff'
      },
      headerTintColor: 'white',
      headerRight: (
        (<Icon name="share-alt" size={30} color="#900" 
        onPress={() => searchVisibility(true)}
       />)
      ),
    }
  };

  state = {
    modalVisible: false,
    Url: '../../assets/images/robot-dev.png'
  };

  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  setIcon(itemId){
    this.setState({ Url: itemId.avatarUrl })
  }
  
  componentWillMount(){
    this.props.navigation.setParams({ setModalVisibles: this.setModalVisible});
  }

  render(){
    const { navigate } = this.props.navigation;
    let viewer = 'https://facebook.github.io/react/logo-og.png'
    const itemId = this.props.navigation.getParam('itemId', 'NO-ID');
    if(itemId!==null){
      viewer = itemId.avatarUrl
    } 
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.optionsTitleText}>Developers in Lagos, Nigeria</Text>
        </View>
        <ScrollView style={styles.container}>
          <Lists navigation={navigate} data={this.props.feedQuery}/>
          <Image source={{ uri: viewer }}
            style={{ width: 400, height: 400 }} />
        </ScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
        >
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
                  }}
                  style={{}}
                >
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
      </View>
    );
  }
}

export default graphql(FEED_QUERY, {
  name: 'feedQuery', // name of the injected prop: this.props.feedQuery...
  options: {
    fetchPolicy: 'network-only',
  },
})(LinksScreen )

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
