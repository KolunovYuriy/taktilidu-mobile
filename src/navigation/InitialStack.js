import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import AppStack from './AppStack'
import AuthStack from './AuthStack'
import TabStack from './TabStack'
import { AuthLoadingScreen } from '../screens'

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      Auth: AuthStack,
      Tab: TabStack
    },
    {
      initialRouteName: 'Auth'
    }
  )
)
