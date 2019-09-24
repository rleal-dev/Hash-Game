import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { Game, Settings, Ranking } from './screens'

import { Icon } from './components'
import { colors } from './utils'

const TabNavigator = createBottomTabNavigator({
    Game: {
        screen: Game,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='gamepad' size={30} color={tintColor} />
        }
    },
    Settings: {
        screen: Settings,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='cog' size={30} color={tintColor} />
        }
    },
    Ranking: {
        screen: Ranking,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => <Icon name='trophy' size={30} color={tintColor} />
        }          
    },
},{
    lazy: true,
    tabBarOptions: {
        activeTintColor: colors.white,
        inactiveTintColor: colors.backInput,
        style: {
            backgroundColor: colors.gradientEnd,
            borderTopColor: 'transparent',
            paddingBottom: 5,
        },
    }
})
  
export default createAppContainer(TabNavigator)