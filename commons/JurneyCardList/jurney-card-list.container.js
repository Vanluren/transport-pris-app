import React, { PropTypes } from 'react';
import { ActivityIndicator, FlatList, View } from 'react-native';
import JurneyCard from './components/jurney-card.container';


const JurneyCardList = ({dataArray, cardOnPressFunc}) => {
	const renderCardList = ({item}) =>(
		<JurneyCard
			id={item.id}
			tripDep={item.departureStation}
			tripDest={item.destinationStation}
			tripPrice={item.price}
			onPressFunc={()=>{cardOnPressFunc(item.id, item.price)}}
		/>
	);
	
	const keyExtractor = (item) => item.id;
	
	return (
		<View style={styles.container}>
			<FlatList
				data={dataArray}
				renderItem={renderCardList}
				keyExtractor={keyExtractor}
			/>
		</View>
	);
}

const styles = {
	container: {
		flex: 3,
		justifyContent: 'center',
	}
};

export default JurneyCardList;