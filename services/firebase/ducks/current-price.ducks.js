import firebase from "firebase";
import { CURRENT_PRICE_REF } from '../firebase-ref-constants';
import { handleFetchError } from './fetch-reducer';
import { getCurrentDate } from '../../helper-functions';

const DEFAULT_STATE = {
	CURRENT_PRICE: 0,
	LAST_UPDATE_MONTH:0,
	LAST_UPDATE_UNIX: 0,
}

export const FETCH_CURRENT_PRICE_INFO = 'FETCH_CURRENT_PRICE_INFO';
const UPDATE_PRICE = 'UPDATE_PRICE';

export const fetchCurrentPriceInfo  = () => async (dispatch) => {
	try {
		const currentMonth = new Date().getMonth();
		firebase.database()
			.ref(CURRENT_PRICE_REF)
			.on('value', (snap)=>{
			const currentPriceInfo = {
				CURRENT_PRICE: snap.val().currentPrice,
				LAST_UPDATE: snap.val().lastUpdate,
			}
			
			if (currentPriceInfo.LAST_UPDATE < currentMonth ){
				console.log('hello world');
			}
			
			dispatch({
				type: FETCH_CURRENT_PRICE_INFO,
				payload: currentPriceInfo
			})
		});
	} catch (err){
		handleFetchError(err)
	}
};

const fetchCurrentPrice = () => {
	let currPrice = 0;
	firebase.database()
		.ref(CURRENT_PRICE_REF)
		.once('value', (snap)=>{
			currPrice = snap.val().currentPrice;
		})
		.catch(error => handleFetchError(error));
	
	return currPrice;
};


export const updatePrice = (priceOfJurney) => {
	const currentDate = getCurrentDate();
	const currentPrice = fetchCurrentPrice();
	
	const newPrice = currentPrice + parseInt(priceOfJurney);
	
	const currentPriceObj = {
		lastUpdate: currentDate,
		currentPrice: newPrice
	};
	
	firebase.database()
		.ref(CURRENT_PRICE_REF)
		.update(currentPriceObj)
		.catch(error => {handleFetchError(error)} );
	
	return({
		type: UPDATE_PRICE,
	});
};


//remember to add the reducer to /src/reducers.js
const reducer = (state = DEFAULT_STATE, action) => {
	switch (action.type){
		case FETCH_CURRENT_PRICE_INFO:
			return action.payload;
		case UPDATE_PRICE:
			return;
		default:
			return state;
	}
};

export default reducer;