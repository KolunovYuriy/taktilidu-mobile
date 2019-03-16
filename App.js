import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { Root } from 'native-base'
import InitialScreen from './src/navigation/InitialStack'
import store from './src/redux/store'

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root>
          <InitialScreen />
        </Root>
      </Provider>
    )
  }
}
