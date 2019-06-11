import React from 'react'
import { Modal, ScrollView } from 'react-native'

import styles from './styles'
import LinearGradient from 'react-native-linear-gradient'
import { Image } from 'react-native'
import { Text, Left, Right, View, Content } from 'native-base'
import Header from '../Header'
import { PassengerFillForm } from '../Forms'

export function PopUpModal({
  isVisible,
  onBackPress,
  icon,
  text,
  title,
  routeName,
  onPress,
  passengerAmount,
  onAddPassengerPress,
  onRemovePassengerPress
}) {
  return (
    <Modal animationType="slide" visible={isVisible}>
      <LinearGradient
        useAngle
        angle={105.98}
        locations={[0, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0 }}
        style={styles.linearGradient}
        colors={['#95499B', '#2131B5']}
      >
        <Header
          onBackPress={onBackPress}
          onPress={!passengerAmount && onPress}
          isModalHeader
          routeName={!passengerAmount && routeName}
        />
        {passengerAmount >= 1 ? (
          <ScrollView
            scrollEnabled
            enableAutomaticScroll
            contentContainerStyle={[
              styles.scrollableSection,
              {
                justifyContent: passengerAmount > 3 ? 'flex-start' : 'center',
                paddingBottom: 50
              }
            ]}
          >
            <PassengerFillForm
              onRemovePassengerPress={onRemovePassengerPress}
              onAddPassengerPress={onAddPassengerPress}
              passengerAmount={passengerAmount}
            />
            <Text style={styles.textStyle}>
              Пожалуйста, укажите имена всех пассажиров, для которых Вы бронируете места
            </Text>
          </ScrollView>
        ) : (
          <View style={styles.section}>
            {icon && <Image source={icon} style={styles.icon} />}
            {title && <Text style={styles.titleStyle}>{title}</Text>}
            {text && <Text style={styles.textStyle}>{text}</Text>}
          </View>
        )}
      </LinearGradient>
    </Modal>
  )
}
