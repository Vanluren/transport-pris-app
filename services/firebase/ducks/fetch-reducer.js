import firebase from "firebase";
import currentPriceReducer, {FETCH_CURRENT_PRICE_INFO} from './current-price.ducks';
import jurneyInfoReducer, { FETCH_JURNEY_INFO_DATA } from './jurney-info.ducks';
import tripsMadeReducer, { FETCH_TRIPS_MADE_DATA } from './trips-made.ducks';
import { updateLoadingState } from '../../../views/ducks/ui-state-reducer';

const DEFAULT_STATE = {
	TRIPS_MADE:[],
	JURNEY_INFO:[],
	PRICE_INFO:{},
};


export function handleFetchError(error){
	console.error('Something happened! ', error)
};

export const fetchFirebaseData = (FIREBASE_REF) => async (dispatch) => {
	try {
		firebase.database().ref(FIREBASE_REF).on('value', (snap) =>{
			
			const fireBaseData = [];
			const typeWithRef = `FETCH_${FIREBASE_REF}_DATA`;
			
			snap.forEach((child)=>{
				fireBaseData.push(
					child.val()
				);
			});
			
			dispatch({
				type: typeWithRef,
				payload: fireBaseData,
			});
			dispatch(updateLoadingState(false));
		});
	} catch (err){
		handleFetchError(err)
	}
};


//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case FETCH_TRIPS_MADE_DATA:
			return {
				...state,
				TRIPS_MADE: tripsMadeReducer(state.TRIPS_MADE, action)
			}
		case FETCH_JURNEY_INFO_DATA:
			return {
				...state,
				JURNEY_INFO: jurneyInfoReducer(state.JURNEY_INFO, action),
			}
		case FETCH_CURRENT_PRICE_INFO:
			return {
				...state,
				PRICE_INFO: currentPriceReducer(state.PRICE_INFO, action)
			}
		default:
			return state;
	}
};

export default reducer;

