import { createStackNavigator } from 'react-navigation'

import {
  ProfileScreen,
  SupportScreen,
  HelpScreen,
  HelpChatScreen,
  NotificationsScreen,
  EditScreen,
  FeedbackScreen
} from '../screens'

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    Edit: EditScreen,
    Support: SupportScreen,
    Help: HelpScreen,
    HelpChat: HelpChatScreen,
    Notifications: NotificationsScreen,
    Feedback: FeedbackScreen
  },
  {
    initialRouteName: 'Profile'
  }
)
