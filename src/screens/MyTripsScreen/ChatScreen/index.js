import React, { Component, Fragment } from 'react'
import { Image, KeyboardAvoidingView } from 'react-native'
import { Container, Button, Thumbnail, View, Text, Icon, Textarea } from 'native-base'

import Header from '../../../components/Header'
import { GiftedChat, Send, InputToolbar } from 'react-native-gifted-chat'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment'

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
            {item.isChatOpen ? (
              <Text style={styles.helpChatListItemOpen}>Открыто</Text>
            ) : (
              <Text style={styles.helpChatListItemOpen}>Закрыто</Text>
            )}
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

  _uploadImage = () => {
    ImagePicker.showImagePicker(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        let source = { uri: response.uri }
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState(previousState => ({
          messages: GiftedChat.append(previousState.messages, {
            _id: 2,
            createdAt: moment(),
            user: {
              _id: 1
            },
            image: response.uri
          })
        }))
      }
    })
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
          renderInputToolbar={!navigation.state.params.isChatOpen ? () => null : undefined}
          alwaysShowSend
          isAnimated
          renderComposer={props => {
            return (
              <Textarea
                onChangeText={text => props.onTextChanged(text)}
                enablesReturnKeyAutomatically
                multiline
                isAnimated
                keyboardAppearance="default"
                minComposerHeight={44}
                style={{
                  flex: 1,
                  height: '100%'
                }}
                placeholder="Написать сообщение..."
              />
            )
          }}
          renderSend={props => {
            return (
              <Send {...props} containerStyle={{ height: '100%' }}>
                <View
                  style={{
                    justifyContent: 'center',
                    flexDirection: 'column',
                    alignItems: 'center',
                    height: '100%',
                    paddingRight: 10
                  }}
                >
                  <Icon
                    name="md-send"
                    style={{
                      color: '#9B4B9A'
                    }}
                  />
                </View>
              </Send>
            )
          }}
          renderActions={() => {
            return (
              <Button
                transparent
                style={{
                  paddingTop: 0,
                  paddingBottom: 0,
                  height: '100%'
                }}
                onPress={this._uploadImage}
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

const options = {
  title: 'Выбрать файл',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

export default ChatScreen
