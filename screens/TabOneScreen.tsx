import * as React from 'react';
import {Image, ImageBackground, StyleSheet, View} from 'react-native';
import { Container, Button } from 'native-base';

import {Text} from '../components/Themed';
import {FadeInView} from "../components/FadeInView";
import {Component} from "react";

export default class TabOneScreen extends Component {


	render() {

		return (
			<View style={{...styles.container}}>
				<ImageBackground source={require('../assets/images/gradient.jpeg')} style={styles.background}>
					<FadeInView duration={2000}>
						<Text style={styles.title}>Grow a Pine</Text>

						<Button bordered light style={styles.button}>
							<Text style={styles.buttonText}>Start</Text>
						</Button>

						<FadeInView duration={3000}>
							<Image source={require('../assets/images/pinetree01.png')} style={styles.tree} />
						</FadeInView>
					</FadeInView>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		padding: 10,
		alignSelf: 'center',
		margin: 40,
		height: 80,
		textAlign: 'center',
		backgroundColor: "rgba(255, 255, 255, 0.1)"
	},
	buttonText: {
		fontSize: 20,
		paddingLeft: 20,
		paddingRight: 20,
	},
	background: {
		flex: 1,
		flexDirection: "column",
		resizeMode: "cover",
		alignItems: "center",
		paddingTop: 100
	},
	title: {
		fontSize: 60,
		fontWeight: 'bold',
		marginTop: 30
	},
	tree: {

	}
});
