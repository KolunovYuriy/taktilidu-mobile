import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import { Image } from 'react-native'

import { HomeScreen, TicketsScreen } from '../screens'
import FindTripStack from './FindTripStack'
import ProfileStack from './ProfileStack'
import CreateTripStack from './CreateTripStack'
import { icHome, icQA, icSearch, icCar, icUserCircle } from '../assets/images'

export default createBottomTabNavigator(
  {
    Home: HomeScreen,
    FindTrip: FindTripStack,
    CreateTrip: CreateTripStack,
    Tickets: TicketsScreen,
    Profile: ProfileStack
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
            iconName = icCar
            break
          case 'Tickets':
            iconName = icQA
            break
          case 'Profile':
            iconName = icUserCircle
            break
        }

        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={{ resizeMode: 'contain', tintColor: tintColor, width: 48, height: 24 }}
          />
        )
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
