import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { colorsPalette } from '../../styles/colors'
import { ResponsiveText } from '../ResponsiveText'

import House from '../../assets/home.png'
import Park from '../../assets/park.png'
import Store from '../../assets/store.png'

// Modules

// Assets

// Functions

// Components

export function Parking({title, address, totalVacancies, price, score, typeOfParking, onPress}) {

    const image = typeOfParking === 'house' ? House : typeOfParking === 'store' ? Store : Park

    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={image} style={{height: 45, width: 45}} />

            <View style={{marginLeft: 5}}>
                <ResponsiveText p bold style={{color: colorsPalette.font.white}}>
                    {title}
                </ResponsiveText>

                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                    {address}
                </ResponsiveText>

                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                    🚲 {totalVacancies} Vagas
                </ResponsiveText>
            </View>

            <View style={{justifyContent: 'space-between', marginLeft: -5}}>
                <ResponsiveText p bold style={{color: colorsPalette.font.white, textAlign: 'right'}}>
                    R$ {(price/100).toFixed(2)}
                </ResponsiveText>

                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                    ⭐ {(score/10).toFixed(1)} de 5.0
                </ResponsiveText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 10,
    }
})
