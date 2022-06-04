import React, { useState, useEffect } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

// Modules

// Assets

// Functions

// Components
import image from '../../assets/parkings/img-1.png'
import { colorsPalette } from '../../styles/colors'

export function ConfirmModal({ visible, title, address, totalVacancies, price, score, typeOfParking, onPress }) {
    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ResponsiveText h2 style={{color: colorsPalette.font.white}}>
                        Confirmar locação
                    </ResponsiveText>

                    <Image source={image} style={{width: '90%', alignSelf: 'center', marginVertical: 14}} />

                    <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                        <View style={styles.ball} />
                        <View style={styles.ball} />
                        <View style={styles.ball} />
                    </View>

                    <View style={styles.parkingContainer}>
                        <Image source={image} style={{height: 45, width: 45}} />

                        <View style={{marginLeft: 5}}>
                            <ResponsiveText p bold style={{color: colorsPalette.font.white}}>
                                {title}
                                <ResponsiveText small bold={false} style={{color: colorsPalette.font.white}}>
                                    {' '}(15m do destino)
                                </ResponsiveText>
                            </ResponsiveText>

                            <ResponsiveText small style={{color: colorsPalette.font.white}}>
                                {address}
                            </ResponsiveText>

                            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                                    🚲 {totalVacancies} Vagas
                                </ResponsiveText>
                                <ResponsiveText small style={{color: colorsPalette.font.white}}>
                                    ⭐ {(score/10).toFixed(1)} de 5.0
                                </ResponsiveText>
                            </View>
                        </View>

                    </View>

                </View>

            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    content: {
        backgroundColor: colorsPalette.brand.blueDark,
        width: '90%',
    },
    parkingContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    ball: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginHorizontal: 3,
        backgroundColor: colorsPalette.brand.blue
    }
})

