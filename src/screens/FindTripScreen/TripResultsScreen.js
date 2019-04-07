import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, List, ListItem, Text } from 'native-base'

import Content from '../../components/MainContent'
import Header from '../../components/Header'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'
import { icCircle, icRightArrow } from '../../assets/images'
import styles from './styles'

const listSample = [
  {
    fromCity: 'г. Москва',
    toCity: 'г. Санкт-Петербург',
    time: '12.40',
    price: '900 р',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: ''
  },
  {
    fromCity: 'г. Москва',
    toCity: 'г. Санкт-Петербург',
    time: '12.40',
    price: '900 р',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: ''
  },
  {
    fromCity: 'г. Санкт-Петербург',
    toCity: 'г. Москва',
    time: '12.40',
    price: '900 р',
    driver: 'Viacheslav Mykhailov',
    carId: 'ХХ1234ХХ',
    driverPhoto: ''
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
        <Image source={icCircle} style={styles.iconCircle} />
        <Text style={styles.fromTargetText}>{fromCity}</Text>
        <Image source={icRightArrow} style={styles.iconRightArrow} />
        <Text style={styles.toTargetText}>{toCity}</Text>
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
            passengersAmount={4}
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
