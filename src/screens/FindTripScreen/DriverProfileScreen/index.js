import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text, Label, List, ListItem, View } from 'native-base'

import Content from '../../../components/MainContent'
import Header from '../../../components/Header'
import ProfileTopSection from '../../ProfileScreen/components/ProfileTopSection'
import FeedbackCard from '../../../components/FeedbackCard'
import ScreenLabel from '../../../components/ScreenLabel'

import {
  imgUserPhoto,
  icPhone,
  icBirthday,
  icEmail,
  icGender,
  icStar,
  icRightThinArrow
} from '../../../assets/images'
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

const driverInformation = [
  {
    label: 'ИП “Очень хороший перевозчик”',
    type: 'rating',
    text: 4.9
  },
  {
    label: 'Номер лицензии',
    type: 'lisenceNumber',
    text: '№ ХХ 12 34'
  },
  {
    label: 'Mercedes Banz Серый',
    type: 'car',
    text: 'ХХ1234ХХ',
    isButton: true
  },
  {
    label: 'Дополнительное:',
    type: 'extra',
    text: 'есть кондеционер'
  }
]

const feedbackList = [{}, {}, {}, {}, {}]

class DriverProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

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

  renderDriverDetails = driverInformation => {
    return (
      <List style={styles.list}>
        {driverInformation.map((item, index) => {
          switch (item.type) {
            case 'rating':
              return (
                <ListItem
                  style={[styles.listItem, { justifyContent: 'space-between' }]}
                  key={index}
                >
                  <Text style={styles.listText}>{item.label}</Text>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.listText}>{item.text}</Text>
                    <Image source={icStar} style={styles.iconStar} />
                  </View>
                </ListItem>
              )
            case 'extra':
              return (
                <ListItem style={styles.listItem} key={index}>
                  <Text style={styles.listText}>{item.label} </Text>
                  <Text style={styles.listText}>{item.text}</Text>
                </ListItem>
              )
            default:
              return (
                <ListItem style={styles.listItem} key={index}>
                  <Text style={styles.listText}>{item.label} - </Text>
                  <Text style={[styles.listText, { color: '#C4C4C4' }]}>{item.text}</Text>
                  {item.isButton && (
                    <Image
                      source={icRightThinArrow}
                      style={{ resizeMode: 'contain', width: 14, height: 28 }}
                    />
                  )}
                </ListItem>
              )
          }
        })}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header onBackPress={() => navigation.goBack()} />
        <Content padding={15}>
          <ProfileTopSection lightTheme userImg={imgUserPhoto} />
          {this.renderInformation(userInformation)}
          {this.renderDriverDetails(driverInformation)}
          <Label style={styles.label}>Отзывы</Label>
          {feedbackList.map((item, index) => (
            <FeedbackCard key={index} />
          ))}
        </Content>
      </Container>
    )
  }
}

export default DriverProfileScreen
