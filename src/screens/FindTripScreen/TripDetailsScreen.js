import React, { Component } from 'react'
import { Container } from 'native-base'

import Content from '../../components/MainContent'
import Header from '../../components/Header'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'
import { PopUpModal } from '../../components/Modal'

class TripDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false
    }
  }

  render() {
    const { navigation } = this.props
    const { isModalVisible } = this.state
    return (
      <Container>
        <Header onBackPress={() => navigation.goBack()} />
        <Content padding={10}>
          <ScreenLabel mainText="Найдено: " additionalText="18 результатов" />
          <TripDetailItem
            tripDetailType="TripDetailsScreen"
            fromCity="г. Санкт-Петербург"
            betweenCity="г. Тверь"
            toCity="г. Москва"
            time="12:40"
            date="18 февраля"
            price="900 р"
            carId="ХХ1234ХХ"
            driverName="Viacheslav Mykhailov"
            status={this.props.navigation.state.params.status}
            passengersAmount={this.props.navigation.state.params.passengersAmount}
            passengersJoined={this.props.navigation.state.params.passengersJoined}
            isGroupFilledOut={this.props.navigation.state.params.isGroupFilledOut}
            onPress={() =>
              navigation.navigate('DriverProfile', {
                isDriverProfile: true
              })
            }
            onActionBtnPress={() =>
              this.setState(prevState => ({ isModalVisible: !prevState.isModalVisible }))
            }
          />
          <PopUpModal isVisible={isModalVisible} />
        </Content>
      </Container>
    )
  }
}

export default TripDetailsScreen
