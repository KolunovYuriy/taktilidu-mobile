import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, List, ListItem, Text, View } from 'native-base'

import Content from '../../components/MainContent'
import Header from '../../components/Header'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'
import { icCircle, icRightArrow, icLine1x } from '../../assets/images'
import styles from './styles'

const listSample = [
  {
    fromCity: 'г. Москва',
    toCity: 'г. Санкт-Петербург',
    time: '12:40',
    price: '900 р.',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: '',
    status: 'accepted',
    isGroupFilledOut: false,
    passengersAmount: 17,
    passengersJoined: 12
  },
  {
    fromCity: 'г. Москва',
    toCity: 'г. Санкт-Петербург',
    time: '12:40',
    price: '900 р.',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: '',
    status: 'notAcceptedYet',
    isGroupFilledOut: false,
    passengersAmount: 1,
    passengersJoined: 1
  },
  {
    fromCity: 'г. Санкт-Петербург',
    toCity: 'г. Москва',
    time: '12:40',
    price: '900 р.',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: '',
    status: 'fromDriver',
    isGroupFilledOut: false,
    passengersAmount: 12,
    passengersJoined: 0
  },
  {
    fromCity: 'г. Санкт-Петербург',
    toCity: 'г. Москва',
    time: '12:40',
    price: '900 р.',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: '',
    status: 'waiting',
    isGroupFilledOut: true,
    passengersAmount: 12,
    passengersJoined: 12
  }
]

class TripResultsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  renderTarget = (fromCity, toCity) => {
    return (
      <ListItem style={styles.targetSection}>
        <View style={styles.horizontal}>
          <Image source={icLine1x} style={styles.iconCircle} />
          <View>
            <Text style={styles.fromTargetText}>{fromCity}</Text>
            <Text style={styles.toTargetText}>{toCity}</Text>
          </View>
        </View>
        <View style={styles.horizontal}>
          <View>
            <Text style={styles.timeLabel}>Дорога займет</Text>
            <Text style={styles.time}>2 часа, 45 минут</Text>
          </View>
        </View>
      </ListItem>
    )
  }

  renderTripResultsList = () => {
    const { navigation } = this.props
    return (
      <List>
        {listSample.map((item, index) => (
          <TripDetailItem
            tripDetailType="TripResultsScreen"
            key={index}
            fromCity={item.fromCity}
            toCity={item.toCity}
            time={item.time}
            price={item.price}
            carId={item.carId}
            driverName={item.driver}
            onPress={() => navigation.navigate('TripDetails')}
            passengersAmount={item.passengersAmount}
            passengersJoined={item.passengersJoined}
            status={item.status}
            isGroupFilledOut={item.isGroupFilledOut}
          />
        ))}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header onBackPress={() => navigation.goBack()} />
        <Content padding={10}>
          <ScreenLabel mainText="Найдено: " additionalText="18 результатов" />
          {this.renderTarget('г. Санкт-Петербург', 'г. Москва')}
          {this.renderTripResultsList()}
        </Content>
      </Container>
    )
  }
}

export default TripResultsScreen
