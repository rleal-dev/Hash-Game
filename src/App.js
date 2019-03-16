import React, { PureComponent } from 'react'
import { View, Text, Alert, StyleSheet } from 'react-native'

import { Icon, Square, Button } from './components'

class App extends PureComponent {

    state = {
        squares: [...Array(9)],
        xIsNext: true,
    }

    markSquare = number => () => {

        const { squares } = this.state

        if (squares[number]) return
        
        if (this.getWinner(squares)) {
            Alert.alert('#HashGame', 'Oops... O Jogo acabou!')
            return false
        }

        squares[number] = this.state.xIsNext ? 'X' : 'O'

        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext,
        })
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

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i]

            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                Alert.alert('#HashGame', 'Parabéns.... Vencedor: ' + squares[a])
                return squares[a]
            }
        }

        return null
    }

    resetGame = () => this.setState({
        squares: Array(9).fill(null),
        xIsNext: true,
    })
  
    render() {

        const { squares } = this.state

        const winner = this.getWinner(squares)

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
                                onPress={this.markSquare(index)}
                            />
                        ))
                    }
                </View>

                {
                    winner 
                        ?
                            <Text style={styles.player}>
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
    }
})

export default App