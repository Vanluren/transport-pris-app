const DEFAULT_STATE = {
	departureStationInput: 'Departure Station',
	destinationStationInput: 'Destination Station',
	priceInput: 0,
};
const UPDATE_INPUT_FIELD_DESTINATION = 'UPDATE_INPUT_FIELD_DESTINATION';
const UPDATE_INPUT_FIELD_DEPARTURE = 'UPDATE_INPUT_FIELD_DEPARTURE';
const UPDATE_INPUT_FIELD_PRICE = 'UPDATE_INPUT_FIELD_PRICE';
const CLEAR_INPUT_FIELD = 'CLEAR_INPUT_FIELD';
const GET_EDIT_PRICE_VIEW_STATE = 'GET_EDIT_PRICE_VIEW_STATE';


export const updateInputField = (payload, fieldName) =>{
	const ACTION_TYPE = `UPDATE_INPUT_FIELD_${fieldName}`;
	return ({
			type: ACTION_TYPE,
			payload,
	});
}

export const clearAllInputFields = () => ({
		type: CLEAR_INPUT_FIELD
});

//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case UPDATE_INPUT_FIELD_DESTINATION:
			return {
				...state,
				destinationStationInput: action.payload,
			}
		case UPDATE_INPUT_FIELD_DEPARTURE:
			return {
				...state,
				departureStationInput: action.payload
			}
		case UPDATE_INPUT_FIELD_PRICE:
			return{
				...state,
				priceInput: action.payload
				
			}
		case CLEAR_INPUT_FIELD:
			return DEFAULT_STATE;
		default:
			return state;
	}
};

export default reducer;