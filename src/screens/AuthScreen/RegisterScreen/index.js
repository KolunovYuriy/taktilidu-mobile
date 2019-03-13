import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { Image, View } from 'react-native'
import { Container, Text, List, ListItem } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../Views/AuthHeader'
import Content from '../Views/AuthContent'
import BottomSection from '../Views/AuthBottomSection'
import { RegisterForm } from '../../../components/Forms'
import { AuthButton as Button } from '../Views/AuthButton'

import styles from './styles'

import { imgLogo, icNext } from '../../../assets/images'

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

  renderChooseRoleForm = () => {
    const { choosenRoleType } = this.state
    return (
      <List style={styles.listStyle}>
        {roles.map((item, index) => (
          <View style={{ marginTop: 40 }}>
            <ListItem
              onPress={() => this.setState({ choosenRoleType: item.type })}
              button
              key={index}
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

  render() {
    const { navigation } = this.props
    const { isRoleChoosen, choosenRoleType } = this.state
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
          <Content>
            <Image style={styles.image} source={imgLogo} />
            {isRoleChoosen ? <RegisterForm /> : this.renderChooseRoleForm()}
          </Content>
        </LinearGradient>
        {isRoleChoosen ? (
          <Button buttonText="Зарегистрироваться" />
        ) : (
          <Button
            buttonText="Далее"
            disabled={!choosenRoleType}
            onPress={() => this.setState({ isRoleChoosen: true })}
          />
        )}

        <BottomSection buttonText="или" onPressText={() => navigation.navigate('')} />
      </Container>
    )
  }
}

// const mapStateToProps = state => ({})

// const mapDispatchToProps = {}

export default RegisterScreen
