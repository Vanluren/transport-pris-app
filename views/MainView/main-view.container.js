import React, {Component} from 'react'
import { Platform, ActivityIndicator, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PriceComponent from '../../commons/PriceComponent/price-component.container';
import TripCardList from '../../commons/JurneyCardList/jurney-card-list.container';
import { makeTrip } from '../../services/firebase/ducks/trips-made.ducks';
import TopBar from '../../commons/TopBar/top-bar.container.js';
import { themeBackgroundColor, viewMarginTop } from '../../services/theme/theme-constants';

export const MainViewNavigationOptions = {
	tabBarLabel: 'Home',
	tabBarIcon:(
		({focused, tintColor}) => (
			<Icon
				name={focused ? "ios-home" : "ios-home-outline"}
				size={26}
				style={{ color: tintColor }}
			/>
		)
	),
};

class MainView extends Component {
	
	constructor(props){
		super(props);
	}
	
	render () {
		if(this.props.isLoading){
			return(
				<View style={styles.container}>
					<TopBar
						topBarText='Home'
					/>
					<ActivityIndicator
						size='large'
						style={styles.activityIndicator}
					/>
				</View>
			);
			
		}
	    return(
	      <View style={styles.container}>
		      <TopBar
			      topBarText='Home'
		      />
		      <PriceComponent
			     currentPrice={this.props.currentPrice}
		      />
		      <TripCardList
			      dataArray={this.props.jurneyInfo}
			      cardOnPressFunc={this.props.makeTrip}
		      />
	      </View>
	    );
	}
}
const styles = StyleSheet.create({
  container: {
  	flex: 1,
	  backgroundColor: themeBackgroundColor,
	  marginTop: viewMarginTop,
	  elevation:1,
  },
	activityIndicator:{
  	    alignSelf: 'center',
	}
});

const mapStateToProps = state => ({
		jurneyInfo: state.FIREBASE_DATA.JURNEY_INFO,
		currentPrice: state.FIREBASE_DATA.PRICE_INFO.CURRENT_PRICE,
		isLoading: state.UI_STATE.IS_LOADING,
});
const mapDispatchToProps = dispatch => ({
		makeTrip: bindActionCreators(makeTrip, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView) ;