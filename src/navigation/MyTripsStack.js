import { createStackNavigator } from 'react-navigation'

import { MyTripsScreen, ChatListScreen, ChatScreen } from '../screens'

export default createStackNavigator(
  {
    MyTrips: MyTripsScreen,
    ChatList: ChatListScreen,
    Chat: ChatScreen
  },
  {
    initialRouteName: 'MyTrips'
  }
)
