import { createStackNavigator } from 'react-navigation'

import { LoginScreen, RegisterScreen, ForgotPasswordScreen, WelcomeScreen } from '../screens'

export default createStackNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen,
    Welcome: WelcomeScreen
  },
  {
    initialRouteName: 'Welcome',
    defaultNavigationOptions: {
      header: null
    }
  }
)
