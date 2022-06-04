import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { colorsPalette } from '../../styles/colors'
import { ResponsiveText } from '../ResponsiveText'

import House from '../../assets/home.png'
import Park from '../../assets/park.png'
import Store from '../../assets/store.png'

// Modules

// Assets

// Functions

// Components

export function Parking() {
    return (
        <View style={styles.container}>
            <Image source={House} style={{height: 45, width: 45}} />

            <View style={{marginLeft: 5}}>
                <ResponsiveText p bold style={{color: colorsPalette.font.white}}>
                    Casa da Silvinha
                </ResponsiveText>

                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                Santa Maria, Conselheiro Lafaiete - MG, Brazil
                </ResponsiveText>

                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                    🚲 5 Vagas
                </ResponsiveText>
            </View>

            <View style={{justifyContent: 'space-between'}}>
                <ResponsiveText p bold style={{color: colorsPalette.font.white}}>
                    R$ 4,00
                </ResponsiveText>
            
                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                    ⭐ 4.5 de 5.0
                </ResponsiveText>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        marginVertical: 10
    }
})
