import React, { Component, Fragment } from 'react'
import { Image, ScrollView, TouchableHighlight } from 'react-native'
import { Container, Text, View, Spinner } from 'native-base'
import ImageSlider from 'react-native-image-slider'

import ScreenLabel from '../../components/ScreenLabel'
import Content from '../../components/MainContent'
import TripCard from '../../components/TripCard'

import { icCircle, imgSlider } from '../../assets/images'
import styles from './styles'

const images = [
  {
    url: imgSlider,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    url: imgSlider,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    url: imgSlider,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    url: imgSlider,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    url: imgSlider,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
]

const tripListInfo = [{}, {}, {}, {}]

class HomeScreen extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activeButton: 0
    }
  }

  renderTripList = () => {
    return (
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {tripListInfo.map((item, index) => (
          <View>
            <TripCard key={index} />
            <TripCard key={index + 4} />
          </View>
        ))}
      </ScrollView>
    )
  }

  render() {
    return (
      <Container>
        <ImageSlider
          autoPlayWithInterval={3000}
          style={styles.customSlide}
          images={images}
          customSlide={({ index, item, style, width }) => {
            return (
              // It's important to put style here because it's got offset inside
              <View key={index} style={style}>
                <Image source={item.url} style={styles.customImage} />
                <View
                  style={{
                    flex: 1,
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                    zIndex: 10,
                    backgroundColor: '#000',
                    opacity: 0.6
                  }}
                />
                <Text style={styles.title}>{item.text}</Text>
              </View>
            )
          }}
          customButtons={(position, move) => (
            <View style={styles.buttons}>
              {images.map((image, index) => {
                return (
                  <Image
                    key={index}
                    source={icCircle}
                    style={[styles.icon, position === index && { tintColor: '#9B4B9A' }]}
                  />
                )
              })}
            </View>
          )}
        />
        <Content padding={10}>
          <ScreenLabel mainText="Популярные маршруты" />
          {this.renderTripList()}
        </Content>
      </Container>
    )
  }
}

export default HomeScreen
