import React from 'react';
import { View, StyleSheet } from 'react-native';
import ContainerWithTopBar from '../ContainerWithTopBar/container-with-top-bar.container';
import PriceText from './components/price-text';
const PriceComponent = ({currentPrice}) => {
	
	return (
		<ContainerWithTopBar
			topBarText='Current Savings'
		>
				<View style={priceStyle.priceContainer}>
					<PriceText
						price={currentPrice}
					/>
				</View>
		</ContainerWithTopBar>
	);
}

const priceStyle = StyleSheet.create({
	priceContainer: {
  	    //flex: 1,
		height: 150,
		justifyContent: 'center',
		alignItems: 'center',
		alignContent:'center',
		backgroundColor: 'white',
	},
});
export default PriceComponent;
