import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import getGithubTokenAsync from '../../utils/githubAuth';
import { Container, Title, Content, Item, Input, Button } from 'native-base';
import { AsyncStorage } from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';

export const FEED_QUERY = gql`
	 query {
    viewer {
      avatarUrl
    }
  }
`;

class LogoTitle extends React.Component {

	render() {
		console.log(this.props)
		return (
			<View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10}}>
				<Title style={{ color: 'white'}}>CodeLab</Title>
			</View>
		);
	}
}
class HomeScreen extends Component {
	static navigationOptions = {
		headerLeft: <LogoTitle />,
		headerStyle: {
			backgroundColor: '#A02C2D'
		},
		headerBackTitle: null,
	};

	state = {
		loading: false
	}

	async signInAsync() {
		this.setState({loading:true})
		try {
					const token = await getGithubTokenAsync();
					await AsyncStorage.setItem('GithubStorageKey', token);
					const viewer = this.props.feedQuery.viewer || null
					if (token !== null) {
						this.props.navigation.navigate('List', {
							itemId: viewer,
					})
					this.setState({loading:false})
					return token;
				}
		} catch ({ message }) {
			return message
			console.log('hello')
		}
	};

	render() {
		console.log(this.props)
		return (
			<Container>
				{
					this.state.loading && <View style={{ alignItems: 'center',paddingTop: 10 }}><Text><Image source={require('../../assets/images/loading.gif')} /></Text></View>
				}
				<Content style={styles.content}>
					<View style={styles.Image}>
						<Image
							source={require('../../assets/images/robot-dev.png')}
							style={{marginBottom: 15}}
						/>
					</View>					
					<Button 
					onPress={()=>this.signInAsync()}
					id= 'btn'
					style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#E18D96'}}
					>
						<Text style={{
							flex: 1, textAlign: 'center', fontWeight: 'bold', color: 'white' }} id='btntext'>
							Sign In with Github
						</Text>
					</Button>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	content: {
		flex: 1,
		justifyContent: 'center',
		alignContent: 'center',
		padding: 20,
		paddingTop: 0,
		marginBottom: 200
	},
	Input: {
		marginBottom: 20,
		textAlign: 'left'
	},
	Image: {
		flex: 1,
		alignItems: 'center',
		padding: 5
	},
	button: {
		flex: 1, 
		justifyContent: 'center', 
		alignContent: 'center', 
		backgroundColor: '#E18D96'
	}
})

export default graphql(FEED_QUERY, {
	name: 'feedQuery',
	options: {
		fetchPolicy: 'network-only',
	},
})(HomeScreen)
