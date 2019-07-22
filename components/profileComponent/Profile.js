import React, { Component } from 'react';
import { Image, View,StyleSheet,Text,Platform } from 'react-native';
import { Card, CardItem,Button,Icon } from 'native-base';
import {TouchableOpacity } from 'react-native-gesture-handler';

export default class CardImageExample extends Component {
	render() {
		const { navigate,data } = this.props
		return (
				<View >
					<Card>
						<CardItem cardBody style={{flexDirection: 'row',width: null}}>
						<Image source={{ uri: data.node.avatarUrl }} style={styles.image} />
						</CardItem>
					<View style={styles.img}>
							<CardItem 
							cardBody 
							style={styles.imgOverlay}
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
					<View style={{ alignItems: 'flex-end', fontFamily: 'roboto', fontWeight: '600', marginTop: -50, paddingRight: 25 }}>
						<TouchableOpacity id="goToWeb" onPress={() => navigate('Web', { login: data.node.login })}>
							<Image source={require('../../assets/images/share-symbol.png')}  />	
						</TouchableOpacity>
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
				<View style={{ marginTop:10, alignItems: 'center', textAlign: 'center' }}>
					<View style={{ alignItems: 'center', textAlign: 'center', flexDirection: 'row',margin: 10, marginBottom: 2}}>
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
				flexDirection: 'column',
				justifyContent: 'space-between'
			}}>
					<View
						cardBody
						style={styles.buttons}>
						<View style={styles.button}>
							<Text style={styles.btnText}>
								{data.node.repositories.totalCount}
									</Text>
							<Text style={styles.minibtnText}>
								Repositories
									</Text>
						</View>
						<View style={styles.button}>
							<Text style={styles.btnText}>
								{data.node.followers.totalCount}
									</Text>
							<Text style={styles.minibtnText}>
								Followers
									</Text>
						</View>

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
	},
	...Platform.select({
		android: {
			img: {
				flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 410, backgroundColor: 'rgba(0, 0, 0, 0.85)'
			},
			image: {
				height: 250,
				width: null,
				flex: 1
			},
			imgOverlay: {
				flex: 1,
				width: 500,
				flexDirection: 'row',
				width: 150,
				alignItems: 'center',
				justifyContent: 'center',
				height: 250,
				backgroundColor: 'transparent'
			},
			buttons: {
				flexDirection: 'row',
				justifyContent: 'space-between',
				padding: 15,
				paddingBottom: 30,
				paddingTop: 0
			}
		},
	}),
	...Platform.select({
		ios: {
			img: {
				flex: 1, alignItems: 'center', justifyContent: 'center', position: 'absolute', width: 410, backgroundColor: 'rgba(0, 0, 0, 0.85)'
			},
			image:{
				height: 450, 
				width: null, 
				flex: 1
			},
			imgOverlay: {
				flex: 1,
				width: 500,
				flexDirection: 'row',
				width: 150,
				alignItems: 'center',
				justifyContent: 'center',
				height: 450,
				backgroundColor: 'transparent'
			},
				buttons:{
					flexDirection: 'row',
					justifyContent: 'space-between',
					padding: 35,
					paddingBottom: 30,
					paddingTop: 0
			}
		},
	}),
})