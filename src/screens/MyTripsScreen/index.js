import React, { Component } from 'react'
import { Text, Container, View } from 'native-base'

import Header from '../../components/Header'
import Content from '../../components/MainContent'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'

import styles from './styles'

const pastTrips = [
  {
    isFeedbackMade: true
  },
  {
    isFeedbackMade: false
  },
  {
    isFeedbackMade: false
  }
]

export default class MyTripsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)

    this.state = {
      activeSection: 0
    }
  }

  onHendleSection = item => {
    this.setState({ activeSection: item })
  }

  _renderCurrentTabContent = i => {
    switch (i) {
      case 0:
        return (
          <TripDetailItem
            tripDetailType="MyCurrentTripScreen"
            fromCity="г. Санкт-Петербург"
            betweenCity="г. Тверь"
            toCity="г. Москва"
            time="12:40"
            date="18 февраля"
            price="900 р"
            onBoxLinkPress={() =>
              this.props.navigation.navigate('Chat', {
                chatTitle: 'Москва - Сочи',
                chatTime: '11.01.2019 - 15.26',
                isChatOpen: 'Открыт'
              })
            }
            carId="ХХ1234ХХ"
            driverName="Viacheslav Mykhailov"
          />
        )
      case 1:
        return pastTrips.map((item, index) => {
          return (
            <TripDetailItem
              key={index}
              tripDetailType="MyCurrentTripScreen"
              fromCity="г. Санкт-Петербург"
              betweenCity="г. Тверь"
              toCity="г. Москва"
              time="12:40"
              date="18 февраля"
              price="900 р"
              onBox
              isPastTrip
              onBoxLinkPress={() =>
                this.props.navigation.navigate(
                  item.isFeedbackMade ? 'DriversFeedbackList' : 'DriverFeedback'
                )
              }
              isFeedbackMade={item.isFeedbackMade}
              carId="ХХ1234ХХ"
              driverName="Viacheslav Mykhailov"
            />
          )
        })
      case 2:
        return <Text>chat</Text>
      default:
        break
    }
  }

  render() {
    const { navigation } = this.props
    const { activeSection } = this.state

    return (
      <Container>
        <Content padding={10}>
          <ScreenLabel mainText="Мои поездки" noHeader />
          <View style={styles.section}>
            <Text
              onPress={() => this.onHendleSection(0)}
              style={[styles.sectionText, activeSection === 0 && styles.activeSectionText]}
            >
              Текущие
            </Text>
            <Text
              onPress={() => this.onHendleSection(1)}
              style={[styles.sectionText, activeSection === 1 && styles.activeSectionText]}
            >
              Прошлые
            </Text>
            <Text
              onPress={() => navigation.navigate('ChatList')}
              style={[styles.sectionText, activeSection === 2 && styles.activeSectionText]}
            >
              Чаты
            </Text>
          </View>
          {this._renderCurrentTabContent(activeSection)}
        </Content>
      </Container>
    )
  }
}
