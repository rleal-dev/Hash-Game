import React from 'react'
import styled from 'styled-components/native'

import { Icon } from './index' 

const ResetButton = ({ label, ...props }) => 
    <ButtonBox {...props}>
        <ButtonIcon name='refresh' />
        <ButtonText>{label}</ButtonText>
    </ButtonBox>

const ButtonBox = styled.TouchableOpacity`
    width: 90%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin-bottom: 10px;
    padding: 12px;
    border-width: .8;
    border-color: #F5AB35;
    background-color: #fff;
    opacity: .8;
`

const ButtonIcon = styled(Icon)`
    font-size: 18px;
    color: #F5AB35;
`

const ButtonText = styled.Text`
    color: #F5AB35;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`

export default ResetButton