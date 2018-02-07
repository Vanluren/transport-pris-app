import React from 'react';
import { Text } from 'react-native';

const PriceText = ({price}) => {
	if(price < 0 ){
		return <Text style={[styles.priceText, styles.red]}>{price} kr,-</Text>;
	}else{
		return <Text style={[styles.priceText, styles.green]}>{price} kr,-</Text>
	}
}

PriceText.propTypes = {};
const styles = {
	priceText : {
		textAlign: 'center',
		fontSize: 30,
		justifyContent: 'center',
		alignSelf: 'center',
	},
	red:{
		color: 'red'
	},
	green:{
		color: 'green',
	},
};

export default PriceText;