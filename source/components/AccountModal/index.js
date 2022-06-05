import React from 'react'
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

import { colorsPalette } from '../../styles/colors'


export function AccountModal({ visible, onDismiss }) {

    return (
        <Modal visible={visible} transparent>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ResponsiveText h2 style={{color: colorsPalette.font.white, marginLeft: 15, marginTop: 15}}>
                        Sua conta:
                    </ResponsiveText>

                    <TouchableOpacity
                        onPress={onDismiss}
                        style={[styles.button, { backgroundColor: colorsPalette.brand.blue }]}
                    >
                        <ResponsiveText p style={{color: colorsPalette.font.blueDark, textAlign: 'right'}}>
                            Confirmar
                        </ResponsiveText>
                    </TouchableOpacity>

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

