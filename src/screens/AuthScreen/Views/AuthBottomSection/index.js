import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './styles'

import { icVkontakte, icFacebook, icInstagram } from '../../../../assets/images'

export default function BottomSection({ children, onPressText, plainText, buttonText, icon }) {
  return (
    <View style={styles.bottomSection}>
      {children}
      {onPressText ? (
        <View
          style={{
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          {icon && <Image source={icon} style={styles.buttonIcon} />}
          <Text style={styles.text}>{plainText}</Text>
          <TouchableOpacity onPress={onPressText}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
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
