import { createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { LoginScreen, RegisterScreen } from '../screens'

export default createSwitchNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
)
