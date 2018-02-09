import React, { PropTypes } from 'react';
import { Alert, FlatList, View } from 'react-native';
import JurneyCard from './components/jurney-card.container';

const JurneyCardList = ({dataArray, cardOnPressFunc, cardLongPressFunc}) => {
	const renderCardList = ({item}) =>(
		<JurneyCard
			id={item.id}
			tripDep={item.departureStation}
			tripDest={item.destinationStation}
			tripPrice={item.price}
			onPressFunc={()=>{cardOnPressFunc(item.id, item.price)}}
			longPressFunc={()=>{alertRemoveJurney(item.id)}}
		/>
	);
	
	const alertRemoveJurney = (jurneyID) =>{
		Alert.alert(
			'Remove Jurney?',
			'Would you like to remove this jurney from the list?',
			[
				{text: 'Cancel'},
				{text: 'OK', onPress: ()=>{cardLongPressFunc(jurneyID)}},
			],
			{ cancelable: true }
		)
	}
	
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