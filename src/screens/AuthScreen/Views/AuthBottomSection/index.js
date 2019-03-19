import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { Text } from 'native-base'
import styles from './styles'

import { icVkontakte, icFacebook, icInstagram } from '../../../../assets/images'

export default function BottomSection({
  children,
  onPressText,
  plainText,
  buttonText,
  icon,
  iconColor,
  textColor,
  underline,
  facebookIconStyle
}) {
  return (
    <View style={styles.bottomSection}>
      {children}
      {onPressText ? (
        <View
          style={{
            width: '70%',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row'
          }}
        >
          {icon && <Image source={icon} style={styles.buttonIcon} />}
          <Text style={[styles.plainText, icon && { marginLeft: 9 }]}>{plainText}</Text>
          <TouchableOpacity onPress={onPressText}>
            <Text
              style={[
                styles.buttonText,
                {
                  color: textColor,
                  textDecorationLine: underline && 'underline'
                }
              ]}
            >
              {buttonText}
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <Text style={styles.text}>{buttonText}</Text>
      )}
      <View style={styles.socials}>
        <TouchableOpacity>
          <Image source={icVkontakte} style={[styles.iconStyle, { tintColor: iconColor }]} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={icFacebook}
            style={[
              styles.iconStyle,
              {
                tintColor: iconColor
              },
              facebookIconStyle
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={icInstagram} style={[styles.iconStyle, { tintColor: iconColor }]} />
        </TouchableOpacity>
      </View>
    </View>
  )
}
