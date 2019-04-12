import { createStackNavigator } from 'react-navigation'

import {
  MyTripsScreen,
  ChatListScreen,
  ChatScreen,
  DriverFeedbackScreen,
  DriversFeedbackListScreen
} from '../screens'

export default createStackNavigator(
  {
    MyTrips: MyTripsScreen,
    ChatList: ChatListScreen,
    Chat: ChatScreen,
    DriverFeedback: DriverFeedbackScreen,
    DriversFeedbackList: DriversFeedbackListScreen
  },
  {
    initialRouteName: 'MyTrips'
  }
)
