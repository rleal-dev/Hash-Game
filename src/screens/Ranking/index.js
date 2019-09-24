import React, { useState, useEffect } from 'react'

import { Logo, Button, MessageBox } from '../../components'
import { Container, Content, Player, Text } from './styles'

import { Storage } from '../../services'

function Ranking() {

    const [players, setPlayers] = useState({})
    const [showModal, setShowModal] = useState(false)

    async function getPlayers() {
        const data = await Storage.getPlayers()
        data && setPlayers(data)
    }

    useEffect(() => { getPlayers() }, [players])

    const resetScores = async () => {

        const data = {
            ...players,
            scoreX: 0,
            scoreO: 0,
        }

        await Storage.setPlayers(data)

        setShowModal(true)
    }

    return (
        <Container>

            <MessageBox
                visible={showModal}
                icon='check'
                color='success'
                title='Success!'
                message='Reset Successfully'
                text='Close'
                onRequestClose={() => setShowModal(false)}
            />
            
            <Logo />

            <Content>
                <Player>
                    <Text>{players.playerX}</Text>
                    <Text>{players.scoreX}</Text>
                </Player>
                
                <Player>
                    <Text>{players.playerO}</Text>
                    <Text>{players.scoreO}</Text>
                </Player>
            </Content>

            <Button icon='refresh' label='Reset Scores' onPress={resetScores} />

        </Container>
    )
}

export default Ranking