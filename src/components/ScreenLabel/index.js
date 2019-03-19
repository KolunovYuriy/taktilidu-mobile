import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'

import styles from './styles'

export default function ScreenLabel({ mainText, additionalText }) {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>{mainText}</Text>
      {additionalText && <Text style={[styles.text, styles.additionalText]}>{additionalText}</Text>}
    </View>
  )
}
