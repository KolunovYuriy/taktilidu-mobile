import React, { Component } from 'react'
import { Root } from 'native-base'
import InitialScreen from './src/navigation/InitialStack'

export default class App extends Component<Props> {
  render() {
    return (
      <Root>
        <InitialScreen />
      </Root>
    )
  }
}
