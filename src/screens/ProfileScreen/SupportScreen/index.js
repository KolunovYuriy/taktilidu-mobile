import React, { Component } from 'react'
import { Image } from 'react-native'
import { Container, Text, List, ListItem, Accordion, View } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import ProfileTopSection from '../components/ProfileTopSection'
import ScreenLabel from '../../../components/ScreenLabel'

import { icNotification, icDownArrow, icUpArrow } from '../../../assets/images'

import styles from './styles'

const dataArray = [
  {
    title: 'Как это работает',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  { title: 'Вопросы и ответы', content: 'Lorem ipsum dolor sit amet' },
  { title: 'Связаться с нами', content: 'Lorem ipsum dolor sit amet' }
]

class SupportScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  _renderHeader = (item, expanded) => {
    return (
      <View
        style={[
          styles.accordionHeader,
          {
            borderBottomWidth: expanded ? 0 : 1
          }
        ]}
      >
        <Text style={styles.accordionHeaderText}>{item.title}</Text>
        {expanded ? (
          <Image source={icUpArrow} style={styles.iconArrow} />
        ) : (
          <Image source={icDownArrow} style={styles.iconArrow} />
        )}
      </View>
    )
  }

  _renderContent = item => {
    console.log(item)
    return (
      <View style={styles.accordionContent}>
        <Text style={styles.accordionContentText}>{item.content}</Text>
      </View>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header
          lightTheme
          onBackPress={() => navigation.goBack()}
          headerItems={[
            {
              icon: icNotification,
              onButtonPress: () => navigation.navigate('')
            }
          ]}
        />
        <Content padding={10}>
          <ScreenLabel mainText="Поддержка" />
          <Accordion
            expanded
            renderHeader={this._renderHeader}
            renderContent={this._renderContent}
            style={styles.accordion}
            dataArray={dataArray}
          />
        </Content>
      </Container>
    )
  }
}

export default SupportScreen
