import { createStackNavigator } from 'react-navigation'

import {
  FindTripScreen,
  TripResultsScreen,
  TripDetailsScreen,
  CreateTripScreen,
  OfferTripScreen
} from '../screens'

export default createStackNavigator(
  {
    FindTrip: FindTripScreen,
    TripResults: TripResultsScreen,
    TripDetails: TripDetailsScreen,
    CreateTrip: CreateTripScreen,
    OfferTrip: OfferTripScreen
  },
  {
    initialRouteName: 'FindTrip'
  }
)
