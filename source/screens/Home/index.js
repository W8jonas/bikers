import React, {useState, useEffect, useMemo} from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View, Dimensions, TouchableOpacity, Image } from 'react-native';
import { addressNamesAndDirections } from '../../configurations/directions';
import { BottomSheetModalContainer } from '../../components/BottomSheetModalContainer';

import {InputBase} from '../../components/InputBase'
import { colorsPalette } from '../../styles/colors';
import { parkings } from '../../configurations/parkings';
import { ConfirmModal } from '../../components/ConfirmModal';
import { markers } from '../../configurations/markers';
import { Parking } from '../../components/Parking';

import House from '../../assets/home.png'
import Park from '../../assets/park.png'
import Store from '../../assets/store.png'
import GasTank from '../../assets/bomba-de-gasolina.png'
import Mechanical from '../../assets/manutencao.png'

import Logo from '../../assets/logo.png'
import MenuIcon from '../../assets/menu.png'


import { AccountModal } from '../../components/AccountModal';


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
	const [showAccountModal, setShowAccountModal] = useState(false)


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
				{markersFiltered.map((marker, index) => {
					
					const markerImage = marker.typeOf === 'house' ? House 
						: marker.typeOf === 'store' ? Store
						: marker.typeOf === 'parking' ? Park
						: marker.typeOf === 'gasStation' ? GasTank
						: marker.typeOf === 'mechanical' ? Mechanical
						: null
						// 'house'
						// 'store'
						// 'parking'
						// 'gasStation'
						// 'mechanical'
						// 'endline'

					return <Marker
						key={index}
						coordinate={marker.latlng}
						title={marker.title}
						description={marker.description}
						image={markerImage && markerImage}
					/>
				})}
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

			<View style={styles.logoContainer}>
				<View style={{width: '20%', height: 50, backgroundColor: 'transparent', position: 'absolute', top: 0, left: 0}} />

				<View style={styles.logoContent}>
					<Image source={Logo} style={{width: 108 * 1.2, height: 21 * 1.2, marginTop: 5}} />
				</View>

				<View style={{width: '20%', height: 50, backgroundColor: 'transparent', position: 'absolute', top: 0, right: 0}} />
			</View>

			<ConfirmModal
				visible={!!selectedParking.id}
				{...selectedParking}
				onConfirm={handleConfirm}
				onDismiss={() => setSelectedParking({})}
			/>

			<TouchableOpacity
				style={{position: 'absolute', top: 70, left: 20}}
				onPress={() => setShowAccountModal(true)}
				activeOpacity={0.7}
			>
				<Image source={MenuIcon} style={{width: 40, height: 40}} />
			</TouchableOpacity>


			<AccountModal
				visible={showAccountModal}
				onDismiss={() => setShowAccountModal(false)}
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
	logoContainer: {
		flexDirection: 'row',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		top: 0,
		height: 60,
		width: '100%',
	},
	logoContent: {
		width: '60%',
		alignSelf: 'center',
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FFF',
		borderBottomEndRadius: 32,
		borderBottomLeftRadius: 32,
		position: 'absolute',
		top: 0
	}
});

