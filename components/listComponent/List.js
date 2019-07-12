import React, { Component } from 'react';
import {Modal,View,TouchableHighlight} from 'react-native';
import { Container, Button, Content, Item, Input } from 'native-base';
import { List, ListItem, Left, Body, Right, Thumbnail, Text,Icon } from 'native-base';

export default class ListAvatarExample extends Component {

	render() {
		const { navigation } = this.props;
		return (
			<Container>
				<Content>
				
					<List>
						<ListItem 
						avatar
						onPress={()=> navigation('Profile')}
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
			</Container>
		);
	}
}