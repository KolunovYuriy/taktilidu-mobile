import React, { Component, Fragment } from 'react'
import { Image, Modal, Dimensions, TouchableOpacity } from 'react-native'
import { View, Text, Container, Button, Icon } from 'native-base'
import ImageZoom from 'react-native-image-pan-zoom'

import Header from '../../../components/Header'
import Content from '../../../components/MainContent'

import styles from './styles'
import { glImg1, glImg2 } from '../../../assets/images'

const images = [glImg1, glImg2, glImg1, glImg2, glImg1, glImg2, glImg1, glImg2]

class CarGalleryScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      isModalVisible: false,
      activeImage: null
    }
  }

  onImagePress = image => {
    this.setState(prevState => ({
      isModalVisible: !prevState.isModalVisible,
      activeImage: image
    }))
  }

  renderGallery = () => (
    <View style={styles.gallery}>
      {images.map((item, index) => (
        <Fragment key={index}>
          <TouchableOpacity onPress={() => this.onImagePress(item)}>
            <Image style={styles.image} source={item} />
          </TouchableOpacity>
        </Fragment>
      ))}
      <Modal visible={this.state.isModalVisible}>
        <ImageZoom
          cropWidth={Dimensions.get('window').width}
          cropHeight={Dimensions.get('window').height}
          imageWidth={Dimensions.get('window').width}
          imageHeight={Dimensions.get('window').height}
        >
          <Image
            style={{ height: '100%', width: '100%', resizeMode: 'contain' }}
            source={this.state.activeImage}
          />
        </ImageZoom>
        <Button rounded style={styles.closeButton} onPress={() => this.onImagePress(null)}>
          <Icon name="close" />
        </Button>
      </Modal>
    </View>
  )

  render() {
    const { navigation } = this.props
    return (
      <Container>
        <Header onBackPress={() => navigation.goBack()} />
        <Content padding={15}>
          <View style={styles.screenTitle}>
            <Text style={styles.text}>Mercedes Benz Серый</Text>
            <Text style={[styles.text, { color: '#C4C4C4' }]}> - ХХ1234ХХ</Text>
          </View>
          {this.renderGallery()}
        </Content>
      </Container>
    )
  }
}

export default CarGalleryScreen
