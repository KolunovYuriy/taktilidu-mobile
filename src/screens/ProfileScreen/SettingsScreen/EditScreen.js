import React, { Component } from 'react'
import { Image } from 'react-native'
import { Button, Container, DatePicker, Text, List, ListItem, View, Input } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'
import ProfileTopSection from '../components/ProfileTopSection'
import ScreenLabel from '../../../components/ScreenLabel'
import ImagePicker from 'react-native-image-picker'
import moment from 'moment/min/moment-with-locales'

import {
  icNotification,
  icGender,
  imgUserPhoto,
  icEdit,
  icPhone,
  icBirthday,
  icEmail
} from '../../../assets/images'

import styles from './styles'

const editList = [
  {
    icon: icGender,
    sectionType: 'genderPicker',
    text: 'Мужской'
  },
  {
    icon: icBirthday,
    sectionType: 'datePicker',
    text: '11 августа 1996 года'
  },
  {
    icon: icEmail,
    sectionType: 'email',
    text: 'Slavik21.ua@gmail.com'
  },
  {
    icon: icPhone,
    routeName: '',
    text: '+3 (063) 760 00 00'
  }
]

const options = {
  title: 'Выбрать фото',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
}

class EditScreen extends Component {
  constructor(props) {
    super(props)
    this.state = {
      chosenDate: null,
      avatarSource: imgUserPhoto,
      gender: null,
      isInputFocused: false,
      email: 'Slavik21.ua@gmail.com',
      phoneNumber: '+3 (063) 760 00 00'
    }
  }

  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  componentWillMount() {
    moment.locale('ru')
  }

  setDate = newDate => {
    this.setState({ chosenDate: newDate })
  }

  onChooseGender = gender => {
    this.setState({
      gender
    })
  }

  renderSettingsList = items => {
    const { navigation } = this.props
    const { gender, isInputFocused, email, phoneNumber } = this.state
    return (
      <List style={styles.list}>
        {items.map((item, index) => {
          switch (item.sectionType) {
            case 'genderPicker':
              return (
                <ListItem key={index} style={styles.listItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.icon} style={styles.icon} />
                    <Text
                      onPress={() => this.onChooseGender('male')}
                      style={[styles.genderText, gender === 'male' && styles.activeText]}
                    >
                      Мужской
                    </Text>
                    <Text
                      onPress={() => this.onChooseGender('female')}
                      style={[styles.genderText, gender === 'female' && styles.activeText]}
                    >
                      Женский
                    </Text>
                  </View>
                </ListItem>
              )
            case 'datePicker':
              return (
                <ListItem key={index} style={styles.listItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.icon} style={styles.icon} />
                    <DatePicker
                      formatChosenDate={date => {
                        return moment(date).format('LL')
                      }}
                      defaultDate={new Date(2018, 4, 4)}
                      minimumDate={new Date(1900, 1, 1)}
                      maximumDate={new Date(2001, 12, 31)}
                      modalTransparent={false}
                      locale={'ru'}
                      textStyle={styles.datepicker}
                      timeZoneOffsetInMinutes={undefined}
                      animationType={'fade'}
                      androidMode={'spinner'}
                      onDateChange={this.setDate}
                    />
                  </View>
                  <Button style={styles.editButton} transparent>
                    <Image source={icEdit} style={styles.iconEdit} />
                  </Button>
                </ListItem>
              )
            case 'email':
              return (
                <ListItem key={index} style={styles.listItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.icon} style={styles.icon} />
                    <Input
                      ref={c => (this._emailInput = c)}
                      style={styles.listItemInput}
                      value={email}
                      placeholder={item.text}
                      onChangeText={text => this.setState({ email: text })}
                    />
                  </View>
                  <Button
                    style={styles.editButton}
                    onPress={() => {
                      console.log(this._emailInput._root)
                      this._emailInput._root.focus()
                      this.setState(prevState => ({ isInputFocused: !prevState.isInputFocused }))
                    }}
                    transparent
                  >
                    <Image source={icEdit} style={styles.iconEdit} />
                  </Button>
                </ListItem>
              )
            default:
              return (
                <ListItem key={index} style={styles.listItem}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={item.icon} style={styles.icon} />
                    <Input
                      ref={c => (this._phoneInput = c)}
                      style={styles.listItemInput}
                      value={phoneNumber}
                      placeholder={item.text}
                      onChangeText={text => this.setState({ phoneNumber: text })}
                    />
                  </View>
                  <Button
                    style={styles.editButton}
                    onPress={() => {
                      console.log(this._phoneInput._root)
                      this._phoneInput._root.focus()
                      this.setState(prevState => ({ isInputFocused: !prevState.isInputFocused }))
                    }}
                    transparent
                  >
                    <Image source={icEdit} style={styles.iconEdit} />
                  </Button>
                </ListItem>
              )
          }
        })}
      </List>
    )
  }

  onImageUpload = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      } else {
        const source = { uri: response.uri }

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          avatarSource: source
        })
      }
    })
  }

  render() {
    const { navigation } = this.props
    const { avatarSource } = this.state
    return (
      <Container>
        <LinearGradient
          useAngle
          angle={140.18}
          locations={[0, 1]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0 }}
          style={styles.linearGradient}
          colors={['#EC91B0', '#676ECD']}
        >
          <Header lightTheme onBackPress={() => navigation.goBack()} />
          <ProfileTopSection
            userImg={avatarSource}
            editable
            onImageEditPress={this.onImageUpload}
          />
        </LinearGradient>
        <Content padding={15}>
          <Text style={styles.sectionTitle}>Информация обо мне</Text>
          {this.renderSettingsList(editList)}
        </Content>
      </Container>
    )
  }
}

export default EditScreen
