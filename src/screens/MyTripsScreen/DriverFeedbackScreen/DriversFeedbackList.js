import React, { Component } from 'react'
import { Container, Text, View } from 'native-base'

import Content from '../../../components/MainContent'
import ScreenLabel from '../../../components/ScreenLabel'
import Header from '../../../components/Header'
import FeedbackCard from '../../../components/FeedbackCard'

const feedbackList = [{}, {}, {}, {}, {}]

class DriversFeedbackListScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header onBackPress={() => navigation.goBack()} />
        <Content padding={10}>
          <ScreenLabel mainText="Отзывы" />
          {feedbackList.map((item, index) => (
            <FeedbackCard key={index} />
          ))}
        </Content>
      </Container>
    )
  }
}

export default DriversFeedbackListScreen
