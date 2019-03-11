import { createStackNavigator } from 'react-navigation'

import { HomeScreen } from '../screens'

export default createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home'
  }
)
