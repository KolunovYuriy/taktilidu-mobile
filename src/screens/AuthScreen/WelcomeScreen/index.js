import React, { Component } from 'react'
import { ImageBackground, Image, View, SafeAreaView } from 'react-native'
import { Container, Text } from 'native-base'

import { MainButton as Button } from '../../../components/Button'
import BottomSection from '../Views/AuthBottomSection'

import { imgBG, imgLogo } from '../../../assets/images'
import styles from './styles'

class WelcomeScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <ImageBackground source={imgBG} style={styles.imageBackground}>
        <View
          style={{
            flex: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: '#000',
            opacity: 0.18
          }}
        />
        <SafeAreaView style={{ flex: 1 }}>
          <Container style={styles.container}>
            <View>
              <Image source={imgLogo} style={styles.logo} />
              <Text style={styles.text}>Найдите удобные{'\n'}рейсы прямо сегодня!</Text>
            </View>
            <View>
              <Button text="Регистрация" noIcon onPress={() => navigation.navigate('Register')} />
              <BottomSection
                buttonText="Войти"
                textColor="#fff"
                iconColor="#fff"
                onPressText={() => navigation.navigate('Login')}
              />
            </View>
          </Container>
        </SafeAreaView>
      </ImageBackground>
    )
  }
}

export default WelcomeScreen
