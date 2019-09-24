import React from  'react'
import { StatusBar } from 'react-native'

import Routes from './routes'
import { colors } from './utils'

export default () => 
    <>
        <StatusBar barStyle='light-content' backgroundColor={colors.primary} /> 
        <Routes />
    </>
