import { createStackNavigator } from 'react-navigation'

import { ProfileScreen, NotificationsScreen, EditScreen, FeedbackScreen } from '../screens'

export default createStackNavigator(
  {
    Profile: ProfileScreen,
    Edit: EditScreen,
    Notifications: NotificationsScreen,
    Feedback: FeedbackScreen
  },
  {
    initialRouteName: 'Profile'
  }
)
