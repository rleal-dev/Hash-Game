import React, { Fragment } from 'react'
import styled from 'styled-components'

import { Icon } from './index' 

const Logo = () => 
    <Fragment>
        <LogoIcon name='hashtag' />
        <LogoText>HashGame</LogoText>
    </Fragment>

const LogoIcon = styled(Icon)`
    font-size: 35px;
`

const LogoText = styled.Text`
    color: #fff;
    font-size: 30px;
    margin-bottom: 20px;
`

export default Logo