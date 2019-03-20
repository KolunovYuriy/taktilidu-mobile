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

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content padding={7}>
          <ScreenLabel mainText="Найти поездку" />
          <FindTripsForm />
          <Button text="Далее" onPress={() => navigation.push('TripResults')} />
          <Text style={styles.text}>или</Text>
          <Text style={styles.createButton}>Создать поездку</Text>
        </Content>
      </Container>
    )
  }
}

export default FindTripScreen
