import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { marginTop, themeBackgroundColor, viewMarginTop } from '../../services/theme/theme-constants';
import { connect } from 'react-redux';
import ContainerWithTopBar from '../../commons/ContainerWithTopBar/container-with-top-bar.container';
import TripsMadeList from '../../commons/TripsMadeList/trips-made-list.container';
import TopBar from '../../commons/TopBar/top-bar.container.js';

export const TripOverviewNavigationOptions = {
	tabBarLabel: 'Trips',
	tabBarIcon:(({focused, tintColor}) => (
		<Icon
			name={focused ? "ios-list-box" : "ios-list-box-outline"}
			size={26}
			style={{ color: tintColor }}
		/>
	)),
};

class TripOverviewViewContainer extends Component {

	constructor(props){
		super(props);
	}
	
	render(){
		return (
			<View style={styles.viewContainer}>
				<TopBar
					topBarText='Past Trips'
				/>
				<ContainerWithTopBar
					topBarText='Trips'
				>
					<TripsMadeList
						data={this.props.tripsMade}
					/>
				</ContainerWithTopBar>
			</View>
		);
	}
}

TripOverviewViewContainer.propTypes = {};
const styles = {
	viewContainer: {
		flex: 1,
		backgroundColor: themeBackgroundColor,
		marginTop: viewMarginTop,
	},
};

const mapStateToProps = state =>({
		tripsMade: state.FIREBASE_DATA.TRIPS_MADE,
});

export default connect(mapStateToProps)(TripOverviewViewContainer);