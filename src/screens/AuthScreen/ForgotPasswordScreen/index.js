import React, { Component, Fragment } from 'react'
import { Image, ImageBackground, View, Dimensions } from 'react-native'
import { Container, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import CodeInput from 'react-native-confirmation-code-field'
// import { connect } from 'react-redux'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import { AuthButton as Button } from '../Views/AuthButton'
import BottomSection from '../Views/AuthBottomSection'
import { ForgotPasswordForm, NewPasswordForm } from '../../../components/Forms'

import styles from './styles'

import { imgLogo, imgBgContent, icInfo } from '../../../assets/images'

const { height } = Dimensions.get('window')

class ForgotPasswordScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputFilled: false,
      stepCount: 0
    }
  }

  handlerOnFulfill = code => console.log(code)

  resetPasswordSteps = steps => {
    switch (steps) {
      case 0:
        return <ForgotPasswordForm />
      case 1:
        return (
          <View
            style={{
              height: 100
            }}
          >
            <Text style={styles.labelText}>Введите код здесь: </Text>
            <CodeInput
              inputPosition="full-width"
              size={64}
              variant="border-b"
              codeLength={4}
              onFulfill={this.handlerOnFulfill}
            />
          </View>
        )
      case 2:
        return <NewPasswordForm />
    }
  }

  bottomSectionText = steps => {
    switch (steps) {
      case 0:
        return 'Вы получите письмо с кодом'
      case 1:
        return 'На Ваш e-mail было выслано письмо с кодом подтверждения'
      case 2:
        return 'Придумайте пароль'
    }
  }

  render() {
    const { navigation } = this.props
    const { inputFilled, stepCount } = this.state

    return (
      <Container>
        <ImageBackground source={imgBgContent} style={{ flex: 1, resizeMode: 'cover' }}>
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
            angle={111.07}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 1.2, y: 0 }}
            style={styles.linearGradient}
            colors={['#FD6585', '#0D25B9']}
          >
            <Header
              routeName={stepCount === 1 && 'Отправить повторно'}
              onBackPress={() => navigation.goBack()}
            />
            <Content contentContainerStyle={{ flexGrow: 1 }}>
              <Image style={styles.image} source={imgLogo} />
              <View
                style={{
                  height: height / 2,
                  justifyContent: 'center'
                }}
              >
                {this.resetPasswordSteps(stepCount)}
              </View>
            </Content>
          </LinearGradient>
        </ImageBackground>
        <Button
          buttonText="Далее"
          onPress={() =>
            stepCount < 2 &&
            this.setState(prevState => {
              return { inputFilled: true, stepCount: prevState.stepCount + 1 }
            })
          }
        />
        <BottomSection
          icon={icInfo}
          plainText={this.bottomSectionText(stepCount)}
          onPressText={() => navigation.navigate('')}
        />
      </Container>
    )
  }
}

// const mapStateToProps = (state) => ({
// })

// const mapDispatchToProps = {
// }

export default ForgotPasswordScreen
