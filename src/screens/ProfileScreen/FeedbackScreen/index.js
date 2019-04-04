import React, { Component } from 'react'
import { Container, Text, View } from 'native-base'
import Content from '../../../components/MainContent'
import Header from '../../../components/Header'
import ScreenLabel from '../../../components/ScreenLabel'
import { FeedbackForm } from '../../../components/Forms'
import { MainButton as Button } from '../../../components/Button'

import styles from './styles'

class FeedbackScreen extends Component {
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
          <ScreenLabel mainText="Оставить отзыв" />
          <View style={styles.feedbackDetailsSection}>
            <Text style={styles.feedbackDetails}>Мы ценим Ваши замечания и предложения</Text>
          </View>
          <FeedbackForm />
          <Button text="Отправить" />
        </Content>
      </Container>
    )
  }
}

export default FeedbackScreen
