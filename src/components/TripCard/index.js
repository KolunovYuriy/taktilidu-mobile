import React from 'react'
import { View, Image, Platform } from 'react-native'
import ViewOverflow from 'react-native-view-overflow'
import { Text, Button } from 'native-base'

import styles from './styles'
import { icCirclePlus, icLine } from '../../assets/images'

export default function TripCard() {
  return (
    <ViewOverflow style={[styles.horizontalSection, styles.cardItem]}>
      <Image
        source={icLine}
        style={{
          height: 55,
          width: 5.5,
          resizeMode: 'contain',
          marginLeft: 8,
          marginTop: 2,
          marginRight: 8,
          alignSelf: 'center'
        }}
      />
      <View style={styles.cityNameSection}>
        <Text style={styles.city}>г. Санкт-Петербург</Text>
        <Text style={[styles.city, { fontFamily: 'OpenSans-Regular' }]}>г. Москва</Text>
      </View>
      <View style={styles.priceSection}>
        <Text style={styles.priceText}>от{'\n'}900р</Text>
      </View>
      <Button style={styles.circlePlusButton} transparent>
        <Image source={icCirclePlus} style={styles.circlePlus} />
      </Button>
    </ViewOverflow>
  )
}
