import { createStackNavigator } from 'react-navigation'

import {
  HomeScreen,
  FindTripScreen,
  CreateTripScreen,
  TicketsScreen,
  ProfileScreen,
  SettingsScreen,
  TripResultsScreen
} from '../screens'

export default createStackNavigator(
  {
    Home: HomeScreen,
    FindTrip: FindTripScreen,
    CreateTrip: CreateTripScreen,
    Tickets: TicketsScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    TripResults: TripResultsScreen
  },
  {
    initialRouteName: 'Home'
  }
)
