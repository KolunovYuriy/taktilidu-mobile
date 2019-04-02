import React, { Component, Fragment } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem, Accordion, View } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import ProfileTopSection from '../components/ProfileTopSection'
import ScreenLabel from '../../../components/ScreenLabel'
import { MainButton as Button } from '../../../components/Button'
import { ContactUsForm } from '../../../components/Forms'

import { icRightThinArrow } from '../../../assets/images'

import styles from './styles'

const dataArray = [
  {
    title: 'Москва - Сочи',
    time: '11.01.2019 - 15.26',
    isOpen: 'Открыт'
  },
  {
    title: 'Москва - Сочи',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыт'
  },
  {
    title: 'Москва - Сочи',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыт'
  },
  {
    title: 'Москва - Сочи',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыт'
  }
]

class HelpScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  renderHelpChatList = () => {
    const { navigation } = this.props
    return (
      <List style={styles.helpChatList}>
        {dataArray.map((item, index) => (
          <ListItem
            key={index}
            style={styles.helpChatListItem}
            onPress={() =>
              navigation.navigate('HelpChat', {
                chatTitle: item.title,
                chatTime: item.time,
                isChatOpen: item.isOpen
              })
            }
          >
            <View style={styles.verticalSection}>
              <Text style={styles.helpChatListItemText}>{item.title}</Text>
              <View style={styles.horizontalSection}>
                <Text style={styles.helpChatListItemTime}>{item.time}</Text>
                <Text style={styles.helpChatListItemOpen}>{item.isOpen}</Text>
              </View>
            </View>
            <Image source={icRightThinArrow} style={styles.iconRightThinArrow} />
          </ListItem>
        ))}
      </List>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header lightTheme onBackPress={() => navigation.goBack()} />
        <Content padding={10}>
          <ScreenLabel mainText="Чаты по поездкам" />
          {this.renderHelpChatList()}
        </Content>
      </Container>
    )
  }
}

export default HelpScreen
