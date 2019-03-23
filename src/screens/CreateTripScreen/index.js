import React, { Component } from 'react'
import { Container, Text } from 'native-base'

import Content from '../../components/MainContent'
import ScreenLabel from '../../components/ScreenLabel'
import { MainButton as Button } from '../../components/Button'

import { CreateTripForm } from '../../components/Forms'

class CreateTripScreen extends Component {
  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Content padding={7}>
          <ScreenLabel mainText="Создать поездку" />
          <CreateTripForm />
          <Button text="Далее" onPress={() => navigation.navigate('')} />
        </Content>
      </Container>
    )
  }
}

export default CreateTripScreen
