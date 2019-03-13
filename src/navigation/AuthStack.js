import { createSwitchNavigator } from 'react-navigation'

import { LoginScreen, RegisterScreen, ForgotPasswordScreen } from '../screens'

export default createSwitchNavigator(
  {
    Login: LoginScreen,
    Register: RegisterScreen,
    ForgotPassword: ForgotPasswordScreen
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: null
    }
  }
)
