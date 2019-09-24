import React from 'react'
import styled from 'styled-components'

import { colors } from '../utils'
import { Icon } from './index' 

const MessageBox = ({ icon, title, message, color, text, ...props }) => (
    <Modal transparent {...props} >
        <Container>
            <Content>
                <Icon size={60} name={icon} color={colors[color]} />

                <Title>{title}</Title>
                <Message>{message}</Message>

                <Button color={color} onPress={props.onRequestClose}>
                    <ButtonText>{text}</ButtonText>
                </Button>
            </Content>
        </Container>
    </Modal>
)

MessageBox.defaultProps = {
    icon: 'home', 
    color: 'primary', 
    title: 'hashGame',
    message: 'Informe uma mensagem!',
    text: 'Close Message',
}

const Modal = styled.Modal``

const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${colors.backDrop};
`

const Content = styled.View`
    align-items: center;
    justify-content: center;
    width: 90%;
    background-color: ${colors.white};
    border-radius: 10px;
    padding: 25px 10px;
`

const Title = styled.Text`
    color: ${colors.mediumBlack};
    font-size: 20px;
    font-weight: bold;
    margin: 10px 0;
`

const Message = styled.Text`
    color: ${colors.mediumBlack};
    font-size: 17px;
    margin-bottom: 20px;
`

const Button = styled.TouchableOpacity.attrs({
    activeOpacity: .6
})`
    padding: 10px 15%;
    background-color: ${props => colors[props.color]};
    margin-top: 20px;
    border-radius: 5px;
`

const ButtonText =  styled.Text`
    color: #ffffff;
    font-size: 18px;
    text-align: center;
    font-weight: 400; 
`

export default MessageBox