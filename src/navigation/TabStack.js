import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Image } from 'react-native'

import { HomeScreen, CreateTripScreen, ProfileScreen, TicketsScreen } from '../screens'
import FindTripStack from './FindTripStack'
import { icHome, icPlus, icSearch, icTicket, icUserCircle } from '../assets/images'

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    FindTrip: FindTripStack,
    CreateTrip: CreateTripScreen,
    Tickets: TicketsScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let iconName

        switch (routeName) {
          case 'Home':
            iconName = icHome
            break
          case 'FindTrip':
            iconName = icSearch
            break
          case 'CreateTrip':
            iconName = icPlus
            break
          case 'Tickets':
            iconName = icTicket
            break
          case 'Profile':
            iconName = icUserCircle
            break
        }

        // You can return any component that you like here!
        return <Image source={iconName} style={{ tintColor: tintColor, width: 24, height: 24 }} />
      }
    }),
    tabBarOptions: {
      activeTintColor: '#9B4B9A',
      inactiveTintColor: '#818181',
      showLabel: false,
      style: {
        backgroundColor: '#FFFFFF'
      }
    }
  }
)
