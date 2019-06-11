import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import Content from '../../components/MainContent'
import ScreenLabel from '../../components/ScreenLabel'
import { MainButton as Button } from '../../components/Button'
import { PopUpModal } from '../../components/Modal'
import { CreateTripForm } from '../../components/Forms'
import { icCarStar } from '../../assets/images'

class CreateTripScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isDatetimepickerVisible: false,
      isModalVisible: false
    }
  }

  _onHandleDatetimepicker = () => {
    this.setState({ isDatetimepickerVisible: true })
  }

  _onDatetimepickerCancel = () => {
    this.setState({ isDatetimepickerVisible: false })
  }

  onBtnPress = () => {
    this.setState({
      isModalVisible: true
    })
  }

  onBackBtnHandle = () => {
    this.setState({ isModalVisible: false })
  }

  render() {
    const { navigation } = this.props
    const { isDatetimepickerVisible, isModalVisible } = this.state
    return (
      <Container>
        <Content padding={10}>
          <ScreenLabel noHeader mainText="Создать поездку" />
          <CreateTripForm
            onPressDatetimepicker={this._onHandleDatetimepicker}
            onDatetimepickerCancel={this._onDatetimepickerCancel}
            isDatetimepickerVisible={isDatetimepickerVisible}
          />
          <Button text="Далее" onPress={this.onBtnPress} />
          <Text onPress={() => navigation.navigate('OfferTrip')}>Предложить поездку</Text>
          <PopUpModal
            onBackPress={this.onBackBtnHandle}
            onPress={() => {
              this.onBackBtnHandle()
              this.props.navigation.navigate('MyTrips')
            }}
            routeName="Мои поездки"
            icon={icCarStar}
            title="Спасибо, поездка создана!"
            text="Заказ отправлен на стол заказов для водителей. Для того, чтобы она состоялась, заказ должен быть принят водителям. Заказ будет принят вероятнее всего, если к Вашей поездке присоединятся другие пользователи. Вы всегда можете отследить статус Вашей поездки во вкладке Мои Поездки."
            isVisible={isModalVisible}
          />
        </Content>
      </Container>
    )
  }
}

export default CreateTripScreen
