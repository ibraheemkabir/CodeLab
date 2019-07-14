import React, { Component } from 'react';
import {View,Image} from 'react-native';
import { Container, Content } from 'native-base';
import { List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';


export default class ListAvatarExample extends Component {

	render() {
		const { navigation,data } = this.props;
		return (
			<Container>
				{
					data.loading
					? <View style={{alignItems:'center'}}><Text><Image source={require('../../assets/images/loading.gif')}/></Text></View>
					: <Content>
							<List>
								<ListItem
									avatar
									onPress={() => navigation('Profile')}
								>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../..//assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
								<ListItem avatar>
									<Left>
										<Thumbnail source={require('../../assets/images/robot-dev.png')} />
									</Left>
									<Body>
										<Text>Kumar Pratik</Text>
										<Text note>Doing what you like will always keep you happy . .</Text>
									</Body>
									<Right>
										<Text note>3:43 pm</Text>
									</Right>
								</ListItem>
							</List>
						</Content>
				}
			</Container>
		);
	}
}