import React, { Fragment } from 'react'
import { View, Image, Dimensions, ImageBackground } from 'react-native'
import { ListItem, Text, Thumbnail, Label } from 'native-base'
import { BoxShadow } from 'react-native-shadow'
import LinearGradient from 'react-native-linear-gradient'
import {
  icLine2x,
  icPassenger,
  icCheck,
  icMore,
  icPassengerEmpty,
  icX,
  icPassengerGray
} from '../../assets/images'
import styles from './styles'

const { width, height } = Dimensions.get('window')
const shadowOpt = {
  width: width - 32,
  height: 190,
  color: '#ccc',
  border: 10,
  radius: 6,
  opacity: 0.2,
  x: 0,
  y: 0,
  style: {
    alignSelf: 'center',
    marginBottom: 16
  }
}

renderStatus = status => {
  switch (status) {
    case 'accepted':
      return (
        <View style={[styles.statusInfo]}>
          <Text style={[styles.statusText, { color: '#9B4B9A' }]}>Заказ принят водителем</Text>
          <Image source={icCheck} style={styles.icCheck} />
        </View>
      )
    case 'notAcceptedYet':
      return (
        <View style={styles.statusInfo}>
          <Text style={[styles.statusText, { color: '#5F5F5F' }]}>Пока не принят водителем</Text>
        </View>
      )
    case 'fromDriver':
      return (
        <View style={styles.statusInfo}>
          <Text style={[styles.statusText, { color: '#9B4B9A' }]}>Заказ от водителя</Text>
          <Image source={icCheck} style={styles.icCheck} />
        </View>
      )
    default:
      return (
        <View style={styles.statusInfo}>
          <Text style={[styles.statusText, { color: '#AAAAAA' }]}>Заказ от водителя</Text>
        </View>
      )
  }
}

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
  onBoxLinkPress,
  passengersAmount,
  passengersJoined,
  isPastTrip,
  isFeedbackMade,
  status,
  isGroupFilledOut
}) {
  switch (tripDetailType) {
    case 'TripResultsScreen':
      const passengersLeft = passengersAmount - passengersJoined
      const passengersList = Array.apply(null, Array(passengersAmount)).map(function(x, i) {
        return i
      })
      const passengersJoinedList = Array.apply(
        null,
        Array(passengersJoined > 6 ? 6 : passengersJoined)
      ).map(function(x, i) {
        return i
      })
      const passengersLeftList = Array.apply(
        null,
        Array(passengersLeft > 6 ? 6 : passengersLeft)
      ).map(function(x, i) {
        return i
      })

      return (
        <BoxShadow setting={shadowOpt}>
          <ListItem style={[styles.tDListItem, styles.verticalSection]}>
            {isGroupFilledOut ? (
              <Fragment>
                <View style={styles.tDhorizontalSection}>
                  <View style={styles.section}>
                    <View style={[styles.verticalSection, { flex: 0.66 }]}>
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={icX} style={styles.icX} />
                        <Label style={[styles.tDGroupLabel, { color: '#818181' }]}>
                          Группа набрана
                        </Label>
                      </View>
                      <Label style={styles.tDLabel}>Присоединились: {passengersJoined}</Label>
                      <View style={{ flexDirection: 'row' }}>
                        {passengersJoinedList.map((item, index) => {
                          return (
                            <Image
                              key={index}
                              source={icPassengerGray}
                              style={styles.icPassenger}
                            />
                          )
                        })}
                        {passengersJoined > 6 && (
                          <Image
                            source={icMore}
                            style={[styles.icMore, { tintColor: '#AAAAAA' }]}
                          />
                        )}
                        {passengersJoined === 0 && (
                          <Image source={icPassengerEmpty} style={styles.icPassenger} />
                        )}
                      </View>
                      <Label style={styles.tDLabel}>Осталось мест: {passengersLeft}</Label>
                      <View style={{ flexDirection: 'row' }}>
                        {passengersLeftList.map((item, index) => {
                          return (
                            <Image
                              key={index}
                              source={icPassengerGray}
                              style={styles.icPassenger}
                            />
                          )
                        })}
                        {passengersLeft > 6 && (
                          <Image
                            source={icMore}
                            style={[styles.icMore, { tintColor: '#AAAAAA' }]}
                          />
                        )}
                        {passengersLeft === 0 && (
                          <Image source={icPassengerEmpty} style={styles.icPassenger} />
                        )}
                      </View>
                    </View>
                    <View style={[styles.verticalSection, { flex: 0.34 }]}>
                      <Text style={[styles.tDtextStyle, { color: '#AAAAAA' }]}>{time}</Text>
                      <Text style={[styles.tDprice, { color: '#AAAAAA' }]}>{price}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.bottomSection, { backgroundColor: '#F4F4F4' }]}>
                  {this.renderStatus(status)}
                  <Text style={[styles.moreButton, { color: '#818181' }]} onPress={onPress}>
                    Детальнее
                  </Text>
                </View>
              </Fragment>
            ) : (
              <Fragment>
                <View style={styles.tDhorizontalSection}>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'flex-start',
                      alignItems: 'center'
                    }}
                  >
                    <View style={[styles.verticalSection, { flex: 0.66 }]}>
                      <Label style={styles.tDGroupLabel}>Группа набирается</Label>
                      <Label style={styles.tDLabel}>Присоединились: {passengersJoined}</Label>
                      <View style={{ flexDirection: 'row' }}>
                        {passengersJoinedList.map((item, index) => (
                          <Image key={index} source={icPassenger} style={styles.icPassenger} />
                        ))}
                        {passengersJoined > 6 && <Image source={icMore} style={styles.icMore} />}
                        {passengersJoined === 0 && (
                          <Image source={icPassengerEmpty} style={styles.icPassenger} />
                        )}
                      </View>
                      <Label style={styles.tDLabel}>Осталось мест: {passengersLeft}</Label>
                      <View style={{ flexDirection: 'row' }}>
                        {passengersLeftList.map((item, index) => (
                          <Image key={index} source={icPassenger} style={styles.icPassenger} />
                        ))}
                        {passengersLeft > 6 && <Image source={icMore} style={styles.icMore} />}
                        {passengersLeft === 0 && (
                          <Image source={icPassengerEmpty} style={styles.icPassenger} />
                        )}
                      </View>
                    </View>
                    <View style={[styles.verticalSection, { flex: 0.34 }]}>
                      <Text style={styles.tDtextStyle}>{time}</Text>
                      <Text style={styles.tDprice}>{price}</Text>
                    </View>
                  </View>
                </View>
                <View style={[styles.bottomSection, { backgroundColor: '#F4F4F4' }]}>
                  {this.renderStatus(status)}
                  <Text style={styles.moreButton} onPress={onPress}>
                    Детальнее
                  </Text>
                </View>
              </Fragment>
            )}
          </ListItem>
        </BoxShadow>
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
                <Text style={[styles.textStyle, { paddingBottom: 8 }]}>{date}</Text>
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
            <Text style={styles.reserveButton}>Присоединиться к поездке</Text>
          </LinearGradient>
        </ListItem>
      )
    case 'MyCurrentTripScreen':
      return (
        <BoxShadow setting={shadowOpt}>
          <ListItem style={[styles.mctListItem, styles.verticalSection]}>
            <View style={[styles.mctHorizontalSection]}>
              <View
                style={[styles.verticalSection, { flex: 0.45, justifyContent: 'space-between' }]}
              >
                <Text style={styles.mctTextCity}>{fromCity}</Text>
                <Text style={styles.mctTextCity}>{toCity}</Text>
              </View>
              <View style={{ flex: 0.55, flexDirection: 'row', justifyContent: 'space-around' }}>
                <View style={styles.verticalSection}>
                  <Text style={styles.mctDate}>{date}</Text>
                  <Text style={styles.mctTime}>{time}</Text>
                </View>
                <View style={styles.verticalSection}>
                  <Text style={styles.mctDate}>{date}</Text>
                  <Text style={styles.mctTime}>{time}</Text>
                  <Text style={styles.mctPrice}>{price}</Text>
                </View>
              </View>
            </View>
            <View style={[styles.mctCarrierSection, { justifyContent: 'flex-start' }]}>
              <Text style={styles.mctCarrierInfo}>ИП “Очень хороший перевозчик”</Text>
            </View>
            <Text style={styles.chatLink} onPress={onBoxLinkPress}>
              {isPastTrip
                ? isFeedbackMade
                  ? 'Мои отзывы'
                  : 'Оставить отзыв'
                : 'Перейти в чат по поездке'}
            </Text>
            <View style={styles.mctBottomSection}>
              <View style={styles.driverinfo}>
                <Thumbnail
                  small
                  style={{ width: 20, height: 20, marginRight: 10 }}
                  source={{
                    uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'
                  }}
                />
                <Text style={styles.driverName}>
                  {driverName} - {carId}
                </Text>
              </View>
              <Text style={styles.mctAboutDriver} onPress={onPress}>
                Детальнее
              </Text>
            </View>
          </ListItem>
        </BoxShadow>
      )
  }
}
