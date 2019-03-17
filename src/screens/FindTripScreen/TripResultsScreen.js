import React, { Component } from 'react'
import { Container, Text, List } from 'native-base'

import Content from '../../components/MainContent'
import Header from '../../components/Header'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'

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
          />
        ))}
      </List>
    )
  }

  render() {
    return (
      <Container>
        <Content padding={15}>
          <ScreenLabel mainText="Найдено: " additionalText="18 результатов" />
          {this.renderTripResultsList()}
        </Content>
      </Container>
    )
  }
}

export default TripResultsScreen
