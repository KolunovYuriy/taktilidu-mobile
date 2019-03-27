import React from 'react'
import { View, Image } from 'react-native'
import { ListItem, Text, Thumbnail, Label, Button, Item } from 'native-base'
import LinearGradient from 'react-native-linear-gradient'
import { icLine2x, icPassenger } from '../../assets/images'
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
  onPress,
  passengersAmount
}) {
  switch (tripDetailType) {
    case 'TripResultsScreen':
      const passengersList = Array.apply(null, Array(passengersAmount)).map(function(x, i) {
        return i
      })

      return (
        <ListItem style={[styles.listItem, styles.verticalSection]}>
          <View style={styles.tDhorizontalSection}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
              <View style={styles.verticalSection}>
                <Label style={styles.tDLabel}>Время:</Label>
                <Text style={styles.tDtextStyle}>{time}</Text>
              </View>
              <View style={styles.verticalSection}>
                <Label style={styles.tDLabel}>Цена:</Label>
                <Text style={styles.tDprice}>{price}</Text>
              </View>
              <View style={styles.verticalSection}>
                <Label style={styles.tDLabel}>Кол-во пассажиров:</Label>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  {passengersList.map((item, index) => {
                    return <Image key={index} source={icPassenger} style={styles.icPassenger} />
                  })}
                </View>
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
          <View style={[styles.horizontalSection, styles.tripDetailItemSection]}>
            <View
              style={{
                flex: 0.4,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItem: 'center'
              }}
            >
              <Image source={icLine2x} style={styles.iconLine2x} />
              <View style={[styles.verticalSection, { justifyContent: 'space-between' }]}>
                <Text style={styles.textCityStyle}>{fromCity}</Text>
                <Text style={styles.textCityStyle}>{betweenCity}</Text>
                <Text style={styles.toCityStyle}>{toCity}</Text>
              </View>
            </View>
            <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'space-around' }}>
              <View style={styles.verticalSection}>
                <Label style={styles.label}>Дата и время:</Label>
                <Text
                  style={[
                    styles.textStyle,
                    {
                      paddingBottom: 8
                    }
                  ]}
                >
                  {date}
                </Text>
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
            <Text style={styles.aboutDriver} onPress={onPress}>
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
            colors={['#95499B', '#2131B5']}
          >
            <Text style={styles.reserveButton}>Забронировать</Text>
          </LinearGradient>
        </ListItem>
      )
  }
}
