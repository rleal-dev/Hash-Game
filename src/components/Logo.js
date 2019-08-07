import React, { Fragment } from 'react'
import styled from 'styled-components/native'

import { Icon } from './index' 

const Logo = () => 
    <Fragment>
        <LogoIcon name='hashtag' />
        <LogoText>HashGame</LogoText>
    </Fragment>

const LogoIcon = styled(Icon)`
    font-size: 40px;
`

const LogoText = styled.Text`
    color: #fff;
    font-size: 30px;
`

export default Logo