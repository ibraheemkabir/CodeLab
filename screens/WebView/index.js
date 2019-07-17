import React, { Component } from 'react';
import { WebView } from 'react-native';

export default class MyWeb extends Component {
	static navigationOptions = {
		headerStyle: {
			backgroundColor: '#A02C2D',
		},
		headerTintColor: 'white'

	};

	render() {
		const data = this.props.navigation.getParam('login')
		return (
			<WebView
				source={{ uri: `https://github.com/${data}` }}
			/>
		);
	}
}