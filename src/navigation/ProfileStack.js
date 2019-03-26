import { createStackNavigator } from 'react-navigation'

import {
  ProfileScreen,
  SettingsScreen,
  SupportScreen,
  HelpScreen,
  HelpChatScreen
} from '../screens'

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Support: SupportScreen,
    Help: HelpScreen,
    HelpChat: HelpChatScreen
  },
  {
    initialRouteName: 'Profile'
  }
)
