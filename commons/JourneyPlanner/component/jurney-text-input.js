import React, { PropTypes } from 'react';
import { TextInput, View } from 'react-native';

const JurneyTextInput = ({inputFunc, placeholder}) => (
	<TextInput
		style={styles.textInput}
		placeholder={placeholder}
		onChangeText={inputFunc}
	/>
);

JurneyTextInput.propTypes = {};
const styles = {};

export default JurneyTextInput;