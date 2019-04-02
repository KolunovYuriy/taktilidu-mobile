import React, { Fragment } from 'react'
import { Image } from 'react-native'
import { Text, Thumbnail, View, Button, Input, Item } from 'native-base'

import styles from './styles'
import { icEdit } from '../../../../assets/images'

export default function ProfileTopSection({
  userImg,
  userName,
  registerDate,
  lightTheme,
  editable,
  onNameChange,
  nameValue,
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
            {editable ? (
              <Item style={styles.item}>
                <Input
                  ref={c => (this.nameInput = c)}
                  style={styles.profileStyle}
                  onChangeText={onNameChange}
                  value={nameValue}
                />
                <Button
                  transparent
                  style={{
                    height: 'auto',
                    paddingTop: 0,
                    paddingBottom: 0
                  }}
                  onPress={() => this.nameInput._root.focus()}
                >
                  <Image source={icEdit} style={styles.iconNameEdit} />
                </Button>
              </Item>
            ) : (
              <Text style={styles.profileStyle}>Вячеслав Михайлов</Text>
            )}
          </View>
        </View>
      )}
    </Fragment>
  )
}
