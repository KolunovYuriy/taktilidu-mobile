import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import InitialScreen from './src/navigation/InitialStack'
import store from './src/redux/store'

export default class App extends Component<Props> {
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
