import React, { Component } from 'react'
import { Image, ImageBackground, View, Dimensions } from 'react-native'
import { Container } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import { AuthButton as Button } from '../Views/AuthButton'
import BottomSection from '../Views/AuthBottomSection'
import { LoginForm } from '../../../components/Forms'

import { imgLogo, imgBgContent } from '../../../assets/images/'
import styles from './styles'
const { height } = Dimensions.get('window')

export class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      inputSectionHeight: 0
    }
  }
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <ImageBackground source={imgBgContent} style={{ flex: 1, resizeMode: 'center' }}>
          <View
            style={{
              flex: 1,
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: '#000',
              opacity: 0.65
            }}
          />
          <LinearGradient
            useAngle
            angle={110.44}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
            colors={['#FD6585', '#0D25B9']}
          >
            <Header
              routeName="Регистрация"
              onBackPress={() => navigation.goBack()}
              onPress={() => navigation.navigate('Register')}
            />
            <Content contentContainerStyle={{ flexGrow: 1 }}>
              <Image style={styles.image} source={imgLogo} />
              <View
                style={{
                  height: height / 2,
                  justifyContent: 'center'
                }}
              >
                <LoginForm />
              </View>
            </Content>
          </LinearGradient>
        </ImageBackground>
        <Button buttonText="Войти" onPress={() => navigation.navigate('Tab')} />
        <BottomSection
          buttonText="Забыли пароль?"
          onPressText={() => navigation.navigate('ForgotPassword')}
        />
      </Container>
    )
  }
}

export default LoginScreen
