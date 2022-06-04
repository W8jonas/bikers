import * as React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

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
					coordinates={[
						{ latitude: -23.55527239158295, longitude: -46.602727499051284},
						{ latitude: -23.553148045649678, longitude: -46.60255583768811},
						{ latitude: 37.7665248, longitude: -122.4161628 },
						{ latitude: 37.7734153, longitude: -122.4577787 },
						{ latitude: 37.7948605, longitude: -122.4596065 },
						{ latitude: -23.5651965, longitude: -46.5986969 }
					]}
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
