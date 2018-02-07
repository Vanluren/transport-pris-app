import React, { PropTypes } from 'react';
import { Text, View } from 'react-native';

const TopBar = ({text}) => (
	<View style={styles.topBar}>
		<Text style={styles.topBarText}>{text}</Text>
	</View>
);

TopBar.propTypes = {};
const styles = {
	topBar:{
		backgroundColor:'grey',
		paddingVertical: 10,
		paddingHorizontal:5,
	},
	topBarText:{
		color: 'white',
		fontSize:16,
		
	},
};

export default TopBar;