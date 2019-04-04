import { createStackNavigator } from 'react-navigation'

import { FeedbackScreen } from '../screens'

export default createStackNavigator(
  {
    Feedback: FeedbackScreen
  },
  {
    initialRouteName: 'Feedback'
  }
)
