import React, { useState, useEffect } from 'react'
import { NavigationEvents } from 'react-navigation'

import { Logo, Button, MessageBox } from '../../components'
import { Container, Text, InputBox, Input } from './styles'

import { Storage } from '../../services'

function Settings() {

    const [players, setPlayers] = useState({})

    const [playerX, setPlayerX ] = useState('Player X')
    const [playerO, setPlayerO ] = useState('Player O')

    const [showModal, setShowModal] = useState(false)

    async function getPlayers() {
        const data = await Storage.getPlayers()
        
        if (data) {
            setPlayers(data)
            setPlayerX(data.playerX)
            setPlayerO(data.playerO)
        }
    }

    useEffect(() => { getPlayers() }, [])

    const saveChanges = async () => {

        const data = {
            ...players,
            playerX,
            playerO,
        }

        await Storage.setPlayers(data)

        setShowModal(true)
    }

    return (
        <Container>

            <NavigationEvents onDidFocus={getPlayers} />

            <MessageBox
                visible={showModal}
                icon='check'
                color='success'
                title='Success!'
                message='Saved Successfully'
                text='Close'
                onRequestClose={() => setShowModal(false)}
            />
            
            <Logo />

            <InputBox>
                <Text>Player X</Text>
                <Input 
                    returnKeyType='next'
                    onChangeText={setPlayerX}
                    value={playerX}
                />

                <Text>Player O</Text>
                <Input 
                    returnKeyType='done'
                    onChangeText={setPlayerO}
                    value={playerO}
                />
            </InputBox>

            <Button icon='check' label='Save Changes' onPress={saveChanges} />

        </Container>
    )
}

export default Settings