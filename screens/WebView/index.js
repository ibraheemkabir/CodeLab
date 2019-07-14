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
		return (
			<WebView
				source={{ uri: 'https://github.com/ibraheemkabir' }}
			/>
		);
	}
}