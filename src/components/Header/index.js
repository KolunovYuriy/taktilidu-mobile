import React from 'react'
import { Image } from 'react-native'
import { Header, Left, Right, Button, Icon, Text } from 'native-base'
import styles from './styles'

import { icLeftArrow } from '../../assets/images'

export default function AuthHeader({ routeName, onPress, onBackPress, headerItems }) {
  return (
    <Header style={styles.header}>
      <Left>
        {onBackPress && (
          <Button onPress={onBackPress} transparent>
            <Image source={icLeftArrow} style={styles.icon} />
            <Text style={styles.backTextStyle} uppercase={false}>
              назад
            </Text>
          </Button>
        )}
      </Left>
      <Right>
        {routeName && (
          <Button onPress={onPress} transparent>
            <Text style={styles.textStyle} uppercase={false}>
              {routeName}
            </Text>
          </Button>
        )}
        {headerItems &&
          headerItems.length > 0 &&
          headerItems.map((item, index) => (
            <Button key={index} onPress={item.onButtonPress} transparent>
              <Image source={item.icon} style={styles.rightSideIcon} />
            </Button>
          ))}
      </Right>
    </Header>
  )
}
