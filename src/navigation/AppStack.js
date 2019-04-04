import { createStackNavigator } from 'react-navigation'

import {
  HomeScreen,
  FindTripScreen,
  CreateTripScreen,
  ProfileScreen,
  SettingsScreen,
  TripResultsScreen
} from '../screens'

export default createStackNavigator(
  {
    Home: HomeScreen,
    FindTrip: FindTripScreen,
    CreateTrip: CreateTripScreen,
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    TripResults: TripResultsScreen
  },
  {
    initialRouteName: 'Home'
  }
)
