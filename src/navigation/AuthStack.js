import { createStackNavigator } from 'react-navigation'

import { LoginScreen } from '../screens'

export default createStackNavigator(
  {
    Login: LoginScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
)
