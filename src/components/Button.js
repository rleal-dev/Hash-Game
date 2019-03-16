import React from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native'

import { Icon } from './index'

export default ({ label, ...props }) => 
    <TouchableOpacity style={styles.button} activeOpacity={0.6} {...props}>
        <Text style={styles.text}>
            <Icon name='refresh' size={18} color='#F5AB35' />{`  ${label} `}
        </Text>
    </TouchableOpacity>

const styles = StyleSheet.create({
    button: {
        width: '90%',
        alignItems: 'center',
        borderRadius: 25,
        marginBottom: 10,
        paddingVertical: 12,
        paddingHorizontal: 12,
        borderWidth: .8,
        borderColor: '#F5AB35',
        backgroundColor: '#fff',
        opacity: .8,
    },
    text: {
        color: '#F5AB35',
        fontSize: 16,
        fontWeight: 'bold',
    },
})