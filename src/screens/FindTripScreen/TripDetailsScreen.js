import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import Content from '../../components/MainContent'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'

class TripDetailsScreen extends Component {
  render() {
    return (
      <Container>
        <Content padding={15}>
          <ScreenLabel mainText="Найдено: " additionalText="18 результатов" />
          <TripDetailItem
            tripDetailType="TripDetailsScreen"
            fromCity="г. Санкт-Петербург"
            betweenCity="г. Тверь"
            toCity="г. Санкт-Петербург"
            time="12:40"
            date="18 февраля"
            price="900 р"
            carId="ХХ1234ХХ"
            driverName="Viacheslav Mykhailov"
          />
        </Content>
      </Container>
    )
  }
}

export default TripDetailsScreen
