import React, { Component, Fragment } from 'react'
import { Image } from 'react-native'
import { Container, Button, Thumbnail, View, Text } from 'native-base'

import Header from '../../../components/Header'
import { GiftedChat } from 'react-native-gifted-chat'

import { icAttachment } from '../../../assets/images'
import styles from './styles'

const dataArray = [
  {
    title: 'Длинное название темы обращения',
    time: '11.01.2019 - 15.26',
    isOpen: 'Открыто'
  },
  {
    title: 'Длинное название темы обращения',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыто'
  },
  {
    title: 'Длинное название темы обращения',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыто'
  },
  {
    title: 'Длинное название темы обращения',
    time: '11.01.2019 - 15.26',
    isOpen: 'Закрыто'
  }
]

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }
  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any'
          }
        }
      ]
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages)
    }))
  }

  renderHelpChatTitle = item => {
    return (
      <View style={styles.helpChatTitleSection}>
        <View style={styles.verticalSection}>
          <Text style={styles.helpChatListItemText}>{item.chatTitle}</Text>
          <View style={styles.horizontalSection}>
            <Text style={styles.helpChatListItemTime}>{item.chatTime}</Text>
            <Text style={styles.helpChatListItemOpen}>{item.isChatOpen}</Text>
          </View>
        </View>
      </View>
    )
  }

  _renderMessage = item => {
    return (
      <Fragment>
        {item.currentMessage.user._id === 1 ? (
          <View style={[styles.verticalSection]}>
            <View style={styles.rightHorizontalSection}>
              <Text style={styles.bubbleDate}>12.02.2019 - 15.31</Text>
              <Text style={styles.bubbleName}>{item.currentMessage.user.name}</Text>
              <Thumbnail small style={styles.avatar} source={{ uri: item.currentMessage.avatar }} />
            </View>
            <Text style={styles.rightBubbleText}>{item.currentMessage.text}</Text>
          </View>
        ) : (
          <View style={[styles.verticalSection]}>
            <View style={styles.leftHorizontalSection}>
              <Thumbnail
                small
                style={styles.avatar}
                source={{ uri: item.currentMessage.user.avatar }}
              />
              <Text style={styles.bubbleName}>{item.currentMessage.user.name}</Text>
              <Text style={styles.bubbleDate}>12.02.2019 - 15.31</Text>
            </View>
            <Text style={styles.leftBubbleText}>{item.currentMessage.text}</Text>
          </View>
        )}
      </Fragment>
    )
  }

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header lightTheme onBackPress={() => navigation.goBack()} />
        {this.renderHelpChatTitle(navigation.state.params)}
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          renderActions={() => {
            return (
              <Button
                transparent
                style={{
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
                onPress={this.uploadImage}
              >
                <Image source={icAttachment} style={styles.chatAttachment} />
              </Button>
            )
          }}
          user={{
            _id: 1
          }}
        />
      </Container>
    )
  }
}

export default ChatScreen
