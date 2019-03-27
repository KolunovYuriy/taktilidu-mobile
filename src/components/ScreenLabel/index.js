import React from 'react'
import { View } from 'react-native'
import { Text } from 'native-base'

import styles from './styles'

export default function ScreenLabel({ mainText, additionalText, noHeader, noMargin }) {
  return (
    <View
      style={[
        noHeader ? styles.sectionWithHeader : styles.section,
        noMargin && { marginLeft: 0, marginRight: 0 }
      ]}
    >
      <Text style={styles.text}>{mainText}</Text>
      {additionalText && <Text style={[styles.text, styles.additionalText]}>{additionalText}</Text>}
    </View>
  )
}
