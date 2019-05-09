import React from 'react'
import { View, ImageBackground, Image } from 'react-native'
import { Text } from 'native-base'

import styles from './styles'
import { imgSpprtBG } from '../../assets/images'

export default function ScreenLabel({
  mainText,
  additionalText,
  noHeader,
  noMargin,
  sectionWithLogo,
  screenType
}) {
  switch (screenType) {
    case 'Support':
      return (
        <View style={styles.screenLabel}>
          <View>
            <Image source={imgSpprtBG} style={styles.imgBG} />
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.6)'
              }}
            />
          </View>
          <Text style={styles.supportText}>{mainText}</Text>
          {additionalText && (
            <Text style={[styles.text, styles.additionalText]}>{additionalText}</Text>
          )}
        </View>
      )
    default:
      return (
        <View
          style={[
            noHeader
              ? styles.sectionWithHeader
              : sectionWithLogo
              ? styles.sectionWithLogo
              : styles.section,
            noMargin && { marginLeft: 0, marginRight: 0 }
          ]}
        >
          <Text style={styles.text}>{mainText}</Text>
          {additionalText && (
            <Text style={[styles.text, styles.additionalText]}>{additionalText}</Text>
          )}
        </View>
      )
  }
}
