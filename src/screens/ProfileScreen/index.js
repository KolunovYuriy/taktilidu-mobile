import React, { Component, Fragment } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem, View } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../components/Header'
import Content from '../../components/MainContent'
import ProfileTopSection from './components/ProfileTopSection'

import { icNotification, icDownThinArrow, imgUserPhoto, icCircle } from '../../assets/images'

import styles from './styles'

const settingsListItems = [
  {
    routeName: 'Welcome',
    text: 'Войти'
  },
  {
    routeName: 'Edit',
    text: 'Информация обо мне'
  },
  {
    routeName: 'Notifications',
    text: 'Уведомления',
    notify: true
  },
  {
    routeName: 'Feedback',
    text: 'Оставить отзыв о сервисе'
  },
  {
    routeName: '',
    text: 'О приложении'
  }
]

class ProfileScreen extends Component {
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
            <View>
              <Text style={styles.listItemText}>{item.text}</Text>
              {item.notify && (
                <Image
                  source={icCircle}
                  style={{
                    width: 8,
                    height: 8,
                    tintColor: '#1BFB08',
                    position: 'absolute',
                    right: -9,
                    top: 0
                  }}
                />
              )}
            </View>
            <Image source={icDownThinArrow} style={styles.iconRightArrow} />
          </ListItem>
        ))}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Fragment>
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
              headerItems={[
                {
                  icon: icNotification,
                  onButtonPress: () => navigation.navigate('Notifications')
                }
              ]}
            />
            <ProfileTopSection userImg={imgUserPhoto} />
          </LinearGradient>
          <Content padding={15}>{this.renderSettingsList(settingsListItems)}</Content>
        </Fragment>
      </Container>
    )
  }
}

export default ProfileScreen
