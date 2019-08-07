import React, { PureComponent } from 'react'
import { StatusBar } from 'react-native'

import { Container, Board, TextWinner, TextPlayer } from './styles'
import { Logo, Square, ResetButton } from './components'

class App extends PureComponent {

    state = {
        squares: [...Array(9)],
        xIsNext: true,
        winner: '',
        lineWinner: [],
    }

    markSquare = index => () => {

        const { squares } = this.state
        
        if (this.getWinner(squares) || squares[index]) {
            return false
        }

        squares[index] = this.state.xIsNext ? 'X' : 'O'

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })

        if (winner = this.getWinner(squares)) {
            this.setState({
                winner: winner.winner,
                lineWinner: winner.line,
            })
        }
    }

    getWinner(squares) {
        
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        for (let line of lines) {

            const [a, b, c] = line

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return {
                    line,
                    winner: squares[a]
                }
            }
        }

        return null
    }

    resetGame = () => this.setState({
        squares: [...Array(9)],
        xIsNext: true,
        winner: '',
        lineWinner: [],
    })
  
    render() {

        const { squares, winner, lineWinner } = this.state

        return (
            <Container colors={['#fa8231', '#f7b731']}>
                
                <StatusBar barStyle="light-content" backgroundColor="#fa8231" /> 

                <Logo />

                <Board>
                    {
                        squares.map((number, index) => (
                            <Square 
                                key={index}
                                value={number}
                                color={lineWinner.includes(index) ? '#0EAC51' : '#fff'}
                                onPress={this.markSquare(index)}
                            />
                        ))
                    }
                </Board>

                {
                    winner
                        ?
                            <TextWinner>Vencedor: {winner}</TextWinner>
                        :
                            <TextPlayer>
                                Próximo Jogador: { this.state.xIsNext ? 'X' : 'O' }
                            </TextPlayer>
                }

                <ResetButton 
                    label='Nova Partida' 
                    onPress={this.resetGame} 
                />

            </Container>
        )
    }
}

export default App