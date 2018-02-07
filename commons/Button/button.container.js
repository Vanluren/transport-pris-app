import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import { themePrimary } from '../../services/theme/theme-constants';

const ButtonComponent = ({onPressFunc}) => (
	<TouchableOpacity
		onPress={onPressFunc}
		style={buttonStyles.container}
	>
		<Text style={buttonStyles.text}>Add</Text>
	</TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  container: {
	  justifyContent: 'center',
	  alignItems:'center',
	  backgroundColor: themePrimary,
	  padding: 10,
  },
  text: {
	  color: 'white',
	  fontSize: 18,
	  backgroundColor: themePrimary,
	  alignItems:'center'
  }
});

export default ButtonComponent;
