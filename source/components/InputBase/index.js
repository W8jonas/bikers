import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { colorsPalette } from '../../styles/colors'


export function InputBase({
	placeholder, onChangeText, containerStyle, textInputStyle, ...rest
}) {
	return (
		<View style={[styles.container, containerStyle]}>
			<View style={{width: 15, height: 15, backgroundColor: '#FFF', borderRadius: 15, marginHorizontal: 10,}} />

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
		paddingVertical: 5,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 22,
		borderWidth: 1,
		borderColor: colorsPalette.secondary.white,
		marginBottom: 20
	},
	input: {
		height: 35,
		width: '100%',
		fontSize: 16,
		color: colorsPalette.font.white,
		fontFamily: 'Roboto_400Regular',
	},
})
