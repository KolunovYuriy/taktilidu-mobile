import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Container, Header } from 'native-base'

class HomeScreen extends Component {
  render() {
    return (
      <Container>
        <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }} />
        <Text> HomeScreen </Text>
      </Container>
    )
  }
}

export default HomeScreen
