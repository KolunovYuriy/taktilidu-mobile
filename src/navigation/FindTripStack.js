import { createStackNavigator } from 'react-navigation'

import {
  FindTripScreen,
  TripResultsScreen,
  TripDetailsScreen,
  CreateTripScreen,
  OfferTripScreen,
  DriverProfileScreen,
  CarGalleryScreen
} from '../screens'

export default createStackNavigator(
  {
    FindTrip: FindTripScreen,
    TripResults: TripResultsScreen,
    TripDetails: TripDetailsScreen,
    CreateTrip: CreateTripScreen,
    OfferTrip: OfferTripScreen,
    DriverProfile: DriverProfileScreen,
    CarGallery: CarGalleryScreen
  },
  {
    initialRouteName: 'FindTrip'
  }
)
