import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem, View } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import ProfileTopSection from '../components/ProfileTopSection'
import ScreenLabel from '../../../components/ScreenLabel'

import { icNotification, icCircle } from '../../../assets/images'

import styles from './styles'

const notificationsList = [
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRead: false
  },
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    notify: true,
    isRead: false
  },
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRead: true
  },
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRead: true
  },
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRead: true
  },
  {
    routeName: '',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    isRead: true
  }
]

class NotificationsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  renderNotificationsList = items => {
    const { navigation } = this.props
    return (
      <List style={styles.list}>
        {items.map((item, index) => (
          <ListItem
            key={index}
            style={styles.listItem}
            onPress={() => item.routeName && navigation.navigate('')}
          >
            <View>
              <Image source={icNotification} style={styles.iconLeftArrow} />
              {!item.isRead && <Image source={icCircle} style={styles.iconCircle} />}
            </View>
            <Text style={[styles.listItemText, !item.isRead && { fontWeight: 'bold' }]}>
              {item.text}
            </Text>
          </ListItem>
        ))}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header lightTheme onBackPress={() => navigation.goBack()} />
        <Content padding={15}>
          <ScreenLabel mainText="Уведомления" noMargin />
          {this.renderNotificationsList(notificationsList)}
        </Content>
      </Container>
    )
  }
}

export default NotificationsScreen
