import React, {useState} from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { addressNamesAndDirections } from '../../configurations/directions';
import { BottomSheetModalContainer } from '../../components/BottomSheetModalContainer';

import {InputBase} from '../../components/InputBase'
import { ResponsiveText } from '../../components/ResponsiveText';
import { colorsPalette } from '../../styles/colors';

const markers = [
	{ latlng: { latitude: -23.553631343303277, longitude: -46.62037772360403 }, title: 'Título do estacionamento', description: 'Descrição do estacionamento' },
]

export function Home() {

	const [address, setAddress] = useState({
		actualPosition: {
			name: 'Rua Aymorés, 120',
			latitude: -23.553631343303277,
			longitude: -46.62037772360403,
		},
		arrivalAddress: {
			name: 'Rua Aymorés, 120',
			latitude: -23.553631343303277,
			longitude: -46.62037772360403,
		}
	})

	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: -23.553631343303277,
					longitude: -46.62037772360403,
					latitudeDelta: 0.0922,
					longitudeDelta: 0.0421,
				}}
			>
				{markers.map((marker, index) => (
					<Marker
						key={index}
						coordinate={marker.latlng}
						title={marker.title}
						description={marker.description}
					/>
				))}
				<Polyline
					coordinates={addressNamesAndDirections[1].direction}
					strokeColor="#000"
					strokeWidth={2}
				/>
			</MapView>

			<View style={{position: 'absolute', bottom: 0, height: '100%', width: '100%'}}>
				<BottomSheetModalContainer
					HeaderComponent={(
						<View style={{width: '100%', height: 30, justifyContent: 'center', alignItems: 'center'}}>
							<View  style={{height: 5, width: 50, backgroundColor: '#dcdcdc', borderRadius: 4}} />
						</View>
					)}
					BodyComponent={(
						<View style={{ paddingHorizontal: 10, marginTop: 30 }}>
							<InputBase
								placeholder={'Rua Aymorés, 120'}
								onChangeText={(text) => setAddress(text)}
								value={address.actualPosition.name}
							/>
						</View>
					)}
				/>
			</View>

		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	map: {
		width: Dimensions.get('window').width,
		height: Dimensions.get('window').height,
	},
});
