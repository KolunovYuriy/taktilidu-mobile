import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../../components/Views/AuthHeader'
import { Container, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import styles from './styles'

export class RegisterScreen extends Component {
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
            onBackPress={() => navigation.navigate('Login')}
            onPress={() => navigation.navigate('Login')}
            routeName="Войти"
          />
          <Text>RegisterScreen</Text>
        </LinearGradient>
      </Container>
    )
  }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = {}

export default RegisterScreen
