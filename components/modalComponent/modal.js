import React, { Component } from 'react';
import { Modal , View, TouchableHighlight,Image } from 'react-native'
import { Icon } from 'native-base';

export default class Modals extends Component {
	render() {
		return (
					<Modal
						animationType="slide"
						transparent={true}
						visible={this.props.modalVisible}>
					<View style={{
						flex: 1, marginTop: 22, height: 30, justifyContent: 'center', alignContent: 'center', alignItems: 'center', shadowColor: 'black',shadowOffset: { height: -4 }}}>
						<View style={{
							backgroundColor: 'white', height: 170, width: 400, flexDirection: 'row', justifyContent: 'space-between', justifyContent: 'center', alignContent: 'center', alignItems: 'center', flexDirection: 'column', shadowColor: 'black', shadowOffset: { height: -4 }, shadowOpacity: 0.5}}>
							<View style={{
								flex: 1,
								justifyContent: 'flex-start',
								alignContent: 'flex-start',
								alignItems: 'flex-start',
								paddingRight: 15,
							}}>
							<TouchableHighlight
								onPress = {() => this.props.setModalVisible(false)}
								style={{}}>
								<Image source={require('../../assets/images/close.png')} />
							</TouchableHighlight>
							</View>
								<View style={{flexDirection: 'row'}}>
									<Image source={require('../../assets/images/facebook.png')} style={{ height: 100, width: 100 }} />
									<Image source={require('../../assets/images/instagram.png')} style={{ height: 100, width: 100 }} />
									<Image source={require('../../assets/images/twiiter.png')} style={{ height: 100, width: 100 }} />
								</View>
							</View>
						</View>
					</Modal>
		);
	}
}
