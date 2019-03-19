import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Root } from 'native-base'
import InitialScreen from './src/navigation/InitialStack'
import store from './src/redux/store'

import GlobalFont from 'react-native-global-font'

export default class App extends Component {
  componentDidMount() {
    let fontName = 'OpenSans-Regular'
    GlobalFont.applyGlobal(fontName)
  }

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
