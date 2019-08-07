import React from 'react'
import styled from 'styled-components/native'

import { Icon } from './index'

const Square = ({ value, color, ...props }) =>
    <SquareBox {...props}>
        {
            value ? <Icon name={value == 'X' ? 'times' : 'circle-o'} color={color} size={40} />
                  : <Text>{''}</Text>
        }
    </SquareBox>


const SquareBox = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 32%;
    height: 30%;
    background-color: #ffffff20;
    margin: 2px;
    border-radius: 5;
`

const Text = styled.Text`
    font-size: 40px;
`

export default Square