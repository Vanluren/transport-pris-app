import React, { PropTypes } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon  from 'react-native-vector-icons/Ionicons';

const JurneyCard = ({tripDep, tripDest, tripPrice, onPressFunc, longPressFunc}) => (
	<TouchableOpacity
		onPress={onPressFunc}
		onLongPress={longPressFunc}
	>
		<View  style={styles.container}>
			<View style={[styles.textContainer, styles.localText]}>
				<Text style={styles.text}>{tripDep}</Text>
				<Icon
					name='ios-arrow-forward'
					style={styles.icon}
				/>
				<Text style={styles.text}>{tripDest}</Text>
			</View>
			<View style={[styles.textContainer, styles.price]}>
				<Text style={styles.text}>{tripPrice} kr,-</Text>
			</View>
		</View>
	</TouchableOpacity>
);

JurneyCard.propTypes = {};
const styles = {
	container:{
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#b41730',
		alignItems: 'center',
		paddingVertical: 25,
		paddingHorizontal: 5,
		margin: 5,
		elevation: 3,
		shadowColor: "#000000",
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 0
		}
	},
	textContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		overflow: 'hidden'
	},
	text: {
		color: 'white',
		fontSize: 22,
		padding: 5,
	},
		localText :{
			flex: 2,
		},
		price: {
			flex: 1,
			justifyContent: 'flex-end'
		},
	icon: {
		color: 'white',
		fontSize: 22,
	}
};

export default JurneyCard;