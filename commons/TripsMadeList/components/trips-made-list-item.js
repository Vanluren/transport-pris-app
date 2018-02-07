import React from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const TripsMadeListItem = ({date, price, time}) => (
	<View style={styles.container}>
		<View style={styles.timeContainer}>
			<Text style={styles.timeText}>
				{date}
			</Text>
			<Text style={styles.timeText}>{time}</Text>
		</View>
		<View style={styles.jurneyInfoContainer}>
			<Text style={styles.infoText}>Aarhus</Text>
			<Icon
					name='ios-arrow-forward'
					style={styles.infoText}
			/>
			<Text style={styles.infoText}>Aalborg</Text>
		</View>
	</View>
);
const styles = {
	container: {
		borderWidth: 0.5,
		borderColor: 'lightgrey',
		padding: 10,
	},
		timeContainer:{
			flexDirection: 'row',
			justifyContent: 'space-between',
			//paddingHorizontal: 10,
			//paddingVertical: 15,
		},
			timeText:{
				color: 'grey',
				fontSize: 12,
			},
		jurneyInfoContainer: {
			flexDirection: 'row',
			justifyContent: 'space-between',
			padding: 15,
		},
			infoText:{
				fontSize: 22,
			}
	
}

export default TripsMadeListItem;