import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default () =>
    <View style={styles.container}>
        <Text>Hash Game</Text>
    </View>

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
})