import styled from 'styled-components/native'
import LinearGradient from 'react-native-linear-gradient'

export const Container = styled(LinearGradient)`
    flex: 1;
    align-items: center;
    justify-content: center;
`

export const Board = styled.View`
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 10px 0px 10px;
`

export const TextPlayer = styled.Text`
    color: #fff;
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 15px;
`

export const TextWinner = styled(TextPlayer)`
    color: #0EAC51;
`