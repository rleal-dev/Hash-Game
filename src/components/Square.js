import React from 'react'
import { Dimensions, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from './index'

const Square = ({ value, color, ...props }) =>
    <TouchableOpacity style={styles.box} {...props}>
        {
            value && <Icon name={value == 'X' ? 'times' : 'circle-o'} color={color} size={60} />
        }
    </TouchableOpacity>

const { width } = Dimensions.get('window')

const styles = StyleSheet.create({
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        width: (width / 3) - 9,
        height: (width / 3) - 9,
        backgroundColor: '#ffffff20',
        margin: 1,
        borderRadius: 5,
    },
})

export default Square