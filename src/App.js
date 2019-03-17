import React, { PureComponent } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'

import { Icon, Square, Button } from './components'

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
            <View style={styles.container}>
                <Icon name='hashtag' size={50} />
                <Text style={styles.logo}>HashGame</Text>

                <View style={styles.board}>
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
                </View>

                {
                    winner
                        ?
                            <Text style={[styles.player, styles.winner]}>
                                Vencedor: {winner}
                            </Text>
                        :
                            <Text style={styles.player}>
                                Próximo Jogador: { this.state.xIsNext ? 'X' : 'O' }
                            </Text>

                }

                <Button label='Nova Partida' onPress={this.resetGame} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5AB35',
    },
    logo: {
        color: '#fff',
        fontSize: 30,
    },
    board: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: 20,
    },
    player: {
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    winner: {
        color: '#0EAC51',
        fontSize: 25,
    }
})

export default App