import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem } from 'native-base'

import Header from '../../components/Header'
import Content from '../../components/MainContent'
import ProfileTopSection from './components/ProfileTopSection'
import ScreenLabel from '../../components/ScreenLabel'

import {
  icNotification,
  icSettings,
  icEmail,
  icBirthday,
  icGender,
  icPhone,
  imgUserPhoto
} from '../../assets/images'

import styles from './styles'

const userInformation = [
  {
    icon: icPhone,
    text: '+3 (063) 760 00 00'
  },
  {
    icon: icBirthday,
    text: '11 августа 1996 года'
  },
  {
    icon: icEmail,
    text: 'Slavik21.ua@gmail.com'
  },
  {
    icon: icGender,
    text: 'Мужской'
  }
]

class ProfileScreen extends Component {
  renderInformation = items => {
    return (
      <List style={styles.infoSection}>
        {items.map((item, index) => {
          return (
            <ListItem style={styles.infoSectionItem} key={index}>
              <Image source={item.icon} style={styles.icon} />
              <Text style={styles.infoText}>{item.text}</Text>
            </ListItem>
          )
        })}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header
          headerItems={[
            {
              icon: icNotification,
              onButtonPress: navigation.navigate('')
            },
            {
              icon: icSettings,
              onButtonPress: navigation.navigate('')
            }
          ]}
        />
        <Content padding={15}>
          <ProfileTopSection userImg={imgUserPhoto} />
          {this.renderInformation(userInformation)}
          <ScreenLabel mainText="Мои поездки" />
          <ScreenLabel mainText="Мои билеты" />
        </Content>
      </Container>
    )
  }
}

export default ProfileScreen
