import React from 'react'
import { Image } from 'react-native'
import { Header, Left, Right, Button, Icon, Text } from 'native-base'
import styles from './styles'

import { icLeftArrow } from '../../assets/images'

export default function AuthHeader({ routeName, onPress, onBackPress }) {
  return (
    <Header style={styles.header}>
      <Left>
        {onBackPress && (
          <Button onPress={onBackPress} transparent>
            <Image source={icLeftArrow} style={styles.icon} />
            <Text style={styles.backTextStyle}>назад</Text>
          </Button>
        )}
      </Left>
      <Right>
        {routeName && (
          <Button onPress={onPress} transparent>
            <Text style={styles.textStyle}>{routeName}</Text>
          </Button>
        )}
      </Right>
    </Header>
  )
}
