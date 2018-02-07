import { JURNEY_INFO_REF, TRIPS_MADE_REF } from '../firebase-ref-constants';
import firebase from "firebase";
import { updatePrice } from './current-price.ducks';
import { handleFetchError } from './fetch-reducer';
import { getCurrentDate, getCurrentTime, makeListItemID } from '../../helper-functions';

const DEFAULT_STATE = {};
export const FETCH_TRIPS_MADE_DATA = 'FETCH_TRIPS_MADE_DATA';

const MAKE_TRIP = 'MAKE_TRIP';

export const makeTrip = (jurneyId, jurneyPrice) => {
	const currentTime = getCurrentTime();
	const currentDate = getCurrentDate();
	
	const tripMadeData = {
		time: currentTime,
		tripId:makeListItemID(),
		date: currentDate,
		jurneyId: jurneyId,
		jurneyPrice: jurneyPrice
	}
	
	firebase.database()
		.ref(TRIPS_MADE_REF)
		.push(tripMadeData)
		.catch(error =>{handleFetchError(error)});
	
	updatePrice(jurneyPrice);
	
	return  ({
		type: MAKE_TRIP,
	});
}


//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case FETCH_TRIPS_MADE_DATA:
			return action.payload;
		case MAKE_TRIP:
			return;
		default:
			return state;
	}
};

export default reducer;