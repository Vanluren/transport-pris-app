import React, { PropTypes } from 'react';
import { Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const PriceInputField = ({inputFieldFunc}) =>{
	
	return (
		<View style={styles.container}>
			<View
				style={styles.inputContainer}
			>
				<Text style={styles.text}>
					Price:
				</Text>
				<TextInput
					style={styles.inputField}
					placeholder='0 kr,-'
					onChangeText={(input) => inputFieldFunc(input, 'PRICE')}
					keyboard='numeric'
				/>
			</View>
		</View>
	);
	
}
PriceInputField.propTypes = {};
const styles = {
	container: {
		flex:1,
		flexDirection: 'column',
		//height: 200,
	},
	inputContainer:{
		flexDirection: 'row',
		//borderBottomWidth: 1,
		//borderColor: 'lightgrey',
	},
		text:{
			flex:2,
			fontSize: 18,
			padding:10,
		},
		inputField: {
			flex: 1,
			fontSize: 18,
			padding:10,
			textAlign: 'right'
		},
};

export default PriceInputField;