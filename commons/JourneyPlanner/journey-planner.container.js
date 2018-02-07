import React  from 'react';
import { View } from 'react-native';
import ContainerWithTopBar from '../ContainerWithTopBar/container-with-top-bar.container';
import DestinationInputFields from './component/destination-input-fields';
import PriceInputField from './component/price-input-field';
import Button from '../../commons/Button/button.container';


const JourneyPlannerContainer = ({actions, currentState}) => (
	<ContainerWithTopBar
		topBarText='Jurney Info'
	>
		<View style={styles.innerContainer}>
			<DestinationInputFields
				inputFieldFunc={actions.updateInputField}
				placeholderDep={currentState.departureStation}
				placeholderDest={currentState.destinationStation}
			/>
			<PriceInputField
				inputFieldFunc={actions.updateInputField}
			/>
		</View>
		<Button
			onPressFunc={() => {
				actions.submitButtonFunc(
					currentState.departureStation,
					currentState.destinationStation,
					currentState.price
				)
				actions.clearInputFields();
			}}
		/>
	</ContainerWithTopBar>
);

const styles = {
	innerContainer:{
		height:150,
		marginHorizontal: 10
	},
};

export default JourneyPlannerContainer;