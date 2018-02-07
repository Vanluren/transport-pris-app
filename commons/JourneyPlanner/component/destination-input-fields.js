import React  from 'react';
import { Text, TextInput, View } from 'react-native';

const DestinationInputFields = ({inputFieldFunc, placeholderDep, placeholderDest}) => {
	
	return (
		<View style={styles.journeyContainer}>
			<View style={styles.textInputContainer}>
				<Text style={styles.jurneyText}>From:</Text>
				<TextInput
					style={styles.textInput}
					placeholder={placeholderDep}
					onChangeText={(input) => {
						inputFieldFunc(input, 'DEPARTURE')
					}}
				/>
			</View>
			<View style={styles.textInputContainer}>
				<Text style={styles.jurneyText}>To:</Text>
				<TextInput
					style={styles.textInput}
					placeholder={placeholderDest}
					onChangeText={(input) => {
						inputFieldFunc(input, 'DESTINATION')
					}}
				/>
			</View>
		</View>
	
	);
}

DestinationInputFields.propTypes = {};
const styles = {
	journeyContainer: {
		flex:2,
		flexDirection: 'column',
		alignItems: 'flex-start',
		justifyContent: 'space-around',
		borderBottomWidth: 1,
		borderColor: 'lightgrey',
	},
		textInputContainer: {
			flexDirection: 'row',
			alignItems: 'center',
		},
		jurneyText:{
			flex: 1,
			fontSize:18,
			padding:10,
		},
		textInput:{
			flex:2,
			textAlign: 'right'
		},
};

export default DestinationInputFields;