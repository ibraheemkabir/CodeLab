import React, { Component } from 'react';
import { Image, View,StyleSheet,Text } from 'react-native';
import { Card, CardItem,Button,Icon } from 'native-base';
import { TouchableWithoutFeedback, TouchableHighlight } from 'react-native-gesture-handler';

export default class CardImageExample extends Component {
	render() {
		const { navigate,data } = this.props
		return (
				<View>
					<Card>
						<CardItem cardBody style={{flexDirection: 'row',width: null}}>
						<Image source={{ uri: data.node.avatarUrl }} style={{ height: 380, width: null, flex: 1 }} />
						</CardItem>
					<View style={{
						flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 410, backgroundColor: 'rgba(0, 0, 0, 0.85)'}}>
							<CardItem 
							cardBody 
							style={{
								flex: 1,
								width: 500,
								flexDirection: 'row', 
								width: 150, 
								alignItems: 'center', 
								justifyContent: 'center',
								height: 380,
								backgroundColor: 'transparent'
							}}
							>
	
							</CardItem>
						</View>
						<View style={{
							flex: 1, alignItems: 'center', justifyContent: 'center'
						}}>
							<CardItem cardBody
								style={{
									width: 150,
									alignItems: 'center',
									justifyContent: 'center',
							}}>
							<Image source={{ uri: data.node.avatarUrl}} style={{ height: 150, width: 150, flex: 1 , marginTop: -80}} />
							</CardItem>
						</View>
					<View>
				</View>
			</Card>
				<View style={{marginTop: 60}}>
					<View style={{ alignItems: 'flex-end', fontFamily: 'roboto', fontWeight: '600', color: '#47525E', marginTop: -50, paddingRight: 25 }}>
						<TouchableHighlight onPress={() => navigate('Web', { login: data.node.login })}>
							<Image source={require('../../assets/images/share-symbol.png')}  />	
						</TouchableHighlight>
					</View>
					<View style={{ alignItems:'center',textAlign:'center'}}>
							<Text style={{ fontSize: 22, fontFamily: 'roboto', fontWeight: '600', color: '#47525E'}}>
								{data.node.name}
							</Text>
							<Text style={{ fontSize: 20, fontFamily: 'roboto', fontWeight: '400', color: '#47525E',marginTop: 15 }}>
								{data.node.bio}
							</Text>
					</View>
				</View>
				<View style={{ marginTop: 30, alignItems: 'center', textAlign: 'center' }}>
					<View style={{ alignItems: 'center', textAlign: 'center', flexDirection: 'row',margin: 10}}>
						<Text style={{ fontSize: 20, fontFamily: 'roboto', letterSpacing: 1, fontWeight: '400', color: '#8492A6' }}>
							<Text style={{ fontSize: 20, fontWeight: '700', color: '#47525E' }}>{data.node.following.totalCount}</Text> following
						</Text>
						<Text style={{ fontSize: 15, fontFamily: 'roboto', fontWeight: '400', color: '#47525E',justifyContent: 'space-around',padding: 10 }}>
						|
						</Text>
						<Text style={{ fontSize: 20, fontFamily: 'roboto', letterSpacing: 1, fontWeight: '400', color: '#8492A6'}}>
							<Text style={{ fontSize: 20, fontWeight: '700', color: '#47525E' }}>{data.node.starredRepositories.totalCount}</Text>  Stars
						</Text>
					</View>
				</View>
			<View style={{
				flex: 1,
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}>
					<View
						cardBody
						style={{
							flex: 1,
							flexDirection: 'row',
							justifyContent: 'space-between',
							padding: 30,
						}}>
						<Button style={styles.button}>
							<Text style={styles.btnText}>
								{data.node.repositories.totalCount}
									</Text>
							<Text style={styles.minibtnText}>
								Repositories
									</Text>
						</Button>
						<Button style={styles.button}>
							<Text style={styles.btnText}>
								{data.node.followers.totalCount}
									</Text>
							<Text style={styles.minibtnText}>
								Followers
									</Text>
						</Button>

					</View>
			</View>
		</View>
		);
	}
}

const styles = StyleSheet.create({
		button: {
		justifyContent: 'center', 
		alignContent: 'center', 
		backgroundColor: '#E18D96', 
		height: 200,
		width: 150, 
		backgroundColor: 'transparent',
		flexDirection: 'column',
		},
		btnText: {
			fontFamily: 'roboto',
			flex: 1, 
			textAlign: 'center', 
			fontWeight: '700', 
			color: '#47525E',
			fontSize: 85,
			letterSpacing: 1,
		},
		minibtnText: {
		fontFamily: 'roboto',
		flex: 1,
		textAlign: 'center',
		fontWeight: '700',
		color: '#47525E',
		fontSize: 17,
		letterSpacing: 1
	}
})