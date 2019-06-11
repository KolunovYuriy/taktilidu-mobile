import React, { Component } from 'react'
import { Container } from 'native-base'

import Content from '../../components/MainContent'
import Header from '../../components/Header'
import ScreenLabel from '../../components/ScreenLabel'
import TripDetailItem from '../../components/TripDetailItem'
import { PopUpModal } from '../../components/Modal'
import { icCarFront, icHighFive, icCheckout } from '../../assets/images'

class TripDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      userCount: 3
    }
  }

  onBackBtnHandle = () => {
    this.setState({ isModalVisible: false })
  }

  onAddPassengerPress = () => {
    this.state.userCount <
      this.props.navigation.state.params.passengersAmount -
        this.props.navigation.state.params.passengersJoined &&
      this.setState(prevState => ({
        userCount: prevState.userCount + 1
      }))
  }

  onRemovePassengerPress = () => {
    this.state.userCount > 1 &&
      this.setState(prevState => ({
        userCount: prevState.userCount - 1
      }))
  }

  renderPopUpModal = () => {
    const { isModalVisible } = this.state
    switch (this.props.navigation.state.params.status) {
      case 'notAcceptedYet':
        return (
          <PopUpModal
            onBackPress={this.onBackBtnHandle}
            routeName="Мои поездки"
            onPress={() => {
              this.onBackBtnHandle()
              this.props.navigation.navigate('MyTrips')
            }}
            icon={icHighFive}
            title="Вы успешно присоединились к поездке"
            text="Отслеживайте статус Вашей поездки во вкладке Мои Поездки. Для связи с водителем и другими участниками поездки используйте чат по поездке."
            isVisible={isModalVisible}
          />
        )
      case 'accepted':
        return (
          <PopUpModal
            onBackPress={this.onBackBtnHandle}
            routeName="Мои поездки"
            onPress={() => {
              this.onBackBtnHandle()
              this.props.navigation.navigate('MyTrips')
            }}
            icon={icCarFront}
            title="Вы успешно отменили участие в поездке"
            isVisible={isModalVisible}
          />
        )
      case 'fromDriver':
        console.log('User count', this.state.userCount)
        return (
          <PopUpModal
            onBackPress={this.onBackBtnHandle}
            onPress={() => {
              this.onBackBtnHandle()
              this.props.navigation.navigate('Auth')
            }}
            passengerAmount={this.state.userCount}
            onAddPassengerPress={this.onAddPassengerPress}
            onRemovePassengerPress={this.onRemovePassengerPress}
            routeName="Войти"
            icon={icCheckout}
            text="Пожалуйста, авторизуйтесь, чтобы иметь возможность участвовать в поездках и предлагать их."
            isVisible={isModalVisible}
          />
        )
      default:
        break
    }
  }

  render() {
    const { navigation } = this.props
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
          {this.renderPopUpModal()}
        </Content>
      </Container>
    )
  }
}

export default TripDetailsScreen
