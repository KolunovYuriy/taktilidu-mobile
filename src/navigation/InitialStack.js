import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import AppStack from './AppStack'
import AuthStack from './AuthStack'
import { AuthLoadingScreen } from '../screens'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'Auth'
    }
  )
)
