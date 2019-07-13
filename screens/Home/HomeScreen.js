import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { graphql } from 'react-apollo'
import { Container, Icon, Title, Content, Item, Input, Button } from 'native-base';
import gql from 'graphql-tag';

export const FEED_QUERY = gql`
	query FeedQuery {
		authors {
			name
			books{
				name
			}
		}
	}
`;

class LogoTitle extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, flexDirection: 'row', paddingLeft: 10}}>
				<Title style={{ color: 'white'}}>CodeLab</Title>
			</View>
		);
	}
}
class HomeScreen extends Component {
	static navigationOptions = {
		headerTitle: <LogoTitle />,
		headerStyle: {
			backgroundColor: '#A02C2D'
		},
	};

	render() {
		console.log(this.props.feedQuery)
		const { navigate } = this.props.navigation;
		return (
			<Container>
				<Content style={styles.content}>
					<View style={styles.Image}>
						<Image
							source={require('../../assets/images/robot-dev.png')}
							style={{marginBottom: 15}}
						/>
					</View>
					<Item style={styles.Input}>
						<Input placeholder="GitHub UserName" style={{ textAlign: 'left' }} />
					</Item>
					<Item style={styles.Input}>
						<Input placeholder="GitHub Password" style={{ textAlign: 'left' }} />
					</Item>
					<Button 
					onPress={() => navigate('List')}
					style={{ flex: 1, justifyContent: 'center', alignContent: 'center', backgroundColor: '#E18D96'}}
					>
						<Text style={{
							flex: 1, textAlign: 'center', fontWeight: 'bold', color: 'white' }}>
							Login
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
	name: 'feedQuery', // name of the injected prop: this.props.feedQuery...
	options: {
		fetchPolicy: 'network-only',
	},
})(HomeScreen)
