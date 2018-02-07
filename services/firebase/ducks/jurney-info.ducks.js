import { JURNEY_INFO_REF } from '../firebase-ref-constants';
import firebase from "firebase";
import { handleFetchError } from './fetch-reducer';
import { makeListItemID } from '../../helper-functions';

const DEFAULT_STATE = [];

export const FETCH_JURNEY_INFO_DATA = 'FETCH_JURNEY_INFO_DATA';
const SUBMIT_NEW_JURNEY = 'SUBMIT_NEW_JURNEY';


export const submitNewJurney = (departureStation, destinationStation, price) => async (dispatch) => {
	try {
		const newJurney = {
			id: makeListItemID(),
			departureStation: departureStation,
			destinationStation: destinationStation,
			price: price
		};
		
		firebase.database()
			.ref(JURNEY_INFO_REF)
			.push(newJurney)
			.catch((error)=>{
				console.error('Couldn\'t submit new trip!', error)
			});
		
		dispatch({
			type: SUBMIT_NEW_JURNEY,
		});
	} catch (err){
		handleFetchError(err);
	}
};


//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case FETCH_JURNEY_INFO_DATA:
			return action.payload;
		case SUBMIT_NEW_JURNEY:
			return state;
		default:
			return state;
	}
};

export default reducer;