import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import Content from '../../components/MainContent'
import ScreenLabel from '../../components/ScreenLabel'
import { MainButton as Button } from '../../components/Button'

import { CreateTripForm } from '../../components/Forms'

class CreateTripScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isDatetimepickerVisible: false
    }
  }

  _onHandleDatetimepicker = () => {
    this.setState({ isDatetimepickerVisible: true })
  }

  _onDatetimepickerCancel = () => {
    this.setState({ isDatetimepickerVisible: false })
  }

  render() {
    const { navigation } = this.props
    const { isDatetimepickerVisible } = this.state
    return (
      <Container>
        <Content padding={10}>
          <ScreenLabel noHeader mainText="Создать поездку" />
          <CreateTripForm
            onPressDatetimepicker={this._onHandleDatetimepicker}
            onDatetimepickerCancel={this._onDatetimepickerCancel}
            isDatetimepickerVisible={isDatetimepickerVisible}
          />
          <Button text="Далее" onPress={() => navigation.navigate('')} />
          <Text onPress={() => navigation.navigate('OfferTrip')}>Предложить поездку</Text>
        </Content>
      </Container>
    )
  }
}

export default CreateTripScreen
