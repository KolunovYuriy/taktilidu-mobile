import React, { Component } from 'react'
import { Image } from 'react-native'
import { Text, Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Views/AuthHeader'
import Content from '../../../components/Views/AuthContent'
import LoginForm from '../../../components/Forms/Login'

import { imgLogo } from '../../../assets/images/'
import styles from './styles'

export class LoginScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <LinearGradient
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1.2, y: 0 }}
          style={styles.linearGradient}
          colors={['#FD6585', '#0D25B9']}
        >
          <Header
            routeName="Регистрация"
            onBackPress={() => navigation.navigate('')}
            onPress={() => navigation.navigate('Register')}
          />
          <Content>
            <Image style={styles.image} source={imgLogo} />
            <LoginForm />
          </Content>
        </LinearGradient>
      </Container>
    )
  }
}

export default LoginScreen
