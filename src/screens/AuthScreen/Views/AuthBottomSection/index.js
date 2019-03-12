import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import { icVkontakte, icFacebook, icInstagram } from '../../../../assets/images'

export default function BottomSection({ children, onPressText, buttonText }) {
  return (
    <View style={styles.bottomSection}>
      {children}
      {onPressText ? (
        <TouchableOpacity onPress={onPressText}>
          <Text style={styles.text}>{buttonText}</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.text}>{buttonText}</Text>
      )}
      <View style={styles.socials}>
        <TouchableOpacity>
          <Image source={icVkontakte} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icFacebook} style={styles.iconStyle} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icInstagram} style={styles.iconStyle} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
