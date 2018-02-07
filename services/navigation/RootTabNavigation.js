import { themePrimary, themeSecondary } from '../theme/theme-constants';

export const RootTabsNavigationOptions = {
	tabBarPosition: 'bottom',
	animationEnabled: true,
	showIcon: true,
	swipeEnabled: true,
	initialRouteName: 'Home',
	tabBarOptions: {
		activeTintColor: themePrimary,
		labelStyle: {
			fontSize: 12,
		},
		style: {
			height: 50,
			backgroundColor: themeSecondary,
			elevation: 3,
			shadowColor: "#000000",
			shadowOpacity: 0.8,
			shadowRadius: 2,
			shadowOffset: {
				height: 1,
				width: 1
			}
		},
	}
};