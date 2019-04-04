import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import Header from '../../components/Header'
import Content from '../../components/MainContent'
import { FindTripsForm } from '../../components/Forms'
import ScreenLabel from '../../components/ScreenLabel'
import { MainButton as Button } from '../../components/Button'

import styles from './styles'

class FindTripScreen extends Component {
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
          <ScreenLabel mainText="Найти поездку" noHeader />
          <FindTripsForm
            onPressDatetimepicker={this._onHandleDatetimepicker}
            onDatetimepickerCancel={this._onDatetimepickerCancel}
            isDatetimepickerVisible={isDatetimepickerVisible}
          />
          <Button text="Далее" onPress={() => navigation.navigate('TripResults')} />
          <Text style={styles.text}>или</Text>
          <Text style={styles.createButton} onPress={() => navigation.navigate('CreateTrip')}>
            Создать поездку
          </Text>
        </Content>
      </Container>
    )
  }
}

export default FindTripScreen
