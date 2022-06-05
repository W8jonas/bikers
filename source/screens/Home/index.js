import React, {useState, useEffect, useMemo} from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';
import { addressNamesAndDirections } from '../../configurations/directions';
import { BottomSheetModalContainer } from '../../components/BottomSheetModalContainer';

import {InputBase} from '../../components/InputBase'
import { colorsPalette } from '../../styles/colors';
import { parkings } from '../../configurations/parkings';
import { ConfirmModal } from '../../components/ConfirmModal';
import { markers } from '../../configurations/markers';
import { Parking } from '../../components/Parking';


export function Home() {

	const [address, setAddress] = useState({
		actualPosition: {
			name: 'Rua Mem de Sá, 189-135 - Mooca',
			latitude: -23.553631343303277,
			longitude: -46.62037772360403,
		},
		arrivalAddress: {
			name: '',
			latitude: -23.553631343303277,
			longitude: -46.62037772360403,
		}
	})

	
	const [selectedParking, setSelectedParking] = useState({})

	const [confirmedParking, setConfirmedParking] = useState({})

	const [selectedAddress, setSelectedAddress] = useState('')

	useEffect(() => {
		if (address.arrivalAddress.name) {
			if (address.arrivalAddress.name.includes('Monte')) return setSelectedAddress('address1')
			if (address.arrivalAddress.name.includes('Parque')) return setSelectedAddress('address2')
		}
	}, [address.arrivalAddress.name])


	function handleConfirm() {
		setConfirmedParking(selectedParking)
		setSelectedParking({})
	}

	const markersFiltered = useMemo(() => {
		if (confirmedParking) {
			if (confirmedParking.type) {
				return markers.filter(marker => marker.type === confirmedParking.type || marker.type === 'all')
			}
		}
		return markers.filter(marker => marker.type === 'all')
	}, [confirmedParking])

	const direction = useMemo(() => {
		if (confirmedParking) {
			if (confirmedParking.type) {
				const _direction = addressNamesAndDirections.find(address => address.type === confirmedParking.type)
				return _direction.direction
			}
		}
		return null
	}, [confirmedParking])

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
				{markersFiltered.map((marker, index) => (
					<Marker
						key={index}
						coordinate={marker.latlng}
						title={marker.title}
						description={marker.description}
					/>
				))}
				{direction && <Polyline
					coordinates={direction}
					strokeColor="#000"
					strokeWidth={2}
				/>}
			</MapView>

			<View style={{position: 'absolute', bottom: 0, height: '100%', width: '100%'}}>
				<BottomSheetModalContainer
					observer={selectedParking.id}
					HeaderComponent={(
						<View style={{width: '100%', height: 30, justifyContent: 'center', alignItems: 'center'}}>
							<View  style={{height: 5, width: 50, backgroundColor: '#dcdcdc', borderRadius: 4}} />
						</View>
					)}
					BodyComponent={(
						<View style={{ paddingHorizontal: 20, marginTop: 30 }}>

							<View style={{ paddingHorizontal: 10}}>
								<InputBase
									placeholder={'Rua Mem de Sá, 189-135 - Mooca'}
									value={address.actualPosition.name}
								/>

								<InputBase
									placeholder={'Selecione o local'}
									onChangeText={(text) => setAddress(old => ({...old, arrivalAddress: {...old.arrivalAddress, name: text}}))}
									value={address.arrivalAddress.name}
									icon={true}
								/>
							</View>

							<View style={{height: 1, width: '100%', backgroundColor: colorsPalette.secondary.white}} />

							{parkings.filter(parking => parking.type === selectedAddress).map(parking => (
								<Parking
									key={parking.id}
									{...parking}
									onPress={() => setSelectedParking(parking)}
								/>
							))}

						</View>
					)}
				/>
			</View>

			<ConfirmModal
				visible={!!selectedParking.id}
				{...selectedParking}
				onConfirm={handleConfirm}
				onDismiss={() => setSelectedParking({})}
			/>

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
