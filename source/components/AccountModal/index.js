import React from 'react'
import { View, TouchableOpacity, StyleSheet, Modal } from 'react-native'
import { ResponsiveText } from '../ResponsiveText'

import { colorsPalette } from '../../styles/colors'


export function AccountModal({ visible, onDismiss }) {

    return (
        <Modal visible={visible} transparent onRequestClose={onDismiss}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <ResponsiveText h3 style={{color: colorsPalette.font.white, marginLeft: 15, marginTop: 15}}>
                        Sua conta:
                    </ResponsiveText>

                    <TouchableOpacity
                        onPress={onDismiss}
                        style={styles.button}
                    >
                        <ResponsiveText p bold style={{color: colorsPalette.brand.blue, textAlign: 'right'}}>
                            Meios de pagamento
                        </ResponsiveText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onDismiss}
                        style={styles.button}
                    >
                        <ResponsiveText p bold style={{color: colorsPalette.brand.blue, textAlign: 'right'}}>
                            Histórico de Rotas
                        </ResponsiveText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onDismiss}
                        style={styles.button}
                    >
                        <ResponsiveText p bold style={{color: colorsPalette.brand.blue, textAlign: 'right'}}>
                            Rotas salvas
                        </ResponsiveText>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={onDismiss}
                        style={styles.button}
                    >
                        <ResponsiveText p bold style={{color: colorsPalette.brand.blue, textAlign: 'right'}}>
                            Meus dados
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
    button: {
        width: '95%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 4, 
        height: 36,
        borderColor: colorsPalette.brand.blue,
        borderWidth: 1.2,
        marginVertical: 10,
    }
})

