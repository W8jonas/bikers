import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { colorsPalette } from '../../styles/colors'


export function InputBase({
	placeholder, onChangeText, containerStyle, textInputStyle, ...rest
}) {
	return (
		<View style={[styles.container, containerStyle]}>
			<TextInput
				style={[styles.input, textInputStyle]}
				placeholder={placeholder}
				placeholderTextColor={colorsPalette.font.white}
				onChangeText={onChangeText}
				{...rest}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		paddingVertical: 10,
	},
	input: {
		alignSelf: 'center',
		height: 35,
		width: '100%',
		paddingHorizontal: 10,
		fontSize: 16,
		color: colorsPalette.font.white,
		fontFamily: 'Roboto_400Regular',
		borderRadius: 8,
	},
})
