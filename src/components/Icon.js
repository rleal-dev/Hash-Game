import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const MyIcon = ({ name, size, color, ...props }) =>
    <Icon name={name} size={size} color={color} {...props} />

MyIcon.defaultProps = {
    name: 'home',
    size: 26,
    color: '#fff',
}

export default MyIcon