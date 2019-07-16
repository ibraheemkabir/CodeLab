import React from 'react';
import {
	AsyncStorage,
	View,
} from 'react-native';
import { graphql } from 'react-apollo'
import gql from 'graphql-tag';


export const FEED_QUERY = gql`
	 query {
    viewer {
      avatarUrl
    }
  }
`;

class AuthLoadingScreen extends React.Component {
	constructor(props) {
		super(props);
		this.auth();
	}
	static navigationOptions = ({ navigation }) => {
		return {
			headerLeft: null,
			headerLeft: <View></View>,
			headerBackTitle: null
		}
	};
	auth = async () => {
		const viewer = await this.props.feedQuery.viewer || null
		const userToken = await AsyncStorage.getItem('GithubStorageKey');
		this.props.navigation.navigate(userToken ? 'List' : 'Main', { itemId: viewer});
	};

	// Render any loading content that you like here
	render() {
		return (
			<View>
			</View>
		);
	}
}

export default graphql(FEED_QUERY, {
	name: 'feedQuery',
	options: {
		fetchPolicy: 'network-only',
	},
})(AuthLoadingScreen)