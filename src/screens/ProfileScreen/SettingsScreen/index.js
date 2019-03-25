import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import ProfileTopSection from '../components/ProfileTopSection'
import ScreenLabel from '../../../components/ScreenLabel'

import {
  icNotification,
  icSettings,
  icEmail,
  icBirthday,
  icGender,
  icPhone,
  imgUserPhoto
} from '../../../assets/images'

import styles from './styles'

const settingsListItems = [
  {
    routeName: '',
    text: 'Информация обо мне'
  },
  {
    routeName: '',
    text: 'Уведомления'
  },
  {
    routeName: '',
    text: 'Мои поездки'
  },
  {
    routeName: '',
    text: 'Мои билеты'
  },
  {
    routeName: '',
    text: 'Мои платежи'
  },
  {
    routeName: '',
    text: 'Наши контакты'
  },
  {
    routeName: '',
    text: 'О нас'
  },
  {
    routeName: 'Support',
    text: 'Поддержка'
  }
]

class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  renderSettingsList = items => {
    const { navigation } = this.props
    return (
      <List style={styles.list}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            style={styles.listItem}
            onPress={() => item.routeName && navigation.navigate(item.routeName)}
          >
            <Text style={styles.listItemText}>{item.text}</Text>
          </ListItem>
        ))}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <LinearGradient
          useAngle
          angle={140.18}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
          colors={['#EC91B0', '#676ECD']}
        >
          <Header
            lightTheme
            onBackPress={() => navigation.goBack()}
            headerItems={[
              {
                icon: icNotification,
                onButtonPress: () => navigation.navigate('')
              }
            ]}
          />
          <ProfileTopSection userImg={imgUserPhoto} />
        </LinearGradient>
        <Content padding={15}>{this.renderSettingsList(settingsListItems)}</Content>
      </Container>
    )
  }
}

export default SettingsScreen
