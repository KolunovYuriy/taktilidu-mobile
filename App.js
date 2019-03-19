import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Root, StyleProvider } from 'native-base'
import InitialScreen from './src/navigation/InitialStack'
import store from './src/redux/store'

import getTheme from './native-base-theme/components'
import material from './native-base-theme/variables/material'

export default class App extends Component {
  render() {
    return (
      <StyleProvider style={getTheme(material)}>
        <Provider store={store}>
          <Root>
            <InitialScreen />
          </Root>
        </Provider>
      </StyleProvider>
    )
  }
}
