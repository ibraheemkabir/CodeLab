import React,{Component} from 'react';
import { ScrollView, StyleSheet,Text, View,Modal,TouchableHighlight,Image,AsyncStorage,Alert,RefreshControl,TouchableOpacity} from 'react-native';
import { graphql } from 'react-apollo'
import { Item, Input,Icon } from 'native-base';
import gql from 'graphql-tag';
import Lists from '../../components/listComponent/List'

export const DevelopersList = gql`
{
  search(query: "location:lagos", type: USER, first: 100) {
		userCount,
    edges {
      node {
        ... on User {
          name
          login
          bio
          email
          location
          avatarUrl
          createdAt
          starredRepositories {
              totalCount
          }
          repositories{
          totalCount
          }
          followers{
            totalCount
          }
          following{
            totalCount
          }
        }
      }
    }
  }
  viewer {
      avatarUrl
    }
}
`;


class LinksScreen extends Component {
  static navigationOptions = ({ navigation }) => {   
    const avatar = navigation.getParam('avatar');
    const searchVisibility = navigation.getParam('setModalVisibles');
    const signOut = navigation.getParam('signOut');
    return {
      title: 'CodeLab',
      headerStyle: {
        backgroundColor: '#A02C2D',
        color: '#ffffff',

      },
      headerLayoutPreset: 'center',
      headerTitleStyle: {
        color: '#ffffff',
        alignContent:'center',
        justifyContent: 'center',
        alignItems: 'center'
      },
      headerTintColor: 'white',
      headerRight: (
        <TouchableOpacity onPress={() => searchVisibility(true)}>
          <Image source={require('../../assets/images/search.png')} style={{ marginRight: 15}}/>
        </TouchableOpacity> 
      ),
      headerLeft: (
        <TouchableOpacity
          onPress={() => signOut()}
          underlayColor={'#444444'}>
            {
              avatar ?
              <Image
                style={{ marginLeft: 15, borderRadius: 15, width: 35, height: 35 }}
                source={{ uri: avatar }}
              />
              :
              <Icon type='FontAwesome' name='user' 
              style={{ marginLeft: 15, borderRadius: 15, width: 30, height: 30,color:'white' }}/>  
            }
        </TouchableOpacity >
      ),
      headerBackTitle: null,
    }
  };

  state = {
    modalVisible: false,
    Url: '../../assets/images/robot-dev.png',
    data: [],
    refreshing: false,
  };

  
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }

  _signOut = async () => {
    try {
      await AsyncStorage.removeItem('GithubStorageKey')
      this.props.navigation.navigate('Main')
    } catch (error) {
      return error.message
    }
  }

  _signOutAsync = async () => {
    Alert.alert(
      'Are you sure you want to log Out',
      '',
      [
        { text: 'Confirm', onPress: () => this._signOut() },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  };

  async componentDidMount(){
    this.props.navigation.setParams({ setModalVisibles: this.setModalVisible, signOut: this._signOutAsync, avatar: this.props.navigation.getParam('itemId')});
  }

  componentDidUpdate(prevProps){
    if (this.props.Developers.loading !== prevProps.Developers.loading){
      if (this.props.Developers.search){
        this.setState({ data: this.props.Developers.search.edges })
        this.props.navigation.setParams({avatar: this.props.Developers.viewer.avatarUrl });
      }
    }
  }

  filter(text){
    const developers = this.props.Developers.search.edges;
    const filter = developers.filter(data=> data.node.name.includes(text))
    this.setState({
      data: filter
    })
  }

  _onRefresh = async ()  => {
    this.setState({ refreshing: true });
    try{
      await this.props.Developers.refetch()
      this.setState({ refreshing: false, data: this.props.Developers.search.edges })
      this.props.navigation.setParams({ avatar: this.props.Developers.viewer.avatarUrl });
    }catch(e){
      this.setState({ refreshing: false})
      console.log(e)
    }
  }
  
  render(){    
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.optionsTitleText}>Developers in Lagos, Nigeria</Text>
        </View>
        <ScrollView style={styles.container} 
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={()=>this._onRefresh()}
            />
          }
        >
          {
            this.props.Developers.loading 
              ? <View style={{ alignItems: 'center' }}><Text><Image source={require('../../assets/images/loading.gif')} /></Text></View>
                : !this.props.Developers.search
                ? <View style={{ alignItems: 'center' }}><Text style={styles.error}>Error Loading Developers...Check Network Connection</Text></View>
              : <Lists navigation={navigate} data={this.state.data} refetch={this.props.Developers.refetch}/>
          }      
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
              width: 300,
              alignItems:
                'flex-end',
              borderRadius: 20,
              borderStyle: 'solid',
              borderColor: 'black',
              shadowColor: 'black',
              shadowOffset: { height: -5},
              shadowColor: 'black',
              shadowOpacity: 1.0,
              paddingLeft: 10,
              paddingTop: 10,
              elevation: 5
            }}
            >
              <View style={{
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                paddingRight: 15,
              }
              }>
                <TouchableOpacity 
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}
                  style={{}}
                >
                  <Image source={require('../../assets/images/close.png')} />
                </TouchableOpacity>
              </View>
              <Item style={{ marginTop: 10, margin: 30, paddingLeft: 20 }}>
                <Input placeholder="Search"
                  onChangeText={(text) => this.filter(text)}
                />
                <Icon name="ios-search" />
              </Item>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default graphql(DevelopersList, {
  name: 'Developers', // name of the injected prop: this.props.feedQuery...
})(LinksScreen )

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
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
    },
    error: {
      flex: 1,
      fontSize: 12,
      color: 'red',
      justifyContent: "center",
      alignContent: "center",
      alignItems: 'center'
    }
});
