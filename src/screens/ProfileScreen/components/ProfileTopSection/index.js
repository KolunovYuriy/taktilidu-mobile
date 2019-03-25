import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Text, Thumbnail } from 'native-base'

import styles from './styles'

export default function ProfileTopSection({ userImg, userName, registerDate, lightTheme }) {
  return (
    <Fragment>
      {lightTheme ? (
        <View style={styles.ltHorizontalSection}>
          <Thumbnail style={styles.ltAvatar} source={userImg} />
          <View style={styles.verticalSection}>
            <Text style={styles.ltRegisterDateStyle}>На сайте с 12 октября 2018 года</Text>
            <Text style={styles.ltProfileStyle}>Вячеслав Михайлов</Text>
          </View>
        </View>
      ) : (
        <View style={styles.horizontalSection}>
          <Thumbnail style={styles.avatar} source={userImg} />
          <View style={styles.verticalSection}>
            <Text style={styles.registerDateStyle}>Дата регистрация: 12 октября 2018</Text>
            <Text style={styles.profileStyle}>Вячеслав Михайлов</Text>
          </View>
        </View>
      )}
    </Fragment>
  )
}
