import React from 'react'
import { View, Image } from 'react-native'
import { ListItem, Text, Thumbnail, Label, Button } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import { icBorder, icLine } from '../../assets/images'
import styles from './styles'

export default function TripDetailItem({
  tripDetailType,
  fromCity,
  betweenCity,
  toCity,
  date,
  time,
  price,
  carId,
  driverName,
  onPress
}) {
  switch (tripDetailType) {
    case 'TripResultsScreen':
      return (
        <ListItem style={[styles.listItem, styles.verticalSection]}>
          <View style={styles.horizontalSection}>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Image source={icLine} style={styles.iconLine} />
              <View style={styles.verticalSection}>
                <Text style={styles.textCityStyle}>{fromCity}</Text>
                <Text style={styles.toCityStyle}>{toCity}</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <Image style={styles.iconBorder} source={icBorder} />
              <View style={styles.verticalSection}>
                <Label style={styles.label}>Время:</Label>
                <Text style={styles.textStyle}>{time}</Text>
              </View>
              <Image style={styles.iconBorder} source={icBorder} />
              <View style={styles.verticalSection}>
                <Label style={styles.label}>Цена:</Label>
                <Text style={styles.price}>{price}</Text>
              </View>
            </View>
          </View>
          <View style={[styles.bottomSection, { backgroundColor: '#F4F4F4' }]}>
            <View style={styles.driverinfo}>
              <Thumbnail
                small
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Text style={styles.driverName}>
                {driverName} - {carId}
              </Text>
            </View>
            <Text style={styles.moreButton} onPress={onPress}>
              Детальнее
            </Text>
          </View>
        </ListItem>
      )
    case 'TripDetailsScreen':
      return (
        <ListItem style={[styles.listItem, styles.verticalSection]}>
          <View style={styles.horizontalSection}>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'flex-start' }}>
              <Image source={icLine} style={styles.iconLine} />
              <View style={styles.verticalSection}>
                <Text style={styles.textCityStyle}>{fromCity}</Text>
                <Text style={styles.textCityStyle}>{betweenCity}</Text>
                <Text style={styles.toCityStyle}>{toCity}</Text>
              </View>
            </View>
            <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={styles.verticalSection}>
                <Label style={styles.label}>Дата и время:</Label>
                <Text style={styles.textStyle}>{date}</Text>
                <Text style={styles.textStyle}>{time}</Text>
              </View>
              <View style={styles.verticalSection}>
                <Label style={styles.label}>Цена:</Label>
                <Text style={styles.price}>{price}</Text>
              </View>
            </View>
          </View>
          <Label style={[styles.label, styles.sectionLabel]}>Перевозчик:</Label>
          <Text style={styles.carrierInfo}>ИП “Очень хороший перевозчик”</Text>
          <Label style={[styles.label, styles.sectionLabel]}>Водитель:</Label>
          <View style={styles.bottomSection}>
            <View style={styles.driverinfo}>
              <Thumbnail
                small
                style={{ width: 20, height: 20, marginRight: 10 }}
                source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
              />
              <Text style={styles.driverName}>
                {driverName} - {carId}
              </Text>
            </View>
            <Text style={styles.moreButton} onPress={onPress}>
              О водителе
            </Text>
          </View>
          <LinearGradient
            useAngle
            angle={157.54}
            start={{ x: 0, y: 0 }}
            locations={[0, 1]}
            end={{ x: 1, y: 0 }}
            style={styles.linearGradient}
            colors={['#FD6585', '#0D25B9']}
          >
            <Button style={styles.reserveButton} full>
              <Text>Забронировать</Text>
            </Button>
          </LinearGradient>
        </ListItem>
      )
  }
}
