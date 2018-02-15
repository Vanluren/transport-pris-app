import React  from 'react';
import { View } from 'react-native';
import ContainerTopBar from './components/top-bar';

const ContainerWithTopBarContainer = ({children, topBarText, style}) => (
	<View
		style={[styles.container, style]}>
		<ContainerTopBar
			text={topBarText}
		/>
			{children}
	</View>
);

const styles = {
	container: {
		display: 'flex',
		//flex:1,
		backgroundColor: 'white',
		shadowColor: "#000000",
		shadowOpacity: 0.8,
		elevation: 2,
		shadowRadius: 2,
		shadowOffset: {
			height: 0,
			width: 0
		},
		marginTop:10,
		marginBottom:10,
		marginHorizontal: 5,
	},
};

export default ContainerWithTopBarContainer;