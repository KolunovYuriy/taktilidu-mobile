import { createStackNavigator } from 'react-navigation'

import { ProfileScreen, SettingsScreen, SupportScreen } from '../screens'

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Support: SupportScreen
  },
  {
    initialRouteName: 'Profile'
  }
)
