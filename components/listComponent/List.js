import React, { Component } from 'react';
import {StyleSheet,Platform} from 'react-native'
import { Container, Content, List, ListItem, Left, Body, Thumbnail, Text } from 'native-base';


export default class ListAvatarExample extends Component {

	state = {
		data: this.props
	}
	
	render() {
		const { navigation,data } = this.props;
		return (
			<Container style={styles.container}>
				{
					data &&
					<Content>
						<List>
								{
									data.map(data=>(
										<ListItem
											avatar
											id='listItem'
											onPress={() => navigation('Profile',{
												data
											})}
											key={data.node.name}
										>
											<Left>
												<Thumbnail source={{uri: data.node.avatarUrl}}/>
											</Left>
											<Body>
												<Text>{data.node.name}</Text>
												<Text note>{data.node.bio}</Text>
											</Body>
										</ListItem>
									))
								}
							</List>
						</Content>
				}
			</Container>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		...Platform.select({
			android: {
				height: 500,
			},
		}),
	},
});