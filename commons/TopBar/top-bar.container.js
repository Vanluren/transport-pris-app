import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';
import { themePrimary } from '../../services/theme/theme-constants';

const TopBarContainer = ({topBarText}) => (
	<View style={styles.container}>
		<Text style={styles.text}>
			{topBarText.toUpperCase()}
		</Text>
	</View>
);

TopBarContainer.propTypes = {};
const styles = {
	container:{
		height: 50,
		backgroundColor: themePrimary,
		justifyContent: 'center',
		elevation: 2,
		shadowColor: "#000000",
		shadowOpacity: 0.8,
		shadowRadius: 2,
		shadowOffset: {
			height: 1,
			width: 1
		}
	},
	text: {
		color: 'white',
		fontSize: 18,
		paddingHorizontal:10
	},
};

export default TopBarContainer;