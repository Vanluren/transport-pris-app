import React, { Component } from 'react';
import { View } from 'react-native';
import { bindActionCreators, createStore } from 'redux';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ContainerWithTopBar from '../../commons/ContainerWithTopBar/container-with-top-bar.container';
import JourneyPlanner from '../../commons/JourneyPlanner/journey-planner.container';
import TopBar from '../../commons/TopBar/top-bar.container.js';
import { submitNewJurney } from '../../services/firebase/ducks/jurney-info.ducks';
import { clearAllInputFields, updateInputField } from './ducks/edit-price-view.ducks';
import { themeBackgroundColor, viewMarginTop } from '../../services/theme/theme-constants';
import { getEditPriceViewState } from '../ducks/ui-state-reducer';

export const EditPriceNavigationOptions = {
	tabBarLabel: 'Edit Trips',
	tabBarIcon:(({focused, tintColor}) => (
		<Icon
			name={focused ? "ios-pricetags" : "ios-pricetags-outline"}
			size={26}
			style={{ color: tintColor }}
		/>
	)),
};

class EditPriceContainer extends Component {
	
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<View style={styles.container}>
				<TopBar
					topBarText='Add Jurney'
				/>
				<JourneyPlanner
					actions={this.props.actions}
					currentState={this.props.currState}
				/>
			</View>
		);
	};
}

const styles = {
	container:{
		flex: 2,
		elevation:1,
		marginTop: viewMarginTop,
		backgroundColor: themeBackgroundColor,
	},
};

const mapDispatchToProps= dispatch => ({
		actions: {
			submitButtonFunc: bindActionCreators(submitNewJurney, dispatch),
			updateInputField: bindActionCreators(updateInputField, dispatch),
			clearInputFields: bindActionCreators(clearAllInputFields, dispatch),
		}
});

const mapStateToProps = state => ({
	currState: {
		departureStation: state.EDIT_VIEW_STATE.departureStationInput,
		destinationStation: state.EDIT_VIEW_STATE.destinationStationInput,
		price: state.EDIT_VIEW_STATE.priceInput
	}
});
export default connect(mapStateToProps, mapDispatchToProps)(EditPriceContainer);