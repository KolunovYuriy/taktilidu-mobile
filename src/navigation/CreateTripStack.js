import { createStackNavigator } from 'react-navigation'

import { CreateTripScreen, OfferTripScreen } from '../screens'

export default createStackNavigator(
  {
    CreateTrip: CreateTripScreen,
    OfferTrip: OfferTripScreen
  },
  {
    initialRouteName: 'CreateTrip'
  }
)
