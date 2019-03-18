import { createStackNavigator } from 'react-navigation'

import { FindTripScreen, TripResultsScreen, TripDetailsScreen } from '../screens'

export default createStackNavigator(
  {
    FindTrip: FindTripScreen,
    TripResults: TripResultsScreen,
    TripDetails: TripDetailsScreen
  },
  {
    initialRouteName: 'FindTrip'
  }
)
