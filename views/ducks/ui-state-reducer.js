import editPriceViewReducer from '../EditPriceView/ducks/edit-price-view.ducks';

const DEFAULT_STATE = {
	IS_LOADING: false,
}

const GET_EDIT_PRICE_VIEW_STATE = 'GET_EDIT_PRICE_VIEW_STATE';

export const getEditPriceViewState = () => ({
	type: GET_EDIT_PRICE_VIEW_STATE,
});

const UPDATE_LOADING_STATE = 'UPDATE_LOADING_STATE';

export const updateLoadingState = payload => ({
	type: UPDATE_LOADING_STATE,
	payload,
});

//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case UPDATE_LOADING_STATE:
			return {
				...state,
				IS_LOADING: action.payload
			}
		default:
			return state;
	}
};

export default reducer;