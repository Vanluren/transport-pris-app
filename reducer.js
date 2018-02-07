import { combineReducers } from 'redux';
import FirebaseReducer from './services/firebase/ducks/fetch-reducer';
import EDIT_VIEW_STATE from './views/EditPriceView/ducks/edit-price-view.ducks';
import UI_STATE from './views/ducks/ui-state-reducer';

export default combineReducers({
	FIREBASE_DATA: FirebaseReducer,
	EDIT_VIEW_STATE,
	UI_STATE
})