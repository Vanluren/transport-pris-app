import React from 'react';
import {initializeApp} from 'firebase';
import { TabNavigator } from 'react-navigation';
import EditPriceView, { EditPriceNavigationOptions } from './views/EditPriceView/edit-price-view.container';
import MainView, { MainViewNavigationOptions } from './views/MainView/main-view.container';
import { firebaseConfig } from './services/firebase/firebase.config';
import { RootTabsNavigationOptions } from './services/navigation/RootTabNavigation';
import TripOverviewView, {TripOverviewNavigationOptions} from './views/TripOverviewView/trip-overview-view.container';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducer';
import { CURRENT_PRICE_REF, JURNEY_INFO_REF, TRIPS_MADE_REF } from './services/firebase/firebase-ref-constants';
import { fetchFirebaseData } from './services/firebase/ducks/fetch-reducer';
import { fetchCurrentPriceInfo } from './services/firebase/ducks/current-price.ducks';
import { getEditPriceViewState, updateLoadingState } from './views/ducks/ui-state-reducer';

console.ignoredYellowBox = ['Remote debugger'];

const RootTabs = TabNavigator({
	Edit: {
		screen: EditPriceView,
		navigationOptions: EditPriceNavigationOptions
	},
	Home: {
		screen: MainView,
		navigationOptions: MainViewNavigationOptions,
	},
	Overview: {
		screen: TripOverviewView,
		navigationOptions: TripOverviewNavigationOptions,
	}
}, RootTabsNavigationOptions);

initializeApp(firebaseConfig)

const middleware = [ thunk ];

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(...middleware),
	)
);


store.dispatch(updateLoadingState(true));
store.dispatch(fetchFirebaseData(JURNEY_INFO_REF))
store.dispatch(fetchFirebaseData(TRIPS_MADE_REF))
store.dispatch(fetchCurrentPriceInfo(CURRENT_PRICE_REF))
store.dispatch(getEditPriceViewState())


const App = () => (
	<Provider store={store}>
		<RootTabs/>
	</Provider>
	
);

export default App;