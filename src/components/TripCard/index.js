import React from 'react'
import { View, Image } from 'react-native'
import ViewOverflow from 'react-native-view-overflow'
import { Text, Button } from 'native-base'

import styles from './styles'
import { icCirclePlus } from '../../assets/images'

export default function TripCard() {
  return (
    <ViewOverflow style={[styles.horizontalSection, styles.cardItem]}>
      <View style={styles.cityNameSection}>
        <Text style={styles.city}>г. Санкт-Петербург</Text>
        <Text style={[styles.city, { fontWeight: 'normal' }]}>г. Москва</Text>
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
