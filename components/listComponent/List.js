import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import { List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';


export default class ListAvatarExample extends Component {

	state = {
		data: this.props
	}
	
	render() {
		const { navigation,data } = this.props;
		return (
			<Container>
				{
					data &&
					<Content>
							<List>
								{
									data.map(data=>(
										<ListItem
											avatar
											style={{}}
											onPress={() => navigation('Profile',{
												data
											})}
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