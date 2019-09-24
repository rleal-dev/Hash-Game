import React, { useState, useEffect } from 'react'

import { Container, Board, TextPlayer } from './styles'
import { Logo, Icon, Square, Button, MessageBox } from '../../components'

import { colors } from '../../utils'
import { Storage } from '../../services'

function Game() {

    const [players, setPlayers] = useState({})
    const { playerX, playerO, scoreX, scoreO } = players

    const [squares, setSquares] = useState([...Array(9)])
    const [xIsNext, setxIsNext] = useState(true)
    const [winner, setWinner] = useState('')
    const [lineWinner, setLineWinner] = useState([])
    const [taps, setTaps] = useState(0)

    async function getPlayers() {
        const data = await Storage.getPlayers()
        data && setPlayers(data)
    }

    useEffect(() => { getPlayers() }, [players])

    const markSquare = index => () => {

        if (getWinner(squares) || squares[index]) {
            return false
        }

        squares[index] = xIsNext ? 'x' : 'o'

        setSquares(squares)
        setxIsNext(! xIsNext)

        if (newWinner = getWinner(squares)) {

            updateScore(newWinner.player)

            setWinner(newWinner.winner)
            setLineWinner(newWinner.line)
        }

        setTaps(taps + 1)
    }

    function getWinner(squares) {
    
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6],
            [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6],
        ]

        for (let line of lines) {

            const [a, b, c] = line

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return {
                    line,
                    winner: squares[a] == 'x' ? playerX : playerO,
                    player: squares[a]
                }
            }
        }

        return null
    }

    async function updateScore(player) {

        const data = {
            ...players,
            scoreX: player == 'x' ? scoreX + 1 : scoreX,
            scoreO: player == 'o' ? scoreO + 1 : scoreO,
        }
    
        await Storage.setPlayers(data)
    }

    const isGameOver = () => taps > 8

    const resetGame = () => {
        setSquares([...Array(9)])
        setxIsNext(true)
        setWinner('')
        setLineWinner([])
        setTaps(0)
    }

    return (
        <Container>
            
            <Logo />

            <MessageBox
                visible={!! winner}
                icon='trophy'
                title='Congratulations!'
                message={`${winner} Won!`}
                text='Play Again'
                onRequestClose={resetGame}
            />

            <Board>
                {
                    squares.map((number, index) => (
                        <Square 
                            key={index}
                            value={number}
                            color={lineWinner.includes(index) ? colors.success : colors.white}
                            onPress={markSquare(index)}
                        />
                    ))
                }
            </Board>

            {
                isGameOver()
                    ?
                        <Button icon='refresh' label='Reset Game' onPress={resetGame} />
                    : 
                        <TextPlayer>
                            <Icon name='user-circle' /> { xIsNext ? playerX : playerO }
                        </TextPlayer>
            }
            
        </Container>
    )
}

export default Game