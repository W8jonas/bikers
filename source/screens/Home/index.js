import * as React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { addressNamesAndDirections } from '../../configurations/directions';

const markers = [
	{ latlng: { latitude: -23.5651965, longitude: -46.5986969 }, title: 'Título do estacionamento', description: 'Descrição do estacionamento' },
]

export function Home() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={{
					latitude: -23.5651965,
					longitude: -46.5986969,
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
					coordinates={addressNamesAndDirections[0].direction}
					strokeColor="#000"
					strokeWidth={2}
				/>
			</MapView>
			
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
