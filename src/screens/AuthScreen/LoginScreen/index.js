import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Left, Right, Icon, Button, Body, Title, Text, Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

export class LoginScreen extends Component {
  render() {
    return (
      <Container>
        <LinearGradient
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1.2, y: 0 }}
          style={styles.linearGradient}
          colors={['#FD6585', '#0D25B9']}
        >
          <Header style={{ backgroundColor: 'transparent', borderBottomWidth: 0 }}>
            <Left>
              <Button transparent>
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Right>
              <Button transparent>
                <Text>Регистрация</Text>
              </Button>
            </Right>
          </Header>
          <Text> LoginScreen </Text>
        </LinearGradient>
      </Container>
    )
  }
}

export default LoginScreen
