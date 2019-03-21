import React from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'

import styles from './styles'

export default function ProfileTopSection({ userImg, userName, registerDate }) {
  return (
    <View style={styles.horizontalSection}>
      <Thumbnail style={{ marginRight: 10 }} source={userImg} />
      <View style={styles.verticalSection}>
        <Text style={styles.registerDateStyle}>На сайте с 12 октября 2018 года</Text>
        <Text style={styles.profileStyle}>Вячеслав Михайлов</Text>
      </View>
    </View>
  )
}
