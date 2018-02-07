import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import TripsMadeListItem from './components/trips-made-list-item';
import TopBar from '../../commons/TopBar/top-bar.container';

const TripsMadeList = ({data}) => {
	const renderListItems = ({item}) => (
		<TripsMadeListItem
			key={item.tripId}
			time={item.time}
			date={item.date}
		/>
	)
	const keyExtractor = (item) => item.tripId;
	
    return (
    	<FlatList
		    data={data}
		    renderItem={renderListItems}
		    keyExtractor={keyExtractor}
	    />
    );
};

export default TripsMadeList;