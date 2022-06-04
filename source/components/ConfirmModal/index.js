import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, styleSheet } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

// Modules

// Assets

// Functions

// Components

export function ConfirmModal() {
    return (
        <View>
            <ResponsiveText p bold style={{color: colorsPalette.font.white}}>
                Confirmar locação
            </ResponsiveText>

            <Image source={image} style={{height: 45, width: 45}} />

            <View>
                <View />
                <View />
                <View />
            </View>

            

        </View>
    )
}
