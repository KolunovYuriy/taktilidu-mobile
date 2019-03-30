import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Text, Thumbnail, View, Button } from 'native-base'

import styles from './styles'
import { icEdit } from '../../../../assets/images'

export default function ProfileTopSection({
  userImg,
  userName,
  registerDate,
  lightTheme,
  editable,
  onImageEditPress
}) {
  return (
    <Fragment>
      {lightTheme ? (
        <View style={styles.ltHorizontalSection}>
          <Thumbnail style={styles.ltAvatar} source={userImg} />
          <View style={[styles.verticalSection]}>
            <Text style={styles.ltRegisterDateStyle}>На сайте с 12 октября 2018 года</Text>
            <Text style={styles.ltProfileStyle}>Вячеслав Михайлов</Text>
          </View>
        </View>
      ) : (
        <View style={[styles.horizontalSection, { paddingBottom: 20 }]}>
          <View>
            <Thumbnail style={styles.avatar} source={userImg} />
            {editable && (
              <Button style={styles.editButton} onPress={onImageEditPress}>
                <Image source={icEdit} style={styles.iconEdit} />
              </Button>
            )}
          </View>
          <View style={[styles.verticalSection, { marginLeft: 15 }]}>
            <Text style={styles.registerDateStyle}>Дата регистрация: 12 октября 2018</Text>
            <Text style={styles.profileStyle}>Вячеслав Михайлов</Text>
          </View>
        </View>
      )}
    </Fragment>
  )
}
