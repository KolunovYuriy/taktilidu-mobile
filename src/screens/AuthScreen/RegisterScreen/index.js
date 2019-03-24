import React, { Component, Fragment } from 'react'
// import { connect } from 'react-redux'
import { Image, ImageBackground, View, Dimensions } from 'react-native'
import { Container, Text, List, ListItem } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import BottomSection from '../Views/AuthBottomSection'
import { DriverRegisterForm, ClientRegisterForm } from '../../../components/Forms'
import { AuthButton as Button } from '../Views/AuthButton'

import styles from './styles'
import { imgLogo, imgBgContent, icNext } from '../../../assets/images'
const { height } = Dimensions.get('window')

const roles = [
  {
    text: 'Я водитель',
    type: 'driver'
  },
  {
    text: 'Я пассажир',
    type: 'client'
  }
]

export class RegisterScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isRoleChoosen: false,
      choosenRoleType: null
    }
  }

  onBackButtonPress = () => {
    this.state.isRoleChoosen
      ? this.setState({
          isRoleChoosen: false
        })
      : this.props.navigation.goBack()
  }

  renderChooseRoleForm = () => {
    const { choosenRoleType } = this.state
    return (
      <List style={styles.listStyle}>
        {roles.map((item, index) => (
          <View style={{ marginTop: 20, marginBottom: 20 }} key={index}>
            <ListItem
              onPress={() => this.setState({ choosenRoleType: item.type })}
              button
              style={styles.listItemStyle}
            >
              <Text style={[styles.listItemText, choosenRoleType === item.type && styles.boldText]}>
                {item.text}
              </Text>
              <Image style={styles.icon} source={icNext} />
            </ListItem>
          </View>
        ))}
      </List>
    )
  }

  bottomSection = choosenRoleType => {
    const { navigation } = this.props

    switch (choosenRoleType) {
      case 'client':
        return (
          <Fragment>
            <Button buttonText="Зарегистрироваться" />
            <BottomSection
              textColor="#9B4B9A"
              underline
              plainText="Вы водитель? "
              buttonText="Продолжить как водитель"
              onPressText={() => this.setState({ choosenRoleType: 'driver' })}
            />
          </Fragment>
        )
      case 'driver':
        return (
          <Fragment>
            <Button buttonText="Зарегистрироваться" />
            <BottomSection
              textColor="#9B4B9A"
              underline
              plainText="Возникли вопросы? "
              buttonText="Служба поддержки"
              onPressText={() => navigation.navigate('')}
            />
          </Fragment>
        )
    }
  }

  render() {
    const { navigation } = this.props
    const { isRoleChoosen, choosenRoleType } = this.state
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
            angle={109.63}
            start={{ x: 0.2, y: 0 }}
            end={{ x: 1.2, y: 0 }}
            style={styles.linearGradient}
            colors={['#FD6585', '#0D25B9']}
          >
            <Header
              onBackPress={this.onBackButtonPress}
              onPress={() => navigation.navigate('Login')}
              routeName="Войти"
            />
            <Content contentContainerStyle={{ flexGrow: 1 }}>
              <Image style={styles.image} source={imgLogo} />
              <View
                style={{
                  height: height / 2,
                  justifyContent: 'center'
                }}
              >
                {isRoleChoosen ? (
                  choosenRoleType === 'client' ? (
                    <ClientRegisterForm />
                  ) : (
                    <DriverRegisterForm />
                  )
                ) : (
                  this.renderChooseRoleForm()
                )}
              </View>
            </Content>
          </LinearGradient>
        </ImageBackground>
        {isRoleChoosen ? (
          this.bottomSection(choosenRoleType)
        ) : (
          <Fragment>
            <Button
              buttonText="Далее"
              disabled={!choosenRoleType}
              onPress={() => this.setState({ isRoleChoosen: true })}
            />
            <BottomSection
              iconColor="#9B4B9A"
              plainText="или"
              onPressText={() => navigation.navigate('')}
            />
          </Fragment>
        )}
      </Container>
    )
  }
}

// const mapStateToProps = state => ({})

// const mapDispatchToProps = {}

export default RegisterScreen
