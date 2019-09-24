import AsyncStorage from '@react-native-community/async-storage'

const Storage = {
    
    initPlayers: async () => {
        initialplayers = {
            playerX: 'Player X',
            scoreX: 0,
            playerO: 'Player O',
            scoreO: 0,
        }

        await Storage.setPlayers(initialplayers)

        return initialplayers
    },

    getPlayers: async () => {
        try {
            let players = await AsyncStorage.getItem('@players')

            if (! players) {
                return Storage.initPlayers()
            }

            return JSON.parse(players)
        } catch (error) {
            console.log('erro ao obter as configurações!')
        }
    },

    setPlayers: async players => {
        try {
            await AsyncStorage.setItem('@players', JSON.stringify(players))
        } catch (error) {
            console.log('erro ao salvar as configurações!')
        }
    },
}

export default Storage