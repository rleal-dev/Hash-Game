import styled from 'styled-components'
import LinearGradient from 'react-native-linear-gradient'

import { colors } from '../../utils'

export const Container = styled(LinearGradient).attrs({
    colors: [colors.gradientStart, colors.gradientEnd]
})`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Board = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 10px 10px 10px;
`

export const TextPlayer = styled.Text`
    color: ${colors.white};
    font-size: 25px;
    opacity: .9;
`