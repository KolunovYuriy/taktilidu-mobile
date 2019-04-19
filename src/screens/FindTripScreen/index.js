import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text } from 'native-base'

import Content from '../../components/MainContent'
import { FindTripsForm } from '../../components/Forms'
import ScreenLabel from '../../components/ScreenLabel'
import { MainButton as Button } from '../../components/Button'

import styles from './styles'
import { imgLogo, icArrowDown } from '../../assets/images'

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
          <Image source={imgLogo} style={styles.image} />
          <ScreenLabel mainText="Найти поездку" sectionWithLogo />
          <FindTripsForm
            onPressDatetimepicker={this._onHandleDatetimepicker}
            onDatetimepickerCancel={this._onDatetimepickerCancel}
            isDatetimepickerVisible={isDatetimepickerVisible}
          />
          <Button
            buttonWidth={250}
            text="Поиск"
            onPress={() => navigation.navigate('TripResults')}
          />
          <Text style={styles.text}>Не нашли подходящего?</Text>
          <Image source={icArrowDown} style={styles.iconDown} />
          <Button
            buttonWidth={250}
            noGradient
            noGradientStyle={styles.noGradientStyle}
            noIcon
            text="Предложить поездку"
            onPress={() => navigation.navigate('CreateTrip')}
          />
        </Content>
      </Container>
    )
  }
}

export default FindTripScreen
