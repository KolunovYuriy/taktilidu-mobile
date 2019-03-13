import React, { Component, Fragment } from 'react'
import { Image } from 'react-native'
import { Container, Text } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import CodeInput from 'react-native-confirmation-code-field'
// import { connect } from 'react-redux'

import Header from '../Views/AuthHeader'
import Content from '../Views/AuthContent'
import { AuthButton as Button } from '../Views/AuthButton'
import BottomSection from '../Views/AuthBottomSection'
import { ForgotPasswordForm, NewPasswordForm } from '../../../components/Forms'

import styles from './styles'

import { imgLogo, icInfo } from '../../../assets/images'

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
          <Fragment>
            <Text style={styles.labelText}>Введите код здесь: </Text>
            <CodeInput
              size={64}
              variant="border-b"
              codeLength={4}
              onFulfill={this.handlerOnFulfill}
            />
          </Fragment>
        )
      case 2:
        return <NewPasswordForm />
    }
  }

  bottomSectionText = steps => {
    switch (steps) {
      case 0:
        return ' Вы получите сообщение с кодом'
      case 1:
        return ' На Ваш e-mail было выслано письмо с кодом подтверждения'
      case 2:
        return ' Придумайте пароль'
    }
  }

  render() {
    const { navigation } = this.props
    const { inputFilled, stepCount } = this.state

    return (
      <Container>
        <LinearGradient
          start={{ x: 0.2, y: 0 }}
          end={{ x: 1.2, y: 0 }}
          style={styles.linearGradient}
          colors={['#FD6585', '#0D25B9']}
        >
          <Header
            routeName={stepCount === 1 && 'Отправить повторно'}
            onBackPress={() => navigation.navigate('Login')}
          />
          <Content>
            <Image style={styles.image} source={imgLogo} />
            {this.resetPasswordSteps(stepCount)}
          </Content>
        </LinearGradient>
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