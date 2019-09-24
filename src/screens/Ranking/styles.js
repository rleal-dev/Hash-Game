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

export const Content = styled.View`
    width: 90%;
    margin: 20px 10px 30px;
`

export const Player = styled.View`
    flex-direction: row;
    justify-content:space-between;
    padding: 15px 0;
`
export const Text = styled.Text`
    color: #fff;
    font-size: 26px;
` 