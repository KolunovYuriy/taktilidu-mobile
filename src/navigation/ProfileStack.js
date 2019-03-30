import { createStackNavigator } from 'react-navigation'

import {
  ProfileScreen,
  SettingsScreen,
  SupportScreen,
  HelpScreen,
  HelpChatScreen,
  NotificationsScreen,
  EditScreen
} from '../screens'

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    Settings: SettingsScreen,
    Edit: EditScreen,
    Support: SupportScreen,
    Help: HelpScreen,
    HelpChat: HelpChatScreen,
    Notifications: NotificationsScreen
  },
  {
    initialRouteName: 'Profile'
  }
)
