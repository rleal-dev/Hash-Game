import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../utils'

export const Container = styled(LinearGradient).attrs({
    colors: [colors.gradientStart, colors.gradientEnd]
})`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 10px 0px 0px;
`

export const Text = styled.Text`
    color: #fff;
    font-size: 18px;
    margin-bottom: 5px;
` 

export const InputBox = styled.View`
    width: 90%;
    margin: 30px 20px 10px;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: colors.placeholder,
    underlineColorAndroid: 'transparent',
})`
    height : 45;
    min-width: 300px;
    font-size: 18px;
    flex-wrap: wrap;
    background-color: ${colors.backInput};
    color: ${colors.mediumBlack};
    padding: 0 15px;
    margin-bottom: 10px;
    border-radius: 5px;
    border-color: ${colors.secondary};
    border-width: 1;
    margin-bottom: 15px;
`