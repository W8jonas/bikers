import React, { useState } from 'react'
import { View, Image, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

import House from '../../assets/home.png'
import Park from '../../assets/park.png'
import Store from '../../assets/store.png'

import image from '../../assets/parkings/img-1.png'
import image2 from '../../assets/parkings/img-2.png'
import { colorsPalette } from '../../styles/colors'

export function ConfirmModal({ visible, title, address, totalVacancies, price, price2, price3, score, typeOfParking, onConfirm, onDismiss }) {
    const imageOfType = typeOfParking === 'house' ? House : typeOfParking === 'store' ? Store : Park

    const [selectedPriceOption, setSelectedPriceOption] = useState(0)

    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ResponsiveText h2 style={{color: colorsPalette.font.white, marginLeft: 15, marginTop: 15}}>
                        Confirmar locação
                    </ResponsiveText>

                    <Image source={title === 'Edifício J. Guedes (Frequente)' ? image2 : image} style={{width: '90%', height: 150, alignSelf: 'center', marginVertical: 14}} />

                    <View style={{flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                        <View style={styles.ball} />
                        <View style={[styles.ball, {backgroundColor: '#D9D9D9'}]} />
                        <View style={[styles.ball, {backgroundColor: '#D9D9D9'}]} />
                    </View>

                    <View style={styles.parkingContainer}>
                        <Image source={imageOfType} style={{height: 45, width: 45}} />

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

                    <View>
                        <View style={styles.rowContainer}>
                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 0 && styles.selectedItemText]}>
                                {price === 0 ? 'Gratuito' : `R$ ${(price/100).toFixed(2)}`}
                            </ResponsiveText>

                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 1 && styles.selectedItemText]}>
                                {price2 === 0 ? 'Gratuito' : `R$ ${(price2/100).toFixed(2)}`}
                            </ResponsiveText>

                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 2 && styles.selectedItemText]}>
                                {price3 === 0 ? 'Gratuito' : `R$ ${(price3/100).toFixed(2)}`}
                            </ResponsiveText>
                        </View>

                        <View style={[styles.rowContainer, {height: 10, backgroundColor: '#fff', marginVertical: 10, marginHorizontal: 20}]}>
                            <TouchableOpacity
                                onPress={() => setSelectedPriceOption(0)}
                                activeOpacity={0.7}
                                style={[styles.circle, { marginLeft: -5}, selectedPriceOption === 0 && styles.selectedItemBall]}
                            />
                            <TouchableOpacity
                                onPress={() => setSelectedPriceOption(1)}
                                activeOpacity={0.7}
                                style={[styles.circle, selectedPriceOption === 1 && styles.selectedItemBall]}
                            />
                            <TouchableOpacity
                                onPress={() => setSelectedPriceOption(2)}
                                activeOpacity={0.7}
                                style={[styles.circle, { marginRight: -5}, selectedPriceOption === 2 && styles.selectedItemBall]}
                            />
                        </View>

                        <View style={styles.rowContainer}>
                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 0 && styles.selectedItemText]}>
                                4 horas
                            </ResponsiveText>

                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 1 && styles.selectedItemText]}>
                                6 horas
                            </ResponsiveText>

                            <ResponsiveText p bold style={[{color: '#7B90B0'}, selectedPriceOption === 2 && styles.selectedItemText]}>
                                8 horas
                            </ResponsiveText>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: 10}}>
                        <TouchableOpacity
                            onPress={onDismiss}
                            style={[styles.button, { backgroundColor: '#7B90B0' }]}
                        >
                            <ResponsiveText p style={{color: colorsPalette.font.white, textAlign: 'right'}}>
                                Voltar
                            </ResponsiveText>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={onConfirm}
                            style={[styles.button, { backgroundColor: colorsPalette.brand.blue }]}
                        >
                            <ResponsiveText p style={{color: colorsPalette.font.blueDark, textAlign: 'right'}}>
                                Confirmar
                            </ResponsiveText>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </Modal>
    )
}


const styles = StyleSheet.create({
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 2
    },
    selectedItemBall: {
        backgroundColor: colorsPalette.brand.blue,
    },
    selectedItemText: {
        color: colorsPalette.brand.blue,
    },
    circle: {
        width: 23,
        height: 23,
        borderRadius: 23,
        backgroundColor: '#7B90B0'
    },
    container: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
    },
    content: {
        backgroundColor: colorsPalette.brand.blueDark,
        width: '90%',
        borderRadius: 15,
        padding: 5,
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
    },
    button: {
        width: '44%',
        alignItems: 'center', 
        justifyContent: 'center',
        borderRadius: 20, 
        height: 36,
    }
})

